export interface Animal {
    name: String;
    age: number;
    move(): void;
    voice?(): String;
}