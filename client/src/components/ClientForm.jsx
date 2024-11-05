import React, { useReducer } from "react";
import { validateEmail, showEmailError, hideEmailError } from "../constants.jsx";
/* ------ PURPOSE ------
  An interest form for prospective clients to fill out.
  Sends POST request with inputted form data to the server's database
*/ 

const ClientForm = () => {
  // --- define empty client_entry record with empty array for issues property ---
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    type: '',
    issues: [],
    age: '',
    race: '',
    gender: '',
    comment: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      // --- editField works for each input field ---
      case 'editField':
        // --- retain existing state data while updating specified field with input value ---
        return { ...state, [action.field]: action.value };
      case 'editIssues':
        return { ...state, issues: action.payload }
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

  // --- handle updates to checkbox inputs in Issues label ---
  const handleIssues = (event) => {
    const { checked, value } = event.target;

    // --- set newValue to [value] or null([]) if checked or unchecked ---
    let newValue = checked ? [value] : [];

    // --- execute editIssues case & filter through existing issue key to contain only ---
    dispatch({ type: 'editIssues', payload: [...state.issues.filter((issue) => issue !== value), ...newValue] })
  }

  const clearForm = () => {
    dispatch({ type: 'reset' });
  }

  // --- send POST to corresponding POST path in the server to accurately send form data to database ---
  const postClientEntry =  async (newClientEntry) => {
    return fetch(`${process.env.DOMAIN}/contact/client/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClientEntry),
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      // --- clear form once data is sent to the database ---
      clearForm();
    })
    .catch((err) => {
      console.error("Error adding client entry: ", err);
    });
  }

  // --- separate event handler to account for preventing the event listener and to call postClientEntry with the state data ---
  const handleSubmit = (event) => {
    event.preventDefault(); 

    // --- validate email input field ---
    if (!state.email) {
      showEmailError("Email required");
    } else if (!validateEmail(state.email)) {
      showEmailError("Invalid email address");
    } else {
      hideEmailError();

      // --- store state.issues property into variable ---
      const issuesArray = state.issues;

      // --- update the issues property in state to issuesArray ---
      // --- then send this & all other state values to the POST operation ---
      postClientEntry({
        ...state,
        issues: issuesArray
      });
      console.log('Client Entry: ', state);
    }
  }


  return (
    <>
      <h1>Client Form</h1>
      <form onSubmit={handleSubmit}>

        {/* --- each input will have the same onChange that sets the field value of the table --- */}
        
        {/* --- each value is set to its respective updated state value OR an empty string "" ---
        --- this prevents console from receiving an error that the app is trying to control an uncontrolled input. --- */}

        <label>First Name
          <input type="text" name="first_name" value={state.first_name || ""} onChange={handleChange} required placeholder="John"/>
        </label>

        <label>Last Name
          <input type="text" name="last_name" value={state.last_name || ""} onChange={handleChange} required placeholder="Doe"/>
        </label>
        <br /><br />

        <label style={{display: "flex"}}>Email
          <input type="email" name="email" value={state.email || ""} onChange={handleChange} required placeholder="abc123@testing.com" />
          <div id="emailError"></div>
        </label>
        <br /><br />

        <label>Type of Therapy
          <select name="type" id="type" value={state.type || ""} onChange={handleChange} required>
            <option value="" disabled hidden>Select an option</option>
            <option value="family">Family</option>
            <option value="couple">Couple</option>
            <option value="individual">Indivdual</option>
            <option value="eap">EAP</option>
          </select>
        </label>
        <br /><br />

        <label>Issue
          {/* --- might map through this later --- */}
          <div className="issue-group">
            <input type="checkbox" name="issues" value="depression" onChange={handleIssues} />
            <label>Depression</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="anxiety" onChange={handleIssues} />
            <label>Anxiety</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="stress" onChange={handleIssues} />
            <label>Stress</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="parenting" onChange={handleIssues} />
            <label>Parenting</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="grief_loss" onChange={handleIssues} />
            <label>Grief/ Loss</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="self_esteem" onChange={handleIssues} />
            <label>Self-Esteem</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="life_challenges" onChange={handleIssues} />
            <label>Life Challenges</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="anger" onChange={handleIssues} />
            <label>Anger Management</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="relationship" onChange={handleIssues} />
            <label>Relationship Difficulties</label>
          </div>
          <div className="issue-group">
            <input type="checkbox" name="issues" value="sports" onChange={handleIssues} />
            <label>Sports Performance</label>
          </div>
        </label>
        <br /><br />

        <label>Age
          <input type="number" min='18' max='100' name="age" value={Number(state.age).toString() || ""} onChange={handleChange} required/>
        </label>
        <br /><br />

        <label>Race/ Ethnicity
          <select name="race" id="race" value={state.race || ""} onChange={handleChange} required>
            <option value="" disabled hidden>Select an option</option>
            <option value="aian">American Indian or Alaska Native</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African-American</option>
            <option value="pacific">Native Hawaiian or Other Pacific Islander</option>
            <option value="middle_eastern">Middle Eastern or North African</option>
            <option value="hispanic">Hispanic/ Latino</option>
            <option value="white">White</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label>
        <br /><br />

        <label>Gender
          <select name="gender" id="gender" value={state.gender || ""} onChange={handleChange} required>
            <option value="" disabled hidden>Select an option</option>
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
          <textarea name="comment" id="comment" value={state.comment || ""} onChange={handleChange} placeholder="Why are you interested in services?" rows="3" cols="30"></textarea>
        </label>
        <br /><br />

        <button type="submit">Submit</button>
        <br /><br />
      </form>
    </>
  )
}

export default ClientForm