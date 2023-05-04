import React, { useState } from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/login";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../../modules/hooks/useApi";

//---------------------------------------------------------------------MAYBE SPLIT THIS UP A BIT MORE--------------------------------------------------------------

//Email validation regex
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Add the regex to the string schema
yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(regex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

//Validation schema
const schema = yup.object({
  fullName: yup
    .string()
    .required("Please enter your full name")
    .min(3, "Min 3 characters"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .required("Please enter your subject")
    .min(3, "Min 3 characters"),
  body: yup
    .string()
    .required("Please enter your message")
    .min(3, "Min 3 characters"),
});

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [avatar, setAvatar] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [venueManager, setVenueManager] = useState(false);
  const [login, setLogin] = useState(true);
  const [role, setRole] = useState("customer");
  const [remember, setRemember] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [body, setBody] = useState({
    username: username,
    password: password,
    email: email,
    confirm: confirm,
    avatar: avatar,
    venueManager: venueManager,
  });

  function toggleRegister(e) {
    e.preventDefault();
    setLogin(!login);
  }

  function handleRoleChange(e) {
    setRole(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
  }
  function handleRegister(e) {
    e.preventDefault();
  }
  return (
    <div>
      {login ? (
        <c.MainHeading>Log in</c.MainHeading>
      ) : (
        <c.MainHeading>Register</c.MainHeading>
      )}
      <s.LoginForm>
        {login ? (
          <>
            <s.LoginInput
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <s.LoginInput type="password" placeholder="Password" />
            <div className="checkbox">
              <s.CheckboxLabel>Remember me:</s.CheckboxLabel>
              <s.LoginCheckbox
                type="checkbox"
                checked={remember}
                value="remember"
                onChange={(e) => setRemember(!remember)}
              />
            </div>
            <div className="button-container">
              <c.FormButton onChange={(e) => handleLogin(e)}>
                Log in
              </c.FormButton>
              <c.RegisterButton onClick={(e) => toggleRegister(e)}>
                Register
              </c.RegisterButton>
            </div>
          </>
        ) : (
          <>
            <s.LoginInput
              type="text"
              placeholder="Username"
              value={body.name}
              onChange={(e) => setBody({ name: e.target.value })}
            />
            <s.LoginInput
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <s.LoginInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <s.LoginInput
              type="string"
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <s.LoginInput
              type="string"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <s.RoleContainer>
              <p>I want to:</p>
              <s.RadioContainer>
                <input
                  type="radio"
                  id="customer"
                  name="role"
                  value="customer"
                  checked={role === "customer"}
                  onChange={(e) => handleRoleChange(e)}
                />
                <label htmlFor="customer">Book venues</label>
              </s.RadioContainer>
              <s.RadioContainer>
                <input
                  type="radio"
                  id="manager"
                  name="role"
                  value="manager"
                  checked={role === "manager"}
                  onChange={(e) => handleRoleChange(e)}
                />
                <label htmlFor="manager">Create venues</label>
              </s.RadioContainer>
            </s.RoleContainer>
            <c.FormButton onClick={(e) => handleRegister(e)}>
              Register
            </c.FormButton>
            <c.RegisterButton onClick={(e) => toggleRegister(e)}>
              Back to log in
            </c.RegisterButton>
          </>
        )}
      </s.LoginForm>
    </div>
  );
}

export default App;
