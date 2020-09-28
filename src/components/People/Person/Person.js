import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
// import "./Person.css";
// import styled from "styled-components";

//
// const StyledDiv = styled.div`
//   width: 50%;
//   margin: 10px auto;
//   padding: 10px;
//   text-align: center;
//   border: 1px solid #000;
//   box-shadow: 0 2px 4px #423f40;
//
//   @media (min-width: 500px) : {
//     width: 450px;
//   }
// `;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    // document.querySelector("input").focus(); //focuses on first inout component found on page
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please login in</p>
        )}

        <h4 onClick={this.props.click}>Hello, I'm {this.props.name}</h4>
        <p>My Occupation: {this.props.job}</p>
        <p>Age: {this.props.age}</p>
        {/*<p>{this.props.children}</p>*/}
        <input
          ref={this.inputElementRef}
          className={classes.input}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
  // console.log("[Person.js] rendering...");
}
//using PropTypes requires a npm i --save prop-types
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
