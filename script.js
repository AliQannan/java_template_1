// "use strict"
// var productBtn = document.getElementById("product-btn");
// var productContanier = document.getElementById("product-contanier");

// var Data = [
//   { id: 1, name: "product 1", desc: "any" },
//   { id: 2, name: "product 2", desc: "any" },
//   { id: 3, name: "product 3", desc: "any" },
//   { id: 4, name: "product 4", desc: "any" },
// ];

// function drawUi(items) {
//   productContanier.innerHTML = "";

//   items.forEach(function (ele) {
//     productContanier.innerHTML +=
//       `<div>${ele.name}</div>` +
//       `<button onclick=deletitem(${ele.id})>Delet</button>`;
//   });
// }

// // load arry

// window.onload = function () {
//   drawUi(Data);
// };

// //!red color

// //add items

// function addItems() {
//   var productInput = document.getElementById("product-input");
//   if (productInput.value == "") alert("should enter product");
//   //   lastid = Data.length ? Data[Data.length - 1].id : 0;
//   if (Data.length != 0) {
//     var lastid = Data[Data.length - 1].id;
//     ++lastid;
//   } else {
//     lastid = 1;
//   }
//   Data.push({ id: lastid, name: productInput.value, desc: "any1" });
//   addeditem1 = Data[Data.length - 1];

//   productContanier.innerHTML +=
//     `<div>${addeditem1.name}</div>` +
//     `<button onclick=deletitem(${addeditem1.id})>Delet</button>`;
//   productInput.value = "";
// }
// productBtn.addEventListener("click", addItems);

// function deletitem(id) {
//   var index = Data.map(function (i) {
//     return i.id;
//   }).indexOf(id);

//   if (index !== -1) {
//     Data.splice(index, 1);

//     drawUi(Data);
//   }
// }

// //map
// const arr =[1,4,9]
// const map=arr.map(function(item){
//   return item *2;
// })

// console.log(map)

// //arrow function

// const dobul=arr.map(item=>Math.sqrt(item))
// console.log(dobul)// }

// var x  ;
// function x(){console.log("ali")}
// console.log(typeof x)

// var test = (x,y)=>{
//     console.log(x,y)
// }

// function callSomeThing(thing=SomeThing()){

//     console.log(thing)
// }

// let number=0
// function SomeThing(){
//        number+=1
//        return number

// }

// function ali(name,greet,message=name+' '+greet){
//     return [name,greet,message]
// }

// console.log(ali("ali","hi"));
//spread opratoer

// const x = [1, 2, 3];
// function sum(x, y, z) {
//   console.log(x + y + z);
// }
// //spread ...
// sum(...x);

// const obj = {
//   name: "ali",
//   age: 23,
//   number: 209,
//   y: "newline",

//   returnEveryTags() {
//     var that = this;
//     console.log("name", that.name, "age", that.age);
//   },
// };
// let kvarry=[
//   {key:1,value:10},
//   {key:2,value:20},
//   {key:3,value:30},
// ]

// let item=kvarry.map(items=>{
//   let  robj={};
//   robj[items.key]=items.value
//   return robj
// })

// console.log(item)

// const inis = ["aliq", "basemaqan", "klsdanf", "kldfiasdf", "kfa"];
// // var newfun=inis.forEach(function(item){

// //   if(item.indexOf("ali")!==-1)
// //       console.log(item)
// // });

// // function newfunction (arr,query){
// //   return arr.filter(function(item){
// //         return item.toLowerCase().indexOf(query.toLowerCase())!==-1;
// //   })
// // }
// // console.log(newfunction(inis,"ali"))
// function queryElemnt(arr, query) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
//       return inis[i];
//     }
//   }
// }
// function queryali(arr,queryali1){
//  return  arr.filter(function(item){
//     return item.toLowerCase().indexOf(queryali1.toLowerCase()) !==-1;
//   })
// }
// console.log(queryali(inis,"bas"))
// console.log(queryElemnt(inis,"ali"))
//  var total=0
// const number1=[1,54,3]
// for(let v=0; v<number1.length;v++){
//   total+=number1[v]

// }

// console.log(total)

// const sum = number1.reduce((acc,cur) => acc+cur)
// console.log(sum)

