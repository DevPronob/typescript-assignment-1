# What are some differences between interfaces and types in TypeScript?

## What Are Interfaces and Types?
In TypeScript types and interface are use for define stucture.So types and interface are both is use for type safety.interface is primaraly use for defining a shape of a object .but with type can defind primitive,union,intersection.by using type keyword is way to provide type alias to a variable, boolean,function,object.these alias decribe how looks your data will be.on the other hand interface is used for how  object looks like.
## Differences etween interfaces and types in TypeScript
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
