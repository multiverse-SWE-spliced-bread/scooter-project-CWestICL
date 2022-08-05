const Station = require('./Station.js');

class Person {
  constructor(name,age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class User extends Person {
    constructor(name,age,email,username,password) {
      super(name,age,email);
      this.username = username;
      this.password = password;
      this.loggedIn = false;
      this.hiredScooter = null;
    }
    rentScooter(location) {
      if (this.age < 18) {
        throw new Error("User too young to rent scooter");
      }
      if (!this.loggedIn) {
        throw new Error("User is not logged in");
      }
      let station = Station.stations.filter(s => s.location === location)[0];
      if (!station) {
        throw new Error("Station location not found");
      }
      let rentScooter;
      let count = 0;
      for (let scooter of station.scooters) {
        if (scooter.repairNeeded === false && scooter.charge === 100) {
          count++;
          rentScooter = scooter;
        }
      }
      if (count < 1) {
        throw new Error("No scooters available at this station");
      }
      station.scooters = station.scooters.filter(s => s.id !== rentScooter.id);
      rentScooter.currentStation = null;
      rentScooter.currentRider = this;
      this.hiredScooter = rentScooter;
      this.hiredScooter.charge = 20;
    }
    returnScooter(location) {
      if(this.hiredScooter === null) {
        throw new Error("User currently has no scooter to return");
      }
      let station = Station.stations.filter(s => s.location === location)[0];
      if (!station) {
        throw new Error("Station location not found");
      }
      this.hiredScooter.currentStation = station;
      this.hiredScooter.currentRider = null;
      station.scooters.push(this.hiredScooter);
      this.hiredScooter = null;
    }
    flagRepair() {
      if(this.hiredScooter === null) {
        throw new Error("User currently has no scooter to flag");
      }
      this.hiredScooter.repairNeeded = true;
    }
  }

  class Employee extends Person {
    static employees = [];
    constructor(name,age,email,employeeID) {
      if (Employee.employees.filter(e => e.employeeID === employeeID).length > 0) {
        throw new Error("Employee ID already exists");
      }
      else if (Employee.employees.filter(e => e.email === email).length > 0) {
        throw new Error("Email already linked to employee");
      }
      super(name,age,email);
      this.employeeID = employeeID;
      this.scooters = [];
      Employee.employees.push(this);
    }
    static add(person,employeeID) {
      person = new Employee(person.name,person.age,person.email,employeeID);
    }
    repairScooters(location) {
      let station = Station.stations.filter(s => s.location === location)[0];
      if (!station) {
        throw new Error("Station location not found");
      }
      if (station.scooters.filter(s => s.repairNeeded === true).length < 1) {
        throw new Error("No scooters at this station need repairs");
      }
      for (let scooter of station.scooters) {
        if (scooter.repairNeeded === true) {
          scooter.currentStation = null;
          scooter.currentMechanic = this;
          this.scooters.push(scooter);
        }
        station.scooters = station.scooters.filter(s => s.repairNeeded === false);
      }
    }
    returnScooter(scooter,location) {
      let station = Station.stations.filter(s => s.location === location)[0];
      if (!station) {
        throw new Error("Station location not found");
      }
      if (this.scooters.filter(s => s.id === scooter.id).length < 1) {
        throw new Error("Scooter not in employee's possession");
      }
      scooter.currentMechanic = null;
      scooter.currentStation = station;
      station.scooters.push(scooter);
    }
  }
  
  module.exports = {Person,User,Employee}