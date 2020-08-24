import React, {Component} from 'react';
// import { Component } from 'react';

// class Tester extends Component {
//     render() {
//         const title = "indecision";
//         return (
//             <Person title={"somehting"} />
//         )
//     }
// }

class Person extends Component {
    constructor(name = 'Anon', age = 0){
        super();
        this.name = name;
        this.age = age;
        // this.props.title = title;
        console.log("constructor fired");
    }
    getGreeting(){
        return `${user.name}, this is a template string; are you ${user.age} years old.  `

    }
    render() {
        // const options = ['thing one', 'thing two', 'thing three'];
        console.log(this.props)
        return (
            <div>
                <h2>{user.getGreeting()}</h2>
                <h2>{this.props.title}</h2>
                <h2>{this.props.options.length}</h2>
            </div>
            // user.getGreeting()
            // this.props.title
            );
    }
}

class Student extends Person {
    constructor(name, age, major = "Dolphin Trainer") {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasMajor()) {
            greeting += `and majoring in ${user.major}?`;
        }
        return greeting;
    }
}

class Coder extends Student {
    constructor(name, age, major, lang = "Js") {
        super(name, age, major);
        this.lang = lang;
    }
    codes() {
        return !! this.lang;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.codes()) {
            greeting += `and writes code in ${user.lang}?`;
        }
        return greeting;
    }

}


const user = new Coder("Jason", 23, "C.S.", "Potato");
const user2 = new Student();
console.log(user2.major);

// console.log(user2.name);
// user.getGreeting()

export default Person;
