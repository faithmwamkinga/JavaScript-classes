class Person{
    constructor (name,age,height){
        this.name=name
        this.age=age
        this.height=height
    }
    greet(){
        console.log("Hello");
    }
}

//INHERITANCE
class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height)
    }
};
let robot = new Robot("Elsa",3,"5ft")
console.log(robot);

class CrazyRobot extends Person{
    constructor(name,age,height,dominate){
        super(name,age,height)
        this.walk=true;
        this.height="7ft";
        this.dominate=dominate

    }
    world(){
        console.log(`I will ${this.dominate} the world` );
    }

}
let crazy = new CrazyRobot("Felix","3ft","enslave")
crazy.world();

class LovingRobot extends CrazyRobot{
    constructor (name,age,height,dominate){
        super(name,age,height,dominate);
    }
}
let lovingRobot=new LovingRobot("Amanda","5ft","love")
console.log({lovingRobot});

class Ankara{
    constructor(temperature,mood,newDesign){
        this.temperature=temperature
        this.mood=mood
        this.newDesign=newDesign
    }
    predictPatternChanges() {
        if (this.temperature>30 && this.mood=="sad"){
            return this.newDesign 
        }
        else if(this.temperature<30 && this.mood=="happy"){
            return this.newDesign

        }
        else {
            return this.newDesign
        }
        
    }
}
let clotheOne=new Ankara(30,"sad","Polka dot");
console.log(clotheOne.predictPatternChanges());

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it 
// has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its 
// description.

// 


class PersonAccount {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = [];
      this.expenses = [];
    }
  
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    }
  
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    }
  
    getTotalIncome() {
      let totalIncome = 0;
      for (const income of this.incomes) {
        totalIncome += income.amount;
      }
      return totalIncome;
    }
  
    getTotalExpense() {
      let totalExpense = 0;
      for (const expense of this.expenses) {
        totalExpense += expense.amount;
      }
      return totalExpense;
    }
  
    getAccountInfo() {
      return `Customer: ${this.firstName} ${this.lastName}\nTotal Income: ${this.getTotalIncome()}\nTotal Expense: ${this.getTotalExpense()}\nAccount Balance: ${this.getAccountBalance()}`;
    }
  
    getAccountBalance() {
      return this.getTotalIncome() - this.getTotalExpense();
    }
  }
  
  let person = new PersonAccount("Samuel", "Mwamkinga");
  person.addIncome("Salary", 2000000);
  person.addIncome("Paint art", 1000000);
  person.addExpense("Food", 100000);
  person.addExpense("Car fuel", 20000);
  console.log(person.getAccountInfo());
  

// The Ever-changing Ankara: You are a fashion designer known for your unique and vibrant Ankara
//designs. Recently, you've discovered that some of your fabric patterns change their designs based on 
// the temperature and mood of the wearer. You want to create a software application that can predict 
// the changes in the fabric design given the mood and temperature data. Think about the classes you 
// will need to model the changing Ankara and how to predict the changes.

class AnkaraDesignz{
    constructor(temperature,mood){
        this.temperature=temperature
        this.mood=mood
    }
    predictDesignChange(){
        let temp=37
        if (this.mood=="happy") {
            if (this.temperature>temp) {
                return "The design changes to polka dots"
            }
            if (this.temperature<temp) {
                return "The design changes to wavy lines"
            }
        if (this.mood=="sad") {
            if (this.temperature>temp) {
                return "The design changes to checked box"
            }
            if (this.temperature<temp) {
                return "The design changes to circles"
            }
        else{
            return "The design does not change"
        }
        }   
        }
        // if(this.temprature >temp && this.mood=="happy"){
        //     return "Ankara Design changes to Polka dot"
        // }
        // else if(this.temprature <temp && this.mood=="sad"){
        //     return "Ankara Design changes to squares"
        // }
        // else if(this.temperature>temp && this.mood=="sad"){
        //     return "Ankara Design changes to wavy line"
        // }
        // else if(this.temperature<temp && this.mood=="happy"){
        //     return "Ankara Design changes to circles"
        // }
        // else{
        //     return "Ankara Design does not change pattern"
        // }
    }
}
let ankaraOnes= new AnkaraDesignz(30,"happy")
console.log(ankaraOnes.predictDesignChange());






