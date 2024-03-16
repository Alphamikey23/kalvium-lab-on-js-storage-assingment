//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

var myuser = {
    firstName : "Jay",
    lastName : "Ryan",
    age : 26,
    country: "INDIA",
    state: "Karnataka",

};
localStorage.setItem("firstName",myuser.firstName);
localStorage.setItem("lastName",myuser.lastName);
localStorage.setItem("age",myuser.age);
localStorage.setItem("country",myuser.country);
localStorage.setItem("state",myuser.state);


//localStorage.setItem(first_name,myuser.firstName);
console.log(localStorage)
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
var keys = Object.keys(myuser);
console.log(keys)

for(var i=0;i<=keys.length;i++) {
    console.log(localStorage.getItem(keys[i]))
}
//console.log(localStorage.getItem("firstName"));
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
// Let's remove state

localStorage.removeItem("state");
console.log(localStorage)

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear()
console.log(localStorage)
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
    firstName: 'Rajat',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
  };


console.log(JSON.stringify(user));
  