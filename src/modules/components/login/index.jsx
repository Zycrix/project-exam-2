import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../../styles/common";
import * as s from "../../styles/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/login";

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
    .required("Please enter your message")
    .min(3, "Min 3 characters"),
});

function App() {
  const [remember, setRemember] = useState(false);
  const [success, setSuccess] = useState(null);
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
    console.log(body);
    console.log(errors);
    form.reset();
    console.log(remember);
    setRemember(false);
    const result = await callApi(url, "POST", body);
    if (result.accessToken) {
      console.log(result);
      if (remember) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("name", result.name);
      } else {
        sessionStorage.setItem("token", result.accessToken);
        sessionStorage.setItem("name", result.name);
      }
      navigate("/");
    } else {
      setSuccess(result.errors[0].message);
      console.log(result);
    }
  }

  return (
    <s.LoginForm
      onSubmit={handleSubmit((data) => submitted(data))}
      className="form"
    >
      <p>{errors.email?.message || success}</p>
      <s.LoginInput type="text" placeholder="Username" {...register("email")} />
      <p>{errors.password?.message}</p>
      <s.LoginInput
        type="password"
        placeholder="Password"
        {...register("password")}
      />
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
  );
}

export default App;
