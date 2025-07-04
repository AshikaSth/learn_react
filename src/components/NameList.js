import React from "react";
import Person from "./Person";


function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Next.js",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Angular",
    },
    {
      id: 4,
      name: "Wade",
      age: 30,
      skill: "Vue",
    },
  ];
  
  const personList = persons.map((person) => ( <Person key ={person.id} person ={person}/>));

  return <div>{personList}</div>    
}

export default NameList;
