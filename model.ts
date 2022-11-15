export class Product {
    private _name: string;
    private _age: number;
    private _sex: string;
    private _address: string;



    constructor(name: string, age: number, sex: string, address: string) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._address = address;

    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}

export class Worker extends Product {
    step: number;



    constructor(name: string, age: number, sex: string, address: string, step: number) {

        super(name, age, sex, address);
        this.step = step;

    }
}

export class Engineer extends Product {
    trainingIndustry: string;




    constructor(name: string, age: number, sex: string, address: string, trainingIndustry: string) {
        super(name, age, sex, address);
        this.trainingIndustry = trainingIndustry;

    }
}

export class Staff extends Product {
    public work: string;

    constructor(name: string, age: number, sex: string, address: string, work: string) {
        super(name, age, sex, address);
        this.work = work;
    }
}

