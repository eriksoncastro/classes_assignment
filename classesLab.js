// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

class Person {
  constructor(firstName,lastName,middleName){
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
  }
  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

let jay = new Person("Javon","Fowler","Charles Anthony")
let johnny = new Person("Johnny","Appleseed","Fuji")

console.log (jay["firstName"])

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
console.log(jay.fullName())
console.log(johnny.fullName())

// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
class Book {
  constructor(title,author,rating){
    this.title = title
    this.author = author
    this.rating = rating
  }
  isGood() {
    if (this.rating >= 7){
      return true
    } else{return false}
  }
}
let novel = new Book("Night", "Eli Wiesel",10)
let biography = new Book("The Autobiography of Malcom X","Alex Haley and Malcom X",10)
let kidsBook = new Book("Cat in the Hat","Dr.Seuss",6.5)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
console.log(kidsBook.isGood())