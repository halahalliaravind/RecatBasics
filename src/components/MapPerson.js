import React from "react";

export default function MapPerson({person}) {
  return (
    <div>
      <h2>
        I'm {person.name} and I'm a {person.role}
      </h2>
    </div>
  );
}
