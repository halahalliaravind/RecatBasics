import React from "react";

export const Greet = (props) => {
  const { fname, lname } = props;
  return (
    <div>
      <h1>
        Hello {fname} {lname}
      </h1>
      {props.children}
    </div>
  );
};