// const arr2=[[0,1],[2,3],[4,5]]
// const sum2= arr2.reduce((acc,cur)=>acc.concat(cur))

// // console.log(sum2)

// var all1 = arr2[0]

// for (let l=0;  l < arr2.length;  l++){

//   var newar=[];
//  newar+= arr2[0].concat(arr2[l])

// }
// console.log(newar)
// console.log(arr2.length)
// console.log(all1)

//  }
// console.log(query2(inis,"ali"))
// //?you must write definition veribale
// const { age: newage, number: newnumber, y = "test" } = obj; //rename obj content

// console.log(y);

// // const obj2 = {
// //   ...obj,
// //   home: "gaza",
// // };
// // console.log(obj2)

// // const data =[1,2,3]

// // const [n1,n2]=data
// // console.log(arry)
// var youtubeChanl = {
//   title: "alichanl",
//   courses: ["css", "js", "html"],
//    ahmed :function (){
//     console.log(this.title)

//   }

// };

// const newc={
//   title:'newtitle'
// }

// newc.title="newtitle2"

// youtubeChanl.ahmed.apply(newc);
// try{
//   console.log(true)
// }
// catch{
//   console.log("ali")
// }

// const ne=[1,23,-3,2,-23]

// for (let e=0 ; e<ne.length;e++){

//   if(ne[e]<0){
//     let nev=[];
//     nev=ne[e]
//     e=1000;
//     console.log(nev)

//   }
//   else{
//     console.log("you don't have nev number")

//   }
// }

// var all=[];

// for (let  i =0; i<x.length;i++){
//  var newali=new Array;
//  newali+=(all.concat(x[i]))

// }

// console.log(newali)

//acc=[] , cur=[1,0]

// var x = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log([].concat(x[0]).concat(x[1]).concat(x[2]));

// // let newdo = x.reduce((acc, cur) => acc.concat(cur), []);
// function newfun(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return [].concat(arr[i]);
//   }
// }

// newfun(x);
// let newy = [1, 23, 2, 4];
// console.log(...newy);

// let newu = [
//   [1, 2],
//   [3, 4],
// ];
// console.log(...newu[0]);

// function test (item) {
//   for (let u = 0; u < item.length; u++) {
//     for (values in item[u]){
//       for (let j = 0; j < values.length; j++){
//         if(values[j]==2){
//            return values[j]
//         }
//   }

//     }

//   }
// };

// console.log(test(newu));

// let ali = [
//   [1, 2],
//   [3, 4],
// ];

// function newtest(ali) {
//   ali.forEach(function (item) {
//     item.forEach(function (values) {
//       console.log(values);
//       // if (values == 2) {
//       //   return values;
//       // }
//     });
//   });
// }

// const newvar = [1, "ali", "mofida"];

// console.log(newvar.findIndex((item) => item == "mofida"));

// const number = [1, 214, 12421, 2145, 14];

// number.sort((a, b) => a - b); //asc

// number.sort((a, b) => b - a);

// console.log(number);

// const obj = {
//   name: "ali",
//   age: "22",
// };

// const obj2 = {
//   ...obj,
//   z: "qannan",
// };

// console.log(obj2);

// const newnumber = [1, 2, 3];

// const [n1, , n3] = newnumber;

// console.log(n3);

// const data = {
//   name: "qanna",
//   age: "number",
// };

// const { age, name } = data;

// console.log(age);

// let [reset, start, ...donew] = ["name", "age", "youssrf", "ali", "ahmed"];

// console.log(reset);
// console.log(start);
// console.log(...donew);

// var a1 = "global";

// var newobj = {
//   a1: "aliqannan",
//   age: "mohmed",
// };

// function whtis() {
//   return this.a1;
// }

// console.log(whtis());

// console.log(whtis.call(newobj));

// console.log(whtis.apply(newobj));

// let person1 = {
//   FullName: function () {
//     return this.firstName + "" + this.lastName;
//   },
// };

// let person2 = {
//   firstName: "h",
//   lastName: "qannan",
// };

// person1.FullName.call(person2);
// console.log(person1.FullName.call(person2));

// let youtubeChanel = {
//   name: "ali chanel",
//   tags: ["js", "jasvascript"],

//   returnEveryTags() {
//     let that = this;

//     that.tags.forEach(function (tag) {
//       console.log(that);
//     });
//   },
// };

