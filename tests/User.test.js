const {Person,User,Employee} = require('../src/User.js');
const ScooterApp = require('../src/ScooterApp.js');
const Scooter = require('../src/Scooter.js');
const Station = require('../src/Station.js');
describe("The person class", () => {
    test("Person class should assign name, age and email correctly", () => {
        const p1 = new Person("Mark",32,"m.corrigan@jlb.co.uk");
        expect(p1.name).toBe("Mark");
        expect(p1.age).toBe(32);
        expect(p1.email).toBe("m.corrigan@jlb.co.uk");
    });
    test("register() method should make person into user", () => {
        const p1 = new Person("Mark",32,"m.corrigan@jlb.co.uk");
        ScooterApp.addUser(p1,"ChairmanMark","stalingrad");
        expect(p1 instanceof User).toBeTruthy();
    });
    test("register() method should assign username and password correctly", () => {
        const p1 = new Person("Mark",32,"m.corrigan@jlb.co.uk");
        ScooterApp.addUser(p1,"ChairmanMark","stalingrad");
        expect(p1.username).toBe("ChairmanMark");
        expect(p1.password).toBe("stalingrad");
    });
});
