type StringArr = String[];
// type ElementType<T extends any[]> = T[number];

// let arr = [1, 2, 3, 4, 5];
// let goat: ElementType<StringArr> = arr[0];
let text = "Hello";
type ElementType<T> = T extends any[] ? T[number] : never;
type Example1 = ElementType<StringArr>;
type Example2 = ElementType<typeof text>;

type Person = {
  firstName: string;
  lastName: string;
};
type StringOrNothing<T> = T extends Person ? string : never;
function getFullName<T extends object>(person: T): StringOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as StringOrNothing<T>;
  }
  throw new Error("invalid object type", {
    cause: "Supplied a type that cannot be worked with by the system",
  });
}
console.log(getFullName({ firstName: "John", lastName: "Doe" }));
//console.log(getFullName({}));
