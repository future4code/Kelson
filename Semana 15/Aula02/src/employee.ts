export abstract class Employee {
    protected name: string;
    protected sold: number;
    protected count: number= 0;

    constructor (name: string, sold: number,) {
        this.name = name;
        this.sold = sold;
        this.count++;
    }

    abstract sayJob(): void
}

