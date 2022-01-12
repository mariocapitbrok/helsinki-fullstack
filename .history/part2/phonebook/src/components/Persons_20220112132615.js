import React from 'react';

// Filter required by the exercise
const personsToShowA = persons.filter(
  (person) => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
)

// Filter alternative
const personsToShowB = persons.filter((person) =>
  person.name.toLowerCase().startsWith(newFilter.toLowerCase())
)

const Persons = ({
  persons
}) => {
  return ( 
    {personsToShowA.map((person) => (
      <Person key={person.name} name={person.name} number={person.number} />
    ))}
   );
}
 
export default Persons;