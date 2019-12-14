import React, { useState } from "react";
//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target;
    // console.log(name);
    if (name === "fName") {
      setContact({ fName: value, lName: contact.lName, email: contact.email });
    } else if (name === "lName") {
      setContact({ fName: contact.fName, lName: value, email: contact.email });
    } else if (name === "email") {
      setContact({ fName: contact.fName, lName: contact.lName, email: value });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
