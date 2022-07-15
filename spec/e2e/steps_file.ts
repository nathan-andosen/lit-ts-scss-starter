
// in this file you can append custom step methods to 'I' object

// I can not think of a better way to do this, Typescript needs to know
// what extra functions are available in the I object, we have to pass
// these extra functions as a json object into the actor() function below,
// but to add types for that json object, we need to create an interface, so any
// functions you add below must be added to this interface
interface ICustomSteps extends ReturnType<typeof actor> {

}


export = function(): () => ICustomSteps {
  return actor(<any>{
    // Define custom steps here, use 'this' to access default methods of I.

  });
}


