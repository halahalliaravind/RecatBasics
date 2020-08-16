import React, { useState } from "react";

function HookForm() {
  const [name, setName] = useState("");
  const [wife, setWife] = useState("");

  function handleNameChange(e){
      setName(e.target.value)
  }
  function handleWifeNameChange(e){
      setWife(e.target.value)
  }

  return (
    <section>
      <form>
        <input type="text" placeholder="Enter your name" onChange={handleNameChange} />
        <input type="text" placeholder="Enter your wife name" onChange={handleWifeNameChange} />

        <h3>My Name is - {name}</h3>
        <h3>My Wife Name is - {wife}</h3>
      </form>
    </section>
  );
}

export default HookForm;
