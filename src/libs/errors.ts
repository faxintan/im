interface Fault {
    code: number,
    message: string,
}

class Errors {
    private list: Fault[];

    constructor(errors: Fault[] = []) {
        this.list = errors;
    }

    add(fault: Fault) {
        this.list.push(fault);
    }

    get(code: number): Fault | boolean {
        return this.list.filter(item => item.code === code)[0] || false;
    }

    remove(code: number) {
        this.list = this.list.filter(item => item.code !== code);
    }
}

export default Errors;

export { Errors };