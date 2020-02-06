import React from "react";

const Form = ({props, handleInputChange, value, disabled}) => {
  return (
    <div>
    <form>
  <div className="form-group">
  <label for="name">Full Name</label>
    <input type="text" className="form-control" id="InputName" onChange={handleInputChange} value={value} />
  </div>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={handleInputChange} value={value} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="number">Phone Number</label>
    <input type="number" className="form-control" id="inputNumber" onChange={handleInputChange} value={value} />
  </div>
  <button type="submit" className="btn btn-primary" disabled={disabled} onClick={() => props.sendMessage()}>Submit</button>
</form>
</div>
  );
}

export default Form