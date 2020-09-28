import React from "react";

const withClass = (WrappedComponent, className) => {
  //a func that returns a functional component and classname as a property of the comp.
  return (props) => (
    // access to props using the spread operator to pass props to the wrapped component to be passed into the function
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
