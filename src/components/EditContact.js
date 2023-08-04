import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

class EditCon extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="ui main">
        <h3>Edit Contact</h3>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

function EditContact({ updateContactHandler }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <EditCon
      updateContactHandler={updateContactHandler}
      navigate={navigate}
      location={location}
    />
  );
}

export default EditContact;
