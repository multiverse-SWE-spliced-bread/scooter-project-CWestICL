class Station {
    static stations = [];
    constructor(location) {
        if (Station.stations.filter(s => s.location === location).length > 0) {
            throw new Error("Station location already exists");
        }
        this.location = location;
        this.scooters = [];
        this.repairs = [];
        Station.stations.push(this);
    }
    addScooter(scooter) {
        scooter.currentStation = this;
        this.scooters.push(scooter);
    }
}
  
module.exports = Station;