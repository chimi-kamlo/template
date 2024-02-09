import React, { Children } from "react";
import "./input.css";
function Input({
  small,
  select,
  long,
  textarea,
  label,
  Children,
  email,
  phone,
}) {
  //petit input de type text
  if (small) {
    return (
      <div className="inputContainer">
        <div className="containInput">
          <label htmlFor={label} className="label">
            {label}
          </label>
          <input type="text" name={label} id={label} className="input" />
        </div>
      </div>
    );
  }
  //phone
  if (phone) {
    return (
      <div className="inputContainer">
        <div className="containInput">
          <label htmlFor={label} className="label">
            {label}
          </label>
          <input type="phone" name={label} id={label} className="input" />
        </div>
      </div>
    );
  }
  //email
  if (email) {
    return (
      <div className="inputContainer">
        <div className="containInput">
          <label htmlFor={label} className="label">
            {label}
          </label>
          <input type="email" name={label} id={label} className="input" />
        </div>
      </div>
    );
  }
  //grand input de type texte
  if (long) {
    return (
      <div className="inputContainer">
        <div className="containInput">
          <label htmlFor={label} className="label">
            {label}
          </label>
          <input type="text" name={label} id={label} className="longInput" />
        </div>
      </div>
    );
  }

  //input de type select
  if (select) {
    return (
      <div className="inputContainer">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <select className="input" id={label}>
          {Children}
        </select>
      </div>
    );
  }
  //textarea input
  if (textarea) {
    return (
      <div className="inputContainer">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <textarea id={label} className="textarea"></textarea>
      </div>
    );
  }
}

export default Input;
