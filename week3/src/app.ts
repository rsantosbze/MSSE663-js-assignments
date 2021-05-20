export interface Car {
    type: string;
    numberOfDoors: number;
    color: string;
    make: string;
    partsSuppliers: string[];

    getType: () => string;
    getNumberOfDoors: () => number;
    isCarRed: () => boolean;
    getPartsSuppliers: () => string[];

}

export class SportsCar implements Car {
    constructor(
        public type: string,
        public numberOfDoors: number,
        public color: string,
        public make: string,
        public partsSuppliers: string[])
    {};
    getType():string { return this.type };
    getNumberOfDoors(): number { return this.numberOfDoors };
    isCarRed(): boolean { return this.color === 'Red' };
    getPartsSuppliers(): string[] { return this.partsSuppliers };
}

const Ferrari = new SportsCar('Fast Sports Car', 2, 'Black', 'Italian', ['Bosch', 'Siemens']);

console.log(`Type of Car is "${Ferrari.getType()}".`);
console.log(`The Car has ${Ferrari.getNumberOfDoors()} doors.`);
console.log(`These are the parts suppliers: ${Ferrari.getPartsSuppliers()}`);
console.log(`The car is painted "RED" : ${Ferrari.isCarRed()}`);

