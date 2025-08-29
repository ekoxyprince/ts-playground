class UserData<T> {
  constructor(private person: T extends object ? T : unknown) {
    this.person = person;
  }
  show() {
    return this.person;
  }
}
type PersonData = { firstName: string; lastName: string };
const personDetails: PersonData = { firstName: "John", lastName: "Doe" };
const newUser = new UserData<PersonData>(personDetails);
const anotherUser = new UserData<string>("John");
const resp = newUser.show();
const resp2 = anotherUser.show();

interface People<T> {
  peopleObj: T;
}
