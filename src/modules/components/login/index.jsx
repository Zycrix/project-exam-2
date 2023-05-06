import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function submitted(data) {
    const form = document.querySelector(".form");
    console.log(remember);
    setRemember(false);
    console.log(data);
    console.log(errors);
    form.reset();
  }

  return (
    <s.LoginForm
      onSubmit={handleSubmit((data) => submitted(data))}
      className="form"
    >
      <p>{errors.email?.message}</p>
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
