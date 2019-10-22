// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

class Person {
  constructor(firstName,lastName,middleName){
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
  }
}

let jay = new Person("Javon","Fowler","Charles Anthony")
let johnny = new Person("Johnny","Appleseed","Fuji")

console.log (jay["firstName"])

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
