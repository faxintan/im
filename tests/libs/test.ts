import { Module } from '../../src/index';

class Test extends Module {
    private options: object = {};

    constructor() {
        super();
    }
    
    init(options: object): Module {
        this.options = options;
        return this;
    }

    getOptions():object {
        return this.options;
    }

    destroy():void {
        this.options = {};
    }
}

export { Test };