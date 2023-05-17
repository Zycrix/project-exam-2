import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import url from "../../utils/urls/register";
import callApi from "../../utils/apiCall.js";

//Email validation regex
const regex = /^[^\s@]+@stud.noroff+\.no/;

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
    .email("Please enter a valid noroff email address"),
  password: yup
    .string()
    .required("Please enter a valid password")
    .min(8, "Min 8 characters"),
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Min 3 characters"),
});

function App() {
  const [role, setRole] = useState("customer");
  const [avatar, setAvatar] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [success, setSuccess] = useState(null);

  let body = {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function submitted(data) {
    const form = document.querySelector(".form");
    body = data;
    body.venueManager = role === "customer" ? false : true;
    body.avatar = avatar;
    if (body.password !== confirmPassword) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
      setAvatar("");
      setRole("customer");
      setConfirmPassword("");
      console.log(body);
      console.log(errors);
      form.reset();
      const result = await callApi(url, "POST", body);
      if (result.id) {
        setSuccess("User created!");
        console.log(result);
      } else {
        setSuccess(result.errors[0].message);
        console.log(result);
      }
    }
  }

  return (
    <s.LoginForm
      className="form"
      onSubmit={handleSubmit((data) => submitted(data))}
    >
      <p>{success}</p>
      <p>{errors.name?.message}</p>
      <s.LoginInput type="text" placeholder="Username" {...register("name")} />
      <p>{errors.email?.message}</p>
      <s.LoginInput type="text" placeholder="Email" {...register("email")} />
      <p>{errors.password?.message}</p>
      <s.LoginInput
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <p>{errors.confirm?.message || confirmError}</p>
      <s.LoginInput
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
            onChange={(e) => setRole(e.target.value)}
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
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="manager">Create venues</label>
        </s.RadioContainer>
      </s.RoleContainer>
      <c.FormButton type="submit">Register</c.FormButton>
    </s.LoginForm>
  );
}

export default App;
