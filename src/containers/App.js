import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   font: inherit;
//   border: 1px solid black;
//   padding: 8px;
//   font-weight: bold;
//   border-radius: 0.3em;
//   cursor: pointer;
//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  // const App = (props) => {
  //   const [peopleState, setPeopleState] = useState({
  state = {
    people: [
      {
        id: 1001,
        name: "Leland",
        job: "Developer",
        age: 30,
      },
      {
        id: 1002,
        name: "Sydney",
        job: "Artist",
        age: 23,
      },
      {
        id: 1003,
        name: "Lula",
        job: "Family Pet",
        age: 1,
      },
      {
        id: 1004,
        name: "Ross",
        job: "Music Producer",
        age: 29,
      },
      {
        id: 1005,
        name: "Erynn",
        job: "Musical AnR",
        age: 27,
      },
    ],
    showPeople: false,
    changeCounter: 0,
    authenticated: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // const [message, setMessage] = useState({ message: "React Review" });

  // console.log(peopleState);
  setName = (event, id) => {
    //I'm listening for an event on a dom element, when it happens I want the id of the of the object I'm trying to access -> so that I can set the value of a prop on that object
    const personIndex = this.state.people.findIndex((p) => {
      console.log(p);
      return p.id === id;
    });
    const person = { ...this.state.people[personIndex] };
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        people: people,
        changeCounter: (prevState.changeCounter += 1),
      };
    });
  };

  // switchNameHandler = (newName) => {
  //   // console.log("You clicked me!");
  //   // console.log(peopleState);
  //   this.setState({
  //     people: [
  //       {
  //         name: "Leland Shirley",
  //         job: "Developer",
  //         age: 31,
  //       },
  //       {
  //         name: "Sydney Samery",
  //         job: "Artist",
  //         age: 24,
  //       },
  //       {
  //         name: "Taloola",
  //         job: "Family Pet",
  //         age: 2,
  //       },
  //     ],
  //     // message: peopleState.message,
  //   });
  // };
  // inline css styling for scoped styles =>example

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };

  togglePeople = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let people = null;
    if (this.state.showPeople) {
      people = (
        <Person
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.setName}
          isAuthenticated={this.state.authenticated}
        />
      );
      //   StyledButton.backgroundColor = "red";
      //   StyledButton[":hover"] = {
      //     backgroundColor: "black",
      //     color: "white",
      //   };
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            clicked={this.togglePeople}
            people={this.state.people}
          />
          {people}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);