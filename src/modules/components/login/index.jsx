import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../../styles/common";
import * as s from "../../styles/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/login";

/**
 * @returns Returns the login component
 */

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
  email: yup
    .string()
    .required("Please enter a valid noroff email address")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(3, "Min 3 characters"),
});

function App() {
  const [remember, setRemember] = useState(false);
  const [success, setSuccess] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let body = {};
  async function submitted(data) {
    const form = document.querySelector(".form");
    body = data;
    body.email = body.email.toLowerCase();
    form.reset();
    setRemember(false);
    const result = await callApi(url, "POST", body);
    if (result.accessToken) {
      if (remember) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("name", result.name);
        localStorage.setItem("manager", result.venueManager);
      } else {
        sessionStorage.setItem("token", result.accessToken);
        sessionStorage.setItem("name", result.name);
        sessionStorage.setItem("manager", result.venueManager);
      }
      navigate("/");
    } else {
      setSuccess(result.errors[0].message);
      console.log(result);
    }
  }

  function toggleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <>
      <s.LoginForm
        onSubmit={handleSubmit((data) => submitted(data))}
        className="form"
      >
        <p>{errors.email?.message || success}</p>
        <s.LoginInput
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <p>{errors.password?.message}</p>
        <div className="password-container">
          <s.LoginInput
            type={show ? "text" : "password"}
            placeholder="Password"
            id="password"
            {...register("password")}
          />
          <c.CleanButton
            type="button"
            className="show-button"
            onClick={(e) => toggleShow(e)}
          >
            <span className="material-symbols-outlined">
              {show ? "visibility_off" : "visibility"}
            </span>
          </c.CleanButton>
        </div>
        <div className="checkbox">
          <s.CheckboxLabel>Remember me:</s.CheckboxLabel>
          <s.LoginCheckbox
            type="checkbox"
            value={remember}
            onChange={() => setRemember(!remember)}
          />
        </div>
        <div className="button-container">
          <c.FormButton type="submit">Log in</c.FormButton>
        </div>
      </s.LoginForm>
    </>
  );
}

export default App;
