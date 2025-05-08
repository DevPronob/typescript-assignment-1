# What are some differences between interfaces and types in TypeScript?

## What Are Interfaces and Types?
In TypeScript types and interface are use for define stucture.So types and interface are both is use for type safety.interface is primaraly use for defining a shape of a object .but with type can defind primitive,union,intersection.by using type keyword is way to provide type alias to a variable, boolean,function,object.these alias decribe how looks your data will be.on the other hand interface is used for how  object looks like.
## Differences between interfaces and types in TypeScript
in interface support declaration marging but types dosent support declaration marging.with interface you can extends other interfaces by extends .but  type dosent have this ability.so in with type you can set up a single core type(string,number,boolean).other positibily with type is you will be able to create custom type by using unions.interface is better for large scale application and type is not recommand for large scale application.

## examples of interface and type
```ts
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
};
```
<br/>


# What is the use of the keyof keyword in TypeScript? Provide an example

## What is keyof keyword in TypeScript?
keyof is a keyword that is used to extact key from a object.keyof takes an object and produce an string or numaric litarel union.keyof operator derive an new type form and exsisting types keys.it is commonly used in typescript.it create a union of string.
## what is the use of keyof keyword
TypeScript keyof creates the union from a reference object type, not from the object itself. So, the distinction here is keyof always has to be passed the object type as argument, not the actual object.
t’s useful when you want to work with the property names of an object in a type-safe way, ensuring only valid keys are used.
We can use it to define generic functions that work with any object type, without knowing the specific keys of that type. It can also be used to create read-only versions of an interface or to extract specific keys from an interface.

Syntax
type KeysOfType = keyof ObjectType;

## examples of keyof operator
```ts
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name");
```


