import React, { useState } from "react";

const ClientForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1>Client Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name
          <input type="text" name="first_name" value={formData.first_name || ""} onChange={handleChange} required/>
        </label>

        <label>Last Name
          <input type="text" name="last_name" value={formData.last_name || ""} onChange={handleChange} required/>
        </label>
        <br /><br />

        <label>Email
          <input type="email" name="email" value={formData.email || ""} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>Type of Therapy
          <select name="type" id="type" value={formData.type} onChange={handleChange} required>
            <option value="family">Family</option>
            <option value="couple">Couple</option>
            <option value="individual">Indivdual</option>
            <option value="eap">EAP</option>
          </select>
        </label>
        <br /><br />

        <label>Issue
          <select name="issue" id="issue" value={formData.issue} onChange={handleChange} required>
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="life_challenges">Life Challenges</option>
            <option value="grief_loss">Grief/ Loss</option>
            <option value="parenting">Parenting</option>
          </select>
        </label>
        <br /><br />

        <label>Age
          <input type="number" name="age" value={formData.age || ""} onChange={handleChange} required/>
        </label>
        <br /><br />

        <label>Race/ Ethnicity
          <select name="race" id="race" value={formData.race} onChange={handleChange} required>
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
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required>
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
          <textarea name="comment" id="comment" value={formData.comment || ""} onChange={handleChange}></textarea>
        </label>
        <br /><br />

        <button type="submit">Submit</button>
        <br /><br />
      </form>
    </>
  )
}

export default ClientForm