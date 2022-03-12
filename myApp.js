require("dotenv").config();
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  var newPerson = new Person({
    name: "Ashutosh",
    age: 23,
    favoriteFoods: ["Chicken", "Cheese"],
  });
  newPerson.save(function (err, data) {
    if (err) {
      console.log(err);
      return done(err);
    } else {
      console.log(data);
      return done(null, data);
    }
  });
  // done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) {
      return done(err);
    } else {
      return done(null, people);
    }
  });
  // done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, found) => {
    if (err) {
      return done(err);
    } else {
      return done(null, found);
    }
  });
  // done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, found) => {
    if (err) {
      return done(err);
    } else {
      return done(null, found);
    }
  });
  // done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, found) => {
    if (err) {
      return done(err);
    } else {
      return done(null, found);
    }
  });
  // done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, found) => {
    if (err) {
      console.log("Err: ", err);
      return done(err);
    }
    console.log("Found: ", found);
    found.favoriteFoods.push(foodToAdd);
    found.save((err, data) => {
      if (err) {
        return done(err);
      } else {
        return done(null, data);
      }
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        return done(error);
      }
      data.save((err, res) => {
        if (err) {
          console.log(err);
          return done(err);
        }
        return done(null, res);
      });
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (error, data) => {
    if (error) {
      console.log(error);
      return done(error);
    }
    data.save((err, res) => {
      if (err) {
        console.log(err);
        return done(err);
      }
      return done(null, res);
    });
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (error, data) => {
    if (error) {
      console.log(eror);
      return done(error);
    }
    return done(null, data);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
