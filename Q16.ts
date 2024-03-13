import { removeAllListeners } from "process";

// make a guest list array;
let guestList = ["Sara","Sana","Sadaf","Samreen","Sanober"];
// make a varaible for those guest who cant come;
let wontCome = guestList[0];
// print the name of the guest who cant com;
console.log(wontCome,"cant come");
// Add and Remove values  from guestList array;
guestList.splice(0,1,"Maham");
console.log("Good News! We have found a bigger table for dinner");
//Adding a new guest at a starting index of an array;
guestList.unshift("Afia");
// Adding a new guest at the end of an array;
guestList.push("Sadia");
// get the middle value of the guest list
let middleIndex:number=Math.floor(guestList.length/2);
//Adding a new guest at the middle of an array;
guestList.splice(middleIndex,0,"Roman");
// print message to updated list
console.log("updated guest list of an array");
//Sending an invitition to our guest one by one with their name;
guestList.forEach(oneguest=>console.log(`Salam,${oneguest},I would like to invite you at dinner`));

