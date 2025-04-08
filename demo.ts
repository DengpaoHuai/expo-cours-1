let toto = "toto";

const getToto = () => {
  return toto;
};

type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

let person: Person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

const getPerson = () => {
  return person;
};

const { name, age, address } = getPerson();

const { street, city, state, zip } = address;
