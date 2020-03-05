const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry. No name specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 7,
  review: "Apples are tasty, especially the green ones"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
  name: "Joseph",
  age: 29
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Sour"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 6,
//   review: "Great, but not the best"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) console.log(err);
//   else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) console.log(err);
  else {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name + "\t" + fruit.rating + "\t" + fruit.review);
    });
  }
});
