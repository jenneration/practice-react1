import React, { useState } from "react";
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "hello",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{message}</h1>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
