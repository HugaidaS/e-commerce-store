import React, { useState } from "react";

import {
  createUserDocumentWithAuth,
  createUserDocWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-up-form.scss";
import { toast } from "react-toastify";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords did not match!");
      return;
    }

    try {
      const { user } = await createUserDocWithEmailAndPassword(email, password);
      await createUserDocumentWithAuth({ ...user, displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          toast.error("Password should be at least 6 characters");
          break;
        case "auth/email-already-in-use":
          toast.error("User already exists");
          break;
        default:
          toast.error(error.code);
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
