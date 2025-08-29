// Decorators are OOP Features
//Look at class-validator library

//Ecmascript Decorator

//Class Decorator
function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  return class extends target {
    // age = 35;
    constructor(...args: any[]) {
      super(...args);
      console.log("Constructor logger");
    }
  };
}

//Method Decorator
function autoBind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });
  return function (this: any) {
    console.log("Executing original function");
    target.apply(this);
  };
}
function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(ctx);
    return (initial: any) => {
      console.log(initial);
      return initValue;
    };
  };
}
@logger
class Person {
  @replacer("John")
  name = "Max";
  //   constructor() {
  //     this.greet = this.greet.bind(this);
  //   }
  @autoBind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const max = new Person();
const greet = max.greet;
greet();
console.log(max);
