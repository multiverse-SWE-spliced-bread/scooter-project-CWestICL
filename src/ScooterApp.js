const {User,Person} = require('./User');

class ScooterApp {
  static users = [];
  static addUser(person,username,password) {
    if (ScooterApp.users.filter(u => u.username === username).length > 0) {
      throw new Error("Username already exists");
    }
    else if (ScooterApp.users.filter(u => u.email === person.email).length > 0) {
      throw new Error("Email already linked to user");
    }
    const newUser = new User(person.name,person.age,person.email,username,password);
    ScooterApp.users.push(newUser);
    return newUser;
  }
  static logInUser(username,password) {
    for(let user of ScooterApp.users) {
      if (username === user.username && password === user.password) {
        user.loggedIn = true;
        return;
      }
      throw new Error("Username or password is incorrect");
    }
  }
}
const p1 = new Person("Mark",32,"m.corrigan@jlb.co.uk")
ScooterApp.addUser(p1,"riri","gjgj");
module.exports = ScooterApp;
