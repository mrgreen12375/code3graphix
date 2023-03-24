import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="center">
      <h1>Sign-up</h1>
      <div>
        {data ? (
          <p>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <div className="loginContainer">
                <label className="nameLabel">Username:</label>
                <input
                  className="passwordInput"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="loginContainer">
                  <label className="nameLabel">Email:</label>
                  <input
                    className="emailInput"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="loginContainer">
                  <label className="nameLabel">Password:</label>
                  <input
                    className="passwordInput"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button
                    className="loginButton"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Sign-up
                  </button>
                  <Link className="logInstead" to="/login">
                    Login instead
                  </Link>
                </div>
              </div>
            </div>
          </form>
        )}
        {error && <div className = "loading">{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