// The Great Migration Forecast: Every year, millions of wildebeest, zebras, and other animals 
// participate in the Great Migration across the Serengeti-Mara ecosystem. As a conservationist, 
// you want to develop a software system that models this migration, predicting the movement of the 
// herds based on weather patterns, river levels, and predator locations. Consider what classes you'll
//  need to represent the animals, the environment, and the various factors that influence the migration.// 

// The Great migration
class Environment{
    constructor(predatorLocation,destinedLocation){
        this.weatherPattern="rainy"
        this.riverLevel="high"
        this.predatorLocation=predatorLocation
        this.destinedLocation=destinedLocation

    }
    predictMovement(){
       this.destinedLocation="Mara"
        this.weatherPattern="rainy"
        this.riverLevel="low"
        if(this.weatherPattern & this.riverLevel=="high" & this.predatorLocation){
            // console.log("The herd is migrating to Serengeti");
            return this.destinedLocation
        }
        else if(this.weatherPattern=="partially sunny" & this.riverLevel=="medium" & this.predatorLocation=="Serengeti"){
         return this.destinedLocation
        }
        else{
            return "The herd does not migrate"
        }
    }   
}
let groupOne=new Environment("partially sunny","medium","Serengeti")
console.log(groupOne.predictMovement());


class Migrations{
    constructor(weatherPatterns,riverLevels,predatorLocations){
        this.weatherPatterns=weatherPatterns
        this.riverLevels=riverLevels
        this.predatorLocations=predatorLocations
    }
    predictMigration(){
        if (this.weatherPatterns=="dry" &&  this.riverLevels=="low" && this.predatorLocations=="Mara"){
           return "The herd migrates to Serengeti"
        }
        else{
            return "The herd does not migrate"
        }
    }
}
// let weatherPatterns=["rainy","dry"]
// let riverLevels=["high","low"]

let migrationO=new Migrations("dry","low","Mara")
console.log(migrationO.predictMigration());


// Nollywood Movie Planner: As a producer in the booming Nollywood movie industry, you are in charge 
// of multiple film projects at once. Each movie has different cast members, shooting schedules, and 
// budgets. You want to write a program to help manage your film projects efficiently. The software 
// should be able to handle the complexities of scheduling, budgeting, and coordinating between 
// different movie projects.

// class ManageFilmProject{
//     constructor(schedule,castMember,budget){
//         this.schedule=schedule
//         this.castMember=castMember
//         this.budget=budget
//         // this.scenes=scenes
//     }
//     getSchedule(scenes){
//         let aScene=this.schedule/scenes
//         return `The shedule is ${aScene} days for ${scenes} scenes`
//     }
    class BudgetComparator {
  constructor(budget) {
    this.budget = budget;
  }
  compareBudget(userMoney) {
    const totalAllocation = Object.values(this.budget).reduce(
      (total, allocation) => total + allocation,
      0
    );
    const comparisonResult = totalAllocation === userMoney
      ? "Budget matches the available amount of money."
      : totalAllocation > userMoney
        ? "Budget exceeds available amount of money."
        : "Budget is less than the available amount of money.";
    return comparisonResult;
  }
}
// Example usage:
// const allocatedBudgets = {
//   producer: 5000,
//   cast: 3000,
//   director: 4000,
//   soundman: 2000,
//   catering: 1500,
// };
// const userMoney = 10000;
// const budgetComparator = new BudgetComparator(allocatedBudget);
// const result = budgetComparator.compareBudget(userMoney);
// console.log(result);
    // getBudget(allocatedBudget){
    //     let totalBudget=this.budget.map(allocatedBudget)
    //         let budgetAmount = Object.values(allocatedBudget);
    //         budgetAmount.reduce(a,b)(a+b);
    //         console.log(totalBudget);
    //         if (totalBudget>allocatedBudget){
    //     return `The total budget exceeds ${allocatedBudget}`
    // }
    // else{
    //     return `Budget is within ${allocatedBudget}`
    // }

    // }
    


// let allocatedBudget=[
//     {
//         castSalary:2000000,
//         transport:40000,
//         venuePrice:30000

//     }
// ]

// let prettyLittleLiars= new ManageFilmProject(180,"Jane",300000000)
// console.log(prettyLittleLiars.getSchedule(10))
// console.log(prettyLittleLiars.getBudget(300000))







