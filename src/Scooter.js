class Scooter {
  static scooters = [];
  constructor(id) {
    if (Scooter.scooters.filter(s => s.id === id).length > 0) {
      throw new Error("Scooter ID already in use");
    }
    this.id = id;
    this.charge = 100;
    this.currentStation = null;
    this.currentRider = null;
    this.repairNeeded = false;
    this.currentMechanic = null;
    Scooter.scooters.push(this);
  }
  charge() {
    if (this.currentStation === null) {
      throw new Error("Scooter not currently in station");
    }
    if (this.charge > 99) {
      throw new Error("Scooter already fully charged");
    }
    this.charge = 100;
  }
}

module.exports = Scooter;