// // console.log(youtubeChanel.returnEveryTags());

// youtubeChanel.returnEveryTags();

// //factor function

// function person(name) {
//   return {
//     name,
//     sayhello: function () {
//       console.log(`hello `);
//     },
//   };
// }

// //factory function

// const per1 = person("aliqannan");

// per1.sayhello();

// let per2 = person("qannan");

// console.log(per2.name);

// //*@factory function

// // console.log(per1)

// //constructor function

// function Person(name) {
//   this.name = name;
//   this.sayhello = function () {
//     console.log("hello");
//   };
// }

// const alinew = new Person("aliqannan");

// console.log(alinew);

// console.log(alinew.constructor);

// let car = {};
// car.name = "ali";
// car.model = "ahmed";

// for (key in car) {
//   console.log(key, car[key]);
// }
// if ("name" in car) {
//   console.log("yess");
// }
// else{
//   console.log("ne")
// }

// function home(name) {
//   this.ahmed = 220;
//   this.name = name;
//   this.sayHello = function () {
//     console.log("hellow");
//   };
// }

// function student(name) {
//   home.call(this, name);
// }
// per1 = new student("ali");
// console.log(per1);

// function student(name) {
//   this.name = name;
// }

// per1 = new student("ali", 220);

// console.log(per1);

// const obj = {
//   fullName: function () {
//     console.log(this.firstName + "" + this.lastName);
//   },
//   toString: function () {
//     console.log(this.firstName);
//   },
// };

// const obj2 = {
//   firstName: "ali",
//   lastName: "qannan",
// };

// function newfun(item, ali) {
//   this.item = item;
//   this.ali = ali;
//   this.String = function () {
//     console.log("string");
//   };
//   this.fun = function () {
//     console.log("aliqannan");
//   };
// }

// const per13 = new newfun("ali", "ahmed");

// // console.log(per13.constractor);
// console.log(newfun.String);

// let x = {
//   title: "title",
// };

// let parentObject = Object.getPrototypeOf(x);
// console.log(parentObject);
// Object.defineProperty(x, "title", {
//   configurable: false,
//   writable: true,
//   enumerable: true,
// });

// x.title = "newtitle css";
// console.log(Object.keys(x));

// function proto(name) {
//   this.name = name;
// }
// proto.prototype.say = function () {
//   return "say hello";
// };

// proto.prototype.hEllo = function () {
//   return "second HElo";
// };

// // per23 = new proto("ali");

// p4 = new proto();
// console.log(p4.hEllo(), p4.say());
// function Animal(name) {
//   this.name = name;
//   console.log(this.name);
// }
// Animal.prototype.th = function () {
//   console.log("th");
// };
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// let canWalk = {
//   walk: function () {
//     console.log("this.walk");
//   },
// };
// let canSwim = {
//   swim: function () {
//     console.log("swin");
//   },
// };
// function Cat() {}

// function Rabit() {}

// extend(Cat, Animal);
// extend(Rabit, Animal);

// // assign many objects

// function minxin(obj, ...per) {
//   Object.assign(obj, ...per);
// }

// minxin(Cat.prototype, canWalk, canSwim);
// minxin(Rabit.prototype, canWalk);

// let cat = new Cat();
// let rabit = new Rabit();

// console.log(cat);
// console.log(rabit);

// cat.th();
// rabit.th();
// cat.walk();
// rabit.walk();

// inhert form any function prototype

// to get constractor from cat
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   ifo(name) {
//     console.log(name);
//   }
// }

// const st = new Student("ahmed");
// console.log(st);
// console.log(typeof st);

class minMath {
  static mean = function (arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / 2;
  };

  static sum = function (arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  };
  static abs = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      let last = new Array();
      let num = [];
      if (arr[i] < 0) {
        last = num.push = arr[i] * -1;

        console.log(last)
       
      }
      
     
    }
  };
}

const arr = [1, -2, -3];

console.log(minMath.abs(arr));

// const ar = [1, 2, 3];

// ar.push(2);
// ar.push(100);
// console.log(ar);
// const ali = [1, -1];

// for (let i = 0; i < ali.length; i++) {
//   let num;
//   if (ali[i] < 0) {
//     num = ali[i];
//     console.log(num);
//   }
// }
