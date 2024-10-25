import React, { useReducer } from "react";

/* ------ PURPOSE ------
  An interest form for professionals to fill out if they want to request services.
  Sends POST request with inputted form data to the server's database
*/

const ProfessionalForm = () => {
  // --- define empty professtional_entry record ---
  const initialState = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    comment: '',
  }

  function reducer(state, action) {
    switch (action.type) {
      // --- editField works for each input field ---
      case 'editField':
        // --- retain existing state data while updating specified field with input value ---
        return { ...state, [action.field]: action.value };
      case 'reset':
        return { ...initialState };
      default:
        return state;
    }
  }

  // --- declare reducer & useReducer similar to declaring a state & useState ---
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    // --- deconstruct event.target to retrieve name & value ---
    const { name, value } = event.target;

    // --- execute editField case with identified field, name, & value ---
    dispatch({ type: 'editField', field: name, value });
  }

  const clearForm = () => {
    // --- execute reset case ---
    dispatch({ type: 'reset' });
  }

  // --- send POST to its respective POST path in server to accurately send form data to database ---
  const postProfessionalEntry = async (newProfessionalEntry) => {
    return fetch(`${process.env.DOMAIN}/contact/professional/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfessionalEntry),
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      // --- clear form once data is sent to the database ---
      clearForm();
    })
    .catch((err) => {
      console.error("Error posting professional entry: ", err);
    })
  }

  // --- separate event handler to account for preventing the event listener & to call postProfessionalEntry with the state data ---
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Professional Entry: ", state);
    postProfessionalEntry(state);
  }

  return (
    <>
      <h1>Professional Form</h1>
      <form onSubmit={handleSubmit}>

        {/* --- each input's onChange is handleChange because it works for each input --- */}

        {/* --- set each input's value to the state value or "" so that the app is not trying to control an uncontrolled input --- */}

        <label>First Name
          <input type="text" name="first_name" required value={state.first_name || ""} onChange={handleChange} />
        </label>
        <br /><br />

        <label>Last Name
          <input type="text" name="last_name" required value={state.last_name || ""} onChange={handleChange} />
        </label>
        <br /><br />

        <label>Phone
          <input type="text" name="phone" required value={state.phone || ""} onChange={handleChange} />
        </label>
        <br /><br />

        <label>Email
          <input type="text" name="email" required value={state.email || ""} onChange={handleChange} />
        </label>
        <br /><br />

        <label>Comment
          <textarea name="comment" id="comment" required value={state.comment || ""} onChange={handleChange}></textarea>
        </label>
        <br /><br />

        <button type="submit">Submit</button>
        <br /><br />
      </form>
    </>
  )
}

export default ProfessionalForm