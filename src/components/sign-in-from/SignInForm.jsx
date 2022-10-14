import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
  createUserDocumentWithAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.scss";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    });
  };

  const handleChange = ({ target }) => {
    let { name, value } = target;
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Incorrect password for email");
          break;
        case "auth/user-not-found":
          toast.error("User not found");
          break;
        case "auth/email-already-in-use":
          toast.error("User already exists");
          break;
        case "auth/too-many-requests":
          toast.error("User not found");
          toast.error(
            "Too many failed login attempts. Reset your password or try again later."
          );
          break;
        default:
          toast.error(error.code);
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
        {/* <Button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </Button> */}
      </form>
    </div>
  );
};

export default SignInForm;
