
const today = new Date();
const year = today.getFullYear();

function Student(name, surname, birthDate, assessments = [], visited = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.visited = visited
}

Student.prototype.getAge = function () {
  let age = year - this.birthDate;
  console.log("Age: " + age)
  return this
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.assessments.forEach((e) => {
    sum += e
  })
  let result = sum / this.assessments.length;
  console.log("Середній бал: " + result)
  return this
}

Student.prototype.present = function () {
  if(this.visited.length < 24) {
    this.visited.push(true)
  }
  return this
}

Student.prototype.absent = function () {
  if(this.visited.length < 24) {
    this.visited.push(false)
  }
  return this
}

Student.prototype.summary = function () {
  let sum = 0;
  this.assessments.forEach((e) => {
    sum += e
  })
  let result = sum / this.assessments.length;

  let sumVisited = 0;
  this.visited.forEach((e) => {
    if(e === true) {
      sumVisited += e;
    }
  })
  let resultVisited = sumVisited / this.visited.length;

  console.log("Середній бал: " + result)
  console.log('Середня оцінка посещаемости: ' + resultVisited)

  if(result >= 90 && resultVisited >= 0.9) {
    console.log("Молодець!") 
  } else if (result <= 90 && resultVisited >= 0.9 || result >= 90 && resultVisited <= 0.9) {
    console.log("Добре, але можна краще");
  } else if (result <= 90 || resultVisited <= 0.9) {
    console.log("Редиска")
  }
  return this
}

  
const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100,100,100,100,80,100,100], []);
const student2 = new Student('exampleName2', 'exampleSurname2', 1998, [50, 100,90,34,100,75, 49]);
const student3 = new Student('exampleName3', 'exampleSurname3', 1995, [100,100,100,50,100,33,80]);


student1.present().present().absent().present().present().present().present().present().present().present().summary()
student2.present().present().summary()
student3.present().absent().absent().present().summary()
