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
});
describe("The user class", () => {
    test("User class should assign attributes correctly", () => {
        const u1 = new User("Mark",32,"m.corrigan@jlb.co.uk","MarkTheShark","stalingrad");
        expect(u1.name).toBe("Mark");
        expect(u1.age).toBe(32);
        expect(u1.email).toBe("m.corrigan@jlb.co.uk");
        expect(u1.username).toBe("MarkTheShark");
        expect(u1.password).toBe("stalingrad");
        expect(u1.loggedIn).toBe(false);
        expect(u1.hiredScooter).toBe(null);
    });
});