// The Magical Baobab: In a small village, there is a Baobab tree believed to have magical properties.
//Every season, it bears different types of fruits, each with its own unique power. You've decided to 
// create a software system that tracks the changes in the tree and predicts what type of fruit it will
//  bear next season and what powers it will possess. The system should also record the effect of each
//fruit when consumed




// The Legendary African Drum Circles: You're part of a community that hosts one of the largest drum 
// circles in Africa. There are different types of traditional drums used in the circle, each with its 
// unique sound and rhythm. The Djembe, Talking Drum, and Bougarabou are among the popular ones. 
// These drums have common properties such as the material they're made from and their sizes, 
// but they also have distinct characteristics. For instance, the Talking Drum can mimic the lines 
// /of human speech, the Djembe is known for its wide range of tones, and the Bougarabou is noted
//  for its deep, rich bass tones.
//You want to create a software model of the drum circle that encapsulates these different types of
//drums. You wish to include methods for each drum that represent the sound it makes, and also group
//similar drums together. Think about creating a base Drum class that contains properties and methods 
// common to all drums, and then create subclasses for each specific type of drum (like Djembe, Talking Drum, 
// and Bougarabou).
// The subclasses should inherit from the base Drum class and also implement their unique characteristics. This software model would help newcomers understand the characteristics of each drum and how they contribute to the overall rhythm of the drum circle.



class Drum{
    constructor(material,size){
        this.material=material
        this.size=size
    }
    makeSound=(sound)=>{
        return ` Drum makes ${sound}.`
    }
}
class Djembe extends Drum{
    constructor(material,size){
         super(material,size)
    }
    makeSound=(sound)=>{
        return `Djembe drum makes ${sound}.`
    }
}
class TalkingDrum extends Drum{
    constructor(material,size){
        super(material,size)
    }
    makeSound=(sound)=>{
        return `TalkingDrum makes ${sound}.`
    }
}
class Bougourabou extends Drum{
    constructor(material,size){
        super(material,size)
    }
    makeSound=(sound)=>{
        return `Bougourabou drum gives ${sound}.`
    }
}

let drum= new Drum("Leather","X-Large")
console.log(drum.makeSound("Ba bam bam bam"));

let djembe=new Djembe("Wood","Large")
console.log(djembe.makeSound("High,medium and low"));

let talkingDrum=new TalkingDrum("Wood","Large")
console.log(talkingDrum.makeSound("Can mimic human speech"));

let bougourabou=new Bougourabou("Wood","Large")
console.log("bouragabou's material is",bougourabou.material);
console.log(bougourabou.makeSound("Rich bass"));
// console.log();

//alternative


//  You are a music composer known for creating music that adapts to the listener's emotions and
//  surroundings. You want to develop a software system that analyzes the listener's mood and 
// environment to predict the type of music that would best suit their current state. 
// Think about the classes you'll need to model the music compositions and how to predict the 
// appropriate music based on mood and environment.

class Music{
    constructor(listenersMood,environmentCondition){
        this.listenersMood=listenersMood
        this.environmentCondition=environmentCondition
    }
    predictMusic(){
        if (this.environmentCondition=="warm"){
            if(this.listenersMood=="sad"){
                return "The music produced will be Rythm and Blues"
            }
            if (this.listenersMood=="calm"){
                return "The music produced will be Rock music"
            }
            if(this.listenersMood=="happy"){
                return "The music produced will be Pop music"
            }
        }
        if( this.environmentCondition=="cold"){
            if(this.listenersMood=="sad"){
                return "The music produced will be Country music"
            }
            if (this.listenersMood=="calm"){
                return "The music produced will be Soul music"
            }
            if(this.listenersMood=="happy"){
                return "The music produced will be Hip Hop music"
            }
        }
        else{
            return "All kinds of music are dependent on the listeners mood and surrounding"
        }
    }
}
let musicOne=new Music("sad","cold")
let musicTwo=new Music("sad","warm")
let musicThree=new Music("happy","cold")
let musicFour=new Music("calm","cold")
let musicFive=new Music("happy","warm")
let musicSix=new Music("calm","warm")
console.log(musicOne.predictMusic());
console.log(musicTwo.predictMusic());
console.log(musicThree.predictMusic());
console.log(musicFour.predictMusic());
console.log(musicFive.predictMusic());
console.log(musicSix.predictMusic());


