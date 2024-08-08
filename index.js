// class Person {
//   constructor(name, age, phone, number) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.number = number;
//   }

//   data() {
//     console.log(this.name, this.age);
//   }
// }
// class Student extends Person {
//   constructor(age, name) {
//     super(age, name);
//   }
// }

// const st = new Student();
// const per = new Person();

// console.log((st.age = 23), (per.age = 24));

// console.log(per);

// console.log(st);

// explain all oop in java script

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.home = "tree";
    this.live = "5yeadsers";
  }
  AnimalData() {
    console.log(this.name, this.type, this.home, this.live);
  }
} // animal

class Cat extends Animal {
  constructor(name, type) {
    super(name, type);
  }
  catData() {
    console.log(this.name, this.type);
  }
}

class Rabit {
  funRab() {
    console.log("rabit sound");
  }
}
Cat.prototype = Object.create(Animal.prototype);
const cat = new Cat();
const rabit = new Rabit();

cat.name = "ali";
cat.type = "cat";
cat.catData();
cat.AnimalData();
console.log(cat);
