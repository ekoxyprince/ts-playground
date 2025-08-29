//create a user class entity
class User {
  //initialize data constructor
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public pin: string,
    public age: number
  ) {}
  // returning class data
  getProfile(): Omit<User, "password" | "pin" | "getProfile"> {
    const { pin, password, ...profile } = this;
    return profile;
  }
}
//creating a class instance for user entity
const user = new User(
  "John Doe",
  "johndoe@gmail.com",
  "secret_password",
  "secret_pin",
  18
);
//log to see response of user created
console.log("Created: ", user);
//log to see only safe Data
console.log("Safe Data: ", user.getProfile());
