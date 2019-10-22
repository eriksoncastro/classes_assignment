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

// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog {
  constructor(name,breed,mood,hungry){
    this.name = name
    this.breed = breed
    this.mood = mood
    this.hungry = hungry
  }
  playFetch() {
    this.mood = "playful"
    this.hungry = true
    return "Ruff!"
  }
  feed() {
    if (this.hungry === true){
      this.hungry = false
      return "Woof!"
    } else{
      return "The dog doesn't look hungry"
    }
  }
  toString() {
    return `${this.name} is a ${this.breed}. He is in a ${this.mood} mood and it is ${this.hungry} that he is hungry.`
  }
}

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
let jin = new Dog("Jin","Shiba Inu","sly",false)
console.log(jin.playFetch())
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log(jin.feed())

// d. Add a method called `toString` that returns a description of the dog:
console.log(jin.toString())

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.


// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
