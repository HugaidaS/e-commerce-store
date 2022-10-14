import React, { useEffect } from "react";
import {
  auth,
  createUserDocumentWithAuth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-from/SignUpForm";
import SignInForm from "../../components/sign-in-from/SignInForm";
import "./authentication.scss";

const Authentication = () => {
  useEffect(() => {
    const init = async () => {
      const { user } = await getRedirectResult(auth);
      const userRef = await createUserDocumentWithAuth(user);
      console.log(userRef);
    };
    init();
  }, []);

  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
