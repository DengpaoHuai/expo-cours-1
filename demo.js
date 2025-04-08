var toto = "toto";
var getToto = function () {
    return toto;
};
var person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
};
var getPerson = function () {
    return person;
};
var _a = getPerson(), name = _a.name, age = _a.age, address = _a.address;
var street = address.street, city = address.city, state = address.state, zip = address.zip;
