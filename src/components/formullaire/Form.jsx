import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="form_container">
      <div className="containInput">
        <div>
          <label htmlFor="firstname" className="label">
            firstname
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="label">
            lastname
          </label>
          <input type="text" name="lastname" id="lastname" className="input" />
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="email" className="label">
            e-mail
          </label>
          <input type="text" name="email" id="email" className="input" />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            phone
          </label>
          <input type="text" name="phone" id="phone" className="input" />
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="company" className="label">
            company
          </label>
          <input type="text" name="company" id="company" className="input" />
        </div>

        <div>
          <label htmlFor="category" className="label">
            category
          </label>
          <select id="category" className="input">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="country" className="label">
            country
          </label>
          <select id="country" className="input">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="state" className="label">
            state
          </label>
          <select id="state" className="input">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="city" className="label">
            city
          </label>
          <input type="text" name="city" id="city" className="input" />
        </div>
        <div>
          <label htmlFor="postal" className="label">
            zip/postal code
          </label>
          <input type="text" name="postal" id="postal" className="input" />
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="suject" className="label">
            suject
          </label>
          <input type="text" id="suject" name="suject" className="longInput" />
        </div>
      </div>

      <div className="containInput">
        <div>
          <label htmlFor="message" className="label">
            message
          </label>
          <textarea id="message" className="textarea"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Form;