//Write a program by creating an 'Employee' class having the following methods and printthe final salary. 1 - 'getInfo()'
//which takes the salary, number of hours of work per day of employee asparameter2   -   'AddSal()'   which   adds   $10 
//to   salary   of   the   employee   if   it   is   less   than   $500.3 - 'AddWork()' which adds $5 to salary of 
//employee if the number of hours of work perday is more than 6 hour







// You are a fitness trainer creating personalized workout routines for your
// clients. You want to develop a software system that analyzes the clients
// fitness level, goals, and available equipment to predict and generate
// customized workout plans. Think about the classes you'll need to model 
// the clients, exercises, and how to predict the most effective workout
// routines based on their goals and resources.



// class Client{
//     constructor(name,fitnessLevel,equipment){
//         this.name=name
//         this.fitnessLevel=fitnessLevel
//         this.goals=[]
//         this.equipment=equipment

//     }
// }
// class Trainer{
//     constructor(workout){
//         this.workout=workout
//     }
//     predictPlan(){
//         if (this.workout=="muscle building"){
//             return 

//         }

//     }
//     generatePlan(){

//     }

// }


// Write a JavaScript program that creates a class `Book` with properties for
// title, author, and publication year. Include a method to display book 
// details. Create a subclass called 'Ebook' that inherits from the 'Book' 
// class and includes an additional property for book price. Override the 
// display method to include the book price. Create an instance of the 'Ebook'
// class and display its details.

// class Book{
//     constructor(title,author,publicationYear){
//         this.title=title
//         this.author=author
//         this.publicationYear=publicationYear
//     }
//     displayBookInfo(){
//         return `The book ${this.title} by ${this.author} was written in the year ${this.publicationYear}`
//     }
// }
// class Ebooks extends Book{
//     constructor(title,author,publicationYear,bookPrice){
//         this.bookPrice=bookPrice
//   super (title,author,publicationYear)
// }
// displayBookInfos(){
//     return `The book ${this.title} by ${this.author} was written in the year ${this.publicationYear} and its price is ${this.bookPrice}`
// }
// }

// let ebook= new Ebooks(3000)
// console.log(ebook.displayBookInfos());



class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    displayBookInfo() {
      return `The book ${this.title} by ${this.author} was written in the year ${this.publicationYear}`;
    }
  }
  
  class Ebooks extends Book {
    constructor(title, author, publicationYear, bookPrice) {
      super(title, author, publicationYear);
      this.bookPrice = bookPrice;
    }
  
    displayBookInfo() {
      return `${super.displayBookInfo()} and its price is ${this.bookPrice}`;
    }
  }
  
  let ebook = new Ebooks("Njoroge's daughter", "Vallary Buraje", 2023,3000);
  console.log(ebook.displayBookInfo());
  


  function squareNeg(){
    let array=[4,0,9,-2,-1]
    for (let i=0; i<array.length;i++){
            if(array[i]<0){
            return array[i]*array[i]
        }
        else{
            return "The number is not negative"
        }

    }

  }
  squareNeg()
  console.log(squareNeg());

  function makeUser(name, age,address,ocupation) {

  const persona = {};
  persona.name = name;
  persona.age = age;
  persona.address=address
  persona.ocupation=ocupation
  
  return persona;

}

var mariam = makeUser('Mariam', 20,"Korongo road","Teacher");

console.log(mariam.name); 
console.log(mariam.age);
console.log(mariam.address);
console.log(mariam.ocupation);

// class Artist{
//     constructor(name,country,musicStyle,instrument){
//         this.name=name
//         this.country=country
//         this.musicStyle=musicStyle
//         this.instrument=instrument
//     }
//     getArtistDetails(){
//         return `The artist ${this.name}\n
//         Country from:${this.country}\n
//         And are known for ${this.musicStyle}\n
//         By using ${this.instrument}` 
//     }
// }
// class Performance extends Artist{
//     constructor(name,country,musicStyle,instrument,startTime,duration){
//         super(name,country,musicStyle,instrument)
//         this.startTime= startTime
//         this.duration= duration
//     }
//     getSchedule(days,noArtists){
//         let schedule=days/noArtists
//         return `Each artists performs for ${schedule} days`

//     }

// }
// class Stage extends Artist{
//     constructor(){

//     }
// }



class Artist{
    constructor(name, country, musicStyle, instrument){
    this.name = name
    this.country = country
    this.musicStyle = musicStyle
    this.instrument = instrument
    }
    artistDetails() {
    return `The artist's name is ${this.name}. They are from ${this.country} and their musical style is ${this.style}. They are known for playing the following instruments: ${this.instruments}.`;
    }
    }
    
    
    
    
    class Performance extends Artist{
    constructor(duration,startTime, name, country, musicStyle, instrument){
    super(name, country, musicStyle, instrument)
    this.duration = duration
    this.startTime = startTime
    }
    getSchedule(days,noArtists){
    let schedule=days/noArtists
    console.log(`The schedule for this performance is ${schedule} days per artist.`);
    return schedule
    }
    calculateEndTime() {
    const endTime = new Date(this.startTime.getTime() + this.duration * 60000);
    console.log(`The performance will end at ${endTime}.`);
    return endTime;
    }
    }
    
    
    
    
    class Stage extends Performance{
    constructor(performances, duration,startTime, name, country, musicStyle, instrument){
    super(duration,startTime, name, country, musicStyle, instrument)
    this.performances = performances
    this.performances = [];
    }
    
    
    // adding performance
    addPerformance(performance) {
    this.performances.push(performance);
    console.log(`Added performance '${performance}' to the stage.`);
    }
    
    
    // romoving performance
    removePerformance(performance) {
    const index = this.performances.indexOf(performance);
    if (index >= 0) {
    this.performances.splice(index, 1);
    console.log(`Removed performance '${performance}' from the stage.`);
    }
    }
    }
    
    
    // for artist class
    
    
    const artist1 = new Artist("Beyonce", "USA", "R&B and pop", "Vocals, Piano");
    artist1.artistDetails();
    console.log(artist1.artistDetails());
    
    
    
    
    // for performance class
    
    
    const performance1 = new Performance(60, new Date(), "Beyonce", "USA", "R&B and pop", "Vocals, Piano");
    console.log(performance1.getSchedule(9, 4));
    console.log(performance1.calculateEndTime());
    
    
    
    
    // for stage class
    
    
    const performances = ['Performance 1', 'Performance 2','Performance 3', 'Performance 4','Performance 5'];
    const stage1 = new Stage(performances, 60, new Date(), "Beyonce", "USA", "R&B and pop", "Vocals, Piano")
    
    
    stage1.addPerformance('Performance 6');
    stage1.removePerformance('Performance 1');
    
    
    

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
 class Products{
    constructor(name,price,quantity){
    this.name=name
    this.price=price
    this.quantity=quantity
    }
    calculateTotal(){
        let value=this.price*this.quantity
        return value
    }
 }
 let product1=new Products("computer",200000,20)
 console.log(product1.calculateTotal());

 
class Product {
constructor(name, price, quantity) {
this.name = name;
this.price = price;
this.quantity = quantity;
}


calculateTotalValue() {
const totalValue = this.price * this.quantity;
// console.log(`Total value of ${this.name}: ${totalValue}`);
return totalValue;
}


increaseQuantity(amount) {
if (amount > 0) {
this.quantity += amount;
let newQuantity = this.quantity + amount
console.log(`Increased quantity of ${this.name} by ${amount} that makes its total quantity to be ${newQuantity}`);
} else {
console.log("Invalid quantity increase amount.");
}
}


decreaseQuantity(amount) {
if (amount > 0 && amount <= this.quantity) {
this.quantity -= amount;
let newQuantity = this.quantity + amount
console.log(`Decreased quantity of ${this.name} by ${amount} that makes it's new total quantity to be ${newQuantity} `);
} else {
console.log("Invalid quantity decrease amount.");
}
}


updatePrice(newPrice) {
if (newPrice >= 0) {
this.price = newPrice;
let latestPrice = this.price + newPrice
console.log(`Updated price of ${this.name} to ${newPrice}`);
} else {
console.log("Invalid price value.");
}
}
}
const mango = new Product("mango", 30, 6);
mango.calculateTotalValue();
mango.increaseQuantity(3);
mango.decreaseQuantity(4)
mango.updatePrice(10);

// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.


// Write a Python class Restaurant with attributes like menu_items, book_table, and customer_orders, 
//and methods like add_item_to_menu, book_tables, and customer_order.
// Perform the following tasks now:
// Now add items to the menu.
// Make table reservations.
// Take customer orders.
// Print the menu.
// Print table reservations.
// Print customer orders.

