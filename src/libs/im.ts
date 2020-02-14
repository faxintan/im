import Module from './module';
import Errors from './errors';

const errors = new Errors([
    { code: 0, message: 'success' },
    { code: 1, message: 'illegal command !' },
    { code: 2, message: 'module not found ！' },
    { code: 3, message: 'command not found ！' },
    { code: 4, message: 'command execution caught an error !' },
]);

class InstantMessaging {
    private map: { [prop: string]: Module } = {};

    constructor() {}

    registry(name: string, module: Module, options: object = {}):boolean {
        if (!name || !module || !module.init) return false;
        this.map[name] = module.init(options, this);
        return true;
    }

    send(cmd: string, ...args: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof cmd !== 'string') return reject(errors.get(1));

            const [name, ...props] = cmd.split('/');
            const command = this.getCommand(this.getModule(name), props);

            if (typeof command === 'function') {
                try {
                    resolve(command(...args));
                } catch (e) {
                    reject(Object.assign(errors.get(4), { error: e }));
                }                
            } else {
                setTimeout(() => {
                    const cmd2 = this.getCommand(this.getModule(name), props);
    
                    if (!cmd2) return reject(errors.get(3));
    
                    try {
                        resolve(cmd2(...args));
                    } catch (e) {
                        reject(Object.assign(errors.get(4), { error: e }));
                    }
                });
            }
        });
    }

    getModule(name: string): Module {
        return this.map[name];
    }

    private getCommand(module: Module, props: string[] = []): Function {
        const cmd = props.reduce(
            (pre: any, cur) => (pre && pre[cur] ? pre[cur] : null),
            module,
        );
        return typeof cmd === 'function' && cmd.bind(module);
    }

    unregistry(moduleName: string): boolean {
        const module: Module = this.map[moduleName];

        if (!module) return false;

        module.destroy && module.destroy();
        delete this.map[moduleName];

        return true;
    }

    destroy() {
        Object.keys(this.map).forEach((moduleName) => {
            const module = this.map[moduleName];
            module.destroy && module.destroy();
            delete this.map[moduleName];
        });
    }
}

export {
    InstantMessaging,
    InstantMessaging as IM,
};