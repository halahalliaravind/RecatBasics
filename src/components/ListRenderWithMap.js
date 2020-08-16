import React from "react";
import MapPerson from "./MapPerson";

function ListRenderWithMap() {
  //   const names = ["Aravind", "Akhil", "Chethan"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "Aravind",
      role: "UI Dev",
    },
    {
      id: 2,
      name: "AKhil",
      role: "Fullstack Dev",
    },
    {
      id: 3,
      name: "Chethan",
      role: "Backend Dev",
    },
  ];
  const personList = persons.map((person) => (
    // <h2 key={person.id}>
    //   I'm {person.name} and I'm a {person.role}
    // </h2>
    <MapPerson key={person.id} person={person}/>
  ));
  return <div>{personList}</div>;
}

export default ListRenderWithMap;
