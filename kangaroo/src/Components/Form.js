import React from "react";

const Form = (props) => {
  return (
    <div>
    <form>
  <div className="form-group">
  <label for="exampleInputEmail1">Full Name</label>
    <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="text" className="form-control" id="inputNumber"></input>
  </div>
  <button type="submit" className="btn btn-primary" onClick={props.onClick}>Submit</button>
</form>
</div>
  );
}

export default Form