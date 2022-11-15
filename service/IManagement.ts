export interface IManagement<T>{
    add(t: T): void;
    findAll(): T[];
    displayCadres(): void;

    findByName(name: string): string;
}