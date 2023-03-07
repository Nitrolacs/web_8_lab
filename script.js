// Несколько способов создания объектов
let student = {
	age: 19,
	name: "Никита",
	surname: "Терентьев",
	group: "КИ21-16/1б",
	printInfo: function() {
		console.log(`Студент: ${this.surname} ${this.name}, возраст: ${this.age} лет, группа: ${this.group}`);
	}
}

student.printInfo()

function Student(age, name, surname, group) {
	this.age = age;
	this.name = name;
	this.surname = surname;
	this.group = group;
}

Student.prototype.printInfo = function() {
	console.log(`Студент: ${this.surname} ${this.name}, возраст: ${this.age} лет, группа: ${this.group}`);
}

let newStudent = new Student(20, "Иван", "Иванов", "КИ21-17/1б");
newStudent.printInfo()

student.age = 20;
let newStudentSurname = newStudent.surname;
console.log(`Доступ на чтение: ${newStudentSurname}, доступ на запись: ${student.age} (было 19)`);

// Создание конструктора для собственного объекта



// Расширение встроенного типа
Array.prototype.average = function() {
	let sum = 0;
	for (let index = 0; index < this.length; index++) {
		sum += this[index];
	}

	return sum / this.length;;
}

let testArr = [10, 3, 1, 6, 2, 5, 4, 7, 8, 9]
let testAverage = testArr.average();
console.log(`Среднее арифметическое для массива: ${testAverage}`);