class School {
  constructor(name, level, numberOfStudents, averageTestScores) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get averageTestScores() {
    return this._averageTestScores;
  }

  set numberOfStudents(value) {
    if (value.isNaN()) {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      return (this._numberOfStudents = newNumberOfStudents);
    }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${
        this.level
      } school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let random = Math.floor(Math.random() * substituteTeachers.length);
    return console.log(substituteTeachers[random]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  set pickupPolicy(pickupPolicy) {
    this._pickupPolicy = pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hanbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log(lorraineHansbury);

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli"
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "BasketBall",
  "Volleyball",
  "Track and Field"
]);
console.log(alSmith.sportsTeams);

class SchoolCatalog {
  constructor(level, schoolObjects) {
    this._level = level;
    this._schoolObjects = objects;
  }

  get level() {
    return this._level;
  }

  get schoolObjects() {
    return this._schoolObjects;
  }
}
