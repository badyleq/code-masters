/* tslint:disable */
export default class Logger {
    private parent: new() => any;

    constructor(parent: new() => any) {
        this.parent = parent;
    }

    public log(msg: string) {
        console.log(`[${this.parent.name}] [info] ${msg}`);
    }

    public error(msg: string) {
        console.error(`[${this.parent.name}] [error] ${msg}`);
    }
}
