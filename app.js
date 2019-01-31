class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
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

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "String") {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      return (this.numberOfStudents = newNumberOfStudents);
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
    return substituteTeachers[random];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = "primary";
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
    super(name, numberOfStudents);
    this._level = "high";
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hanbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log(lorraineHansbury);

lorraineHansbury.quickFacts();