class Restaurant{
    constructor(bookTable,customerOrders){
        this.menuItems=[]
        this.customerOrders=customerOrders
        this.bookTable=bookTable

    }
    addItemToMenu(newItem){
        this.menuItems.push(newItem)
        return this.menuItems
    }
    makeTableReservations(orders,customerOrders){
        let numberOfTables=100;

        if (orders>0 && orders< numberOfTables){
        let remainingTables=  numberOfTables-orders

            return `Your reservation for ${customerOrders} has been made out of ${numberOfTables} and remaining tables are ${remainingTables}`
        }
        else{
            return "Sorry we, are out of reservations"
        }
    }
    takeOrders(time,newOrder){
       let  totalOrders=[]
        totalOrders.push(newOrder)
        return `${newOrder.Grilledbeef}  made at ${time}`
    }
    printMenus(){
        return `This is the menu ${this.menuItems}`
    }
    printReservations(newOrders){
        let reservationss=[]
        reservationss.push(newOrders)
        return `Table reservations that are made are for ${newOrders.Chickensoup}`
    }
    printCustomerOrders(){
        return `These are the placed orders: ${this.customerOrders}`

    }
}
let customerOne=new Restaurant(1,"Chicken soup")
console.log(customerOne.addItemToMenu("Shawarma, Chicken soup"));
console.log(customerOne.makeTableReservations(1,"Pizza"));
console.log(customerOne.takeOrders("2 pm",{Grilledbeef:"Customer wants medium rare grilled beef with chili sauce"}));
console.log(customerOne.printCustomerOrders());
console.log(customerOne.printMenus());
console.log(customerOne.printReservations({Chickensoup:"Boiled chicken soup with lemon placed aside"}));


// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.
class FlightBooking {
    constructor() {
      this.destinations = [];
      this.dates = [];
    }
  
    searchFlight(customerDestination, customerDate) {
      for (let i = 0; i < this.destinations.length; i++) {
        if (
          customerDestination === this.destinations[i] &&
          customerDate === this.dates[i]
        ) {
          return "Destination found";
        }
      }
      return "Destination not found";
    }
  
    reserveSeat(bookedSeat) {
      const totalSeats = 100;
      const remainingSeat = totalSeats - bookedSeat;
      if (bookedSeat < totalSeats) {
        return `Your seat has been booked successfully and the remaining seats are ${remainingSeat}`;
      }
      return "Seat booking failed. No more seats available.";
    }
  
    manageCustomerInfo(passengerInfo) {
      const info = [];
      info.push(passengerInfo);
      return info;
    }
  
    bookingConfirmation(passengerDetail) {
      return `Customer ${passengerDetail} has been booked successfully.`;
    }
  }
  
  
  const flightBooking = new FlightBooking();
  
  const destination = "New York";
  const date = "2023-07-10";
  
  const searchResult = flightBooking.searchFlight(destination, date);
  console.log(searchResult); 
  
  
  const bookedSeats = 3;
  const reservationResult = flightBooking.reserveSeat(bookedSeats);
  console.log(reservationResult); 
  
  const passengerInfo = "ROSE SAMMY";
  const customerInfo = flightBooking.manageCustomerInfo(passengerInfo);
  console.log(customerInfo); 

  const passengerDetail = "Angel Sammy from Dar-es Salaam";
  const confirmation = flightBooking.bookingConfirmation(passengerDetail);
  console.log(confirmation); 
  

// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author and display book details.

class LibraryCatalog{
    constructor(title,author,numberOfPages){
        this.title=title
        this.author=author
        this.numberOfPages=numberOfPages
    }
    addNewBook(newBook){
        let newStorage=[]
        newStorage.push(newBook)
        return newStorage
    }
    searchForBook(bookTitle,bookAuthor){
        if (bookTitle==this.title | bookAuthor==this.author){
            return `${this.title} has been found`
        }
        else{
            return "The book is not available"
        }
    }
    displayBookDetails(){
     return `The book titled ${this.title} is written by ${this.author} has ${this.numberOfPages}`   
    }
}
const libraryOne=new LibraryCatalog("Weep not Child","Chinua Achebe",200)
console.log(libraryOne.addNewBook("No longer at Ease"));
console.log(libraryOne.searchForBook("Weep not Child","Ngugi wa Thiong'o"));
console.log(libraryOne.displayBookDetails());