// *Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Abdul Rehman, 2024-3-15
//  let myName: string = "Abdul Rehman";
//  console.log(`Hello ${myName},Would you like learn some TypeScript today?`);
// *Question 11:* Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
// let name:string []= ["M Hafeez", "Aamair Ali", "M Rafi","A Sammad"];
// console.log(name[0]);
//  console.log(name[1]);
//  console.log(name[2]);
//  console.log(name[3]);
// *Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// let message: string = "Is my best friend";
// console.log(name[0] +" "+ message);
// console.log(name[1] +" "+ message);
// console.log(name[2] +" "+ message);
// console.log(name[3] +" "+ message);
// *Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transport: string[] =["Hondo motorcycle", "Hondo City", "Hondo Civic"];
// transport.forEach(transport =>{
// console.log(`I would like to own a ${transport}.`)
// });
// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Noman Ali", "Asad", "Rehman"];
// Guest.forEach(Guest =>{console.log(`Dear ${Guest}, Would you like to join me for dinner ?`);});
// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let canNotAttend = "Asad";
console.log(canNotAttend + " " + "can not it, for dinner");
let newGuest = "A Rehmain";
Guest[Guest.indexOf(canNotAttend)] = newGuest;
Guest.forEach(Guest => { console.log(`Dear ${Guest}, Would you like to join me for dinner ?`); });
export {};
