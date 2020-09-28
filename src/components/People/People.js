import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  render() {
    console.log("[People.js] rendering...");
    return this.props.people.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          job={person.job}
          age={person.age}
        />
      );
    });
  }
}

export default People;
