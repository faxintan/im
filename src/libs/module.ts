abstract class Module {
    abstract init(options: object, context: any): Module;
    abstract destroy(): void;
}

export default Module;

export { Module };