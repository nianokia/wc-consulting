import React from "react";

const ClientForm = () => {
  return (
    <>
      <h1>Client Form</h1>
      <form>
        <label>First Name
          <input type="text" id="firstName" required/>
        </label>

        <label>Last Name
          <input type="text" id="firstName" required/>
        </label>
        <br />

        <label>Email
          <input type="email" id="email" required />
        </label>
        <br />

        <label>Type of Therapy
          <select name="type" id="type" required>
            <option value="family">Family</option>
            <option value="couple">Couple</option>
            <option value="individual">Individual</option>
            <option value="eap">EAP</option>
          </select>
        </label>
        <br />

        <label>Issue
          <select name="issue" id="issue" required>
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="life-challenges">Life Challenges</option>
            <option value="grief-loss">Grief/ Loss</option>
            <option value="parenting">Parenting</option>
          </select>
        </label>
        <br />

        <label>Age
          <input type="number" id="age" required/>
        </label>
        <br />

        <label>Race/ Ethnicity
          <select name="race" id="race" required>
            <option value="aian">American Indian or Alaska Native</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African-American</option>
            <option value="pacific">Native Hawaiian or Other Pacific Islander</option>
            <option value="middle-eastern">Middle Eastern or North African</option>
            <option value="hispanic">Hispanic/ Latino</option>
            <option value="white">White</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </label>
        <br />

        <label>Gender
          <select name="gender" id="gender" required>
            <option value="female">Man</option>
            <option value="male">Woman</option>
            <option value="non-binary">Non-binary</option>
            <option value="transgender">Transgender</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </label>
        <br />

        <label>Comment
          <textarea name="comment" id="clientComment"></textarea>
        </label>
        <hr />
      </form>
    </>
  )
}

export default ClientForm