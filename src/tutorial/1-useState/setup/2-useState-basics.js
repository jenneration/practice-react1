import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hellow world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Ozzy Bear");
  const clickhandler = () => {
    if (text === "Ozzy Bear") {
      setText("My Chiweenie");
    } else {
      setText("Ozzy Bear");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={clickhandler}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
