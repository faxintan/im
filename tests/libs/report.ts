import { Module } from '../../src/index';

class Report extends Module {
    private options: object;

    constructor() {
        super();
    }
    
    init(options: object, im: any): Module {
        im.send('test/getOptions').then((opts: object) => {
            this.options = opts || options;
        });
        return this;
    }

    getOptions():object {
        return this.options;
    }

    destroy():void {
        this.options = {};
    }
}

export { Report };