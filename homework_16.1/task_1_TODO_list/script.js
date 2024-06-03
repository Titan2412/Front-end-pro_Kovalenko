


function Student(name, surname, birthDate, assessments = [], visited = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.visited = visited
  }
  
  Student.prototype.getAge = function () {
    let age = 2024 - this.birthDate;
    console.log("Age: " + age)
  }
  
  Student.prototype.getAverage = function () {
    let sum = 0;
    this.assessments.forEach((e) => {
      sum += e
    })
    let result = sum / this.assessments.length;
    console.log("Середній бал: " + result)
  }
  
  Student.prototype.present = function () {
    if(this.visited.length < 24) {
      this.visited.push(true)
    }
  }
  
  Student.prototype.absent = function () {
    if(this.visited.length < 24) {
      this.visited.push(false)
    }
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
  }
  
  const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100,100,100,100,80], []);
  const student2 = new Student('exampleName2', 'exampleSurname2', 1998, []);
  
  // student1.present().absent().present()
  
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.absent();
  student1.present();
  student1.present();
  
  student1.getAge()
  
  student1.getAverage()
  
  student1.summary()