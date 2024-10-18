import React, { useReducer } from "react";

const ClientForm = () => {
  // define empty client_entry record
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    type: '',
    issue: '',
    age: '',
    race: '',
    gender: '',
    comment: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      // have one case that works for each input field to reduce length and redundancy
      case 'editField':
        // have other data in state persist while only updating the specified field/ column with the updated input value
        return { ...state, [action.field]: action.value };
      case 'reset':
        return { ...initialState };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    // deconstruct event.target to retrieve the name and value
    const { name, value } = event.target;
    dispatch({ type: 'editField', field: name, value });
  }

  const clearForm = () => {
    dispatch({ type: 'reset' });
  }

  const postClientEntry =  async (newClientEntry) => {
    // doesn't currently fetch anything since there's no POST request in the server yet, that's why there a fetch error in the console
    return fetch('http://localhost:3388/contact/client/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClientEntry),
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      clearForm();
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    postClientEntry(state);
  }

  return (
    <>
      <h1>Client Form</h1>
      <form onSubmit={handleSubmit}>

        {/* each input will have the same onChange that sets the field value of the table */}
        
        {/* each value is set to its respective updated state value OR an empty string "" so that the
        console doesn't receive an error that the app is trying to control an uncontrolled input. */}

        <label>First Name
          <input type="text" name="first_name" value={state.first_name || ""} onChange={handleChange} required/>
        </label>

        <label>Last Name
          <input type="text" name="last_name" value={state.last_name || ""} onChange={handleChange} required/>
        </label>
        <br /><br />

        <label>Email
          <input type="email" name="email" value={state.email || ""} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>Type of Therapy
          <select name="type" id="type" value={state.type || ""} onChange={handleChange} required>
            <option value="family">Family</option>
            <option value="couple">Couple</option>
            <option value="individual">Indivdual</option>
            <option value="eap">EAP</option>
          </select>
        </label>
        <br /><br />

        <label>Issue
          <select name="issue" id="issue" value={state.issue || ""} onChange={handleChange} required>
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="life_challenges">Life Challenges</option>
            <option value="grief_loss">Grief/ Loss</option>
            <option value="parenting">Parenting</option>
          </select>
        </label>
        <br /><br />

        <label>Age
          <input type="number" name="age" value={state.age || ""} onChange={handleChange} required/>
        </label>
        <br /><br />

        <label>Race/ Ethnicity
          <select name="race" id="race" value={state.race || ""} onChange={handleChange} required>
            <option value="aian">American Indian or Alaska Native</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African-American</option>
            <option value="pacific">Native Hawaiian or Other Pacific Islander</option>
            <option value="mnamedle_eastern">Mnamedle Eastern or North African</option>
            <option value="hispanic">Hispanic/ Latino</option>
            <option value="white">White</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label>
        <br /><br />

        <label>Gender
          <select name="gender" id="gender" value={state.gender || ""} onChange={handleChange} required>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="non_binary">Non-binary</option>
            <option value="transgender">Transgender</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label>
        <br /><br />

        <label>Comment
          <textarea name="comment" id="comment" value={state.comment || ""} onChange={handleChange}></textarea>
        </label>
        <br /><br />

        <button type="submit">Submit</button>
        <br /><br />
      </form>
    </>
  )
}

export default ClientForm