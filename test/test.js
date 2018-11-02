/**
 * Created by Asa on 2018/11/1.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
};

Student.prototype = new Person();
Student.prototype.sayMajor = function () {
    console.log("My major is " + this.major);
};

student = new Student("xiaobai", 22, "Computer");
student.sayName();
student.sayMajor();