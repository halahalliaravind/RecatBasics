import React from "react";

function eventFunc() {
  function changeBtn() {
    console.log("btn chaged");
  }
  return (
    <div>
      <button onClick={changeBtn}>ChangeBtn</button>
    </div>
  );
}

export default eventFunc;
