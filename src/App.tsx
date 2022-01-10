import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  //FormInputEmail,
  FormInput,
  // FormInputFullName,
  // FormInputBirthDate,
  // FormInputPassword,
  // FormInputConfirmPassword,
} from "./component/form-input";
import "./App.css";
const App: React.FC = () => {
  const [username, setUsername] = useState<string>("name");
  // const [email, setEmail] = useState<string>("");
  // const [fullname, setFullName] = useState<string>("");
  // const [birthdate, setBirthDate] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [confirmpassword, setConfirmPassword] = useState<string>("");

  console.log("username", username);

  return (
    <>
      <div className="app">
        <div>
          <h1> Register🔐</h1>
          <form
          //onSubmit={loginUser}
          >
            <FormInput
              placeholder="Username"
              username={username}
              setUsername={setUsername}
            />
            {/* <FormInputEmail
            placeholder="Email"
            email={email}
            setEmail={setEmail}
          />
          <FormInputFullName
            placeholder="Full Name"
            fullname={fullname}
            setFullName={setFullName}
          />
          <FormInputBirthDate
            placeholder="Birth Of Date"
            birthdate={birthdate}
            setBirthDate={setBirthDate}
          />
          <FormInputPassword
            placeholder="Password"
            password={password}
            setPassword={setPassword}
          />
          <FormInputConfirmPassword
            placeholder="Confirm password"
            confirmpassword={confirmpassword}
            setConfirmPassword={setConfirmPassword}
          /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
