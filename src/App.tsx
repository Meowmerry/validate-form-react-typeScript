import React from "react";
import { useForm } from "react-hook-form";

type IFormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit = (data: IFormData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="firstName"
              className={`block font-bold text-sm mb-2 ${
                errors.firstName ? "text-red-600" : "text-gray-700"
              }`}
            >
              First Name
            </label>
            <input
              className="
            text-gray-600
            border-gray-300
            rounded
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-offset-0
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="First Name"
              {...register("firstName", {
                required: "this is a required",
              })}
            />
            <br />
            {errors.firstName && errors.firstName.message}
            <br />

            <label
              htmlFor="lastName"
              className={`block font-bold text-sm mb-2 ${
                errors.lastName ? "text-red-600" : "text-gray-700"
              }`}
            >
              Last Name
            </label>
            <input
              className="
            text-gray-600
            border-gray-300
            rounded
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-offset-0
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="last Name"
              {...register("lastName", {
                required: "this is required",
              })}
            />
            <br />
            <span className="text-red-600">
              {errors.lastName && errors.lastName.message}
            </span>
            <br />

            <label
              htmlFor="email"
              className={`block font-bold text-sm mb-2 ${
                errors.email ? "text-red-600" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              className="
            text-gray-600
            border-gray-300
            rounded
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-offset-0
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="test@test.com"
              type="text"
              {...register("email", {
                required: "this is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />
            <br />
            {errors.email && errors.email.message}
            <br />
            <button
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// import {
//   //FormInputEmail,
//   FormInput,
//   // FormInputFullName,
//   // FormInputBirthDate,
//   // FormInputPassword,
//   // FormInputConfirmPassword,
// } from "./component/form-input";
// import "./App.css";
// const App: React.FC = () => {
//   const [username, setUsername] = useState<string>("name");
//   // const [email, setEmail] = useState<string>("");
//   // const [fullname, setFullName] = useState<string>("");
//   // const [birthdate, setBirthDate] = useState<string>("");
//   // const [password, setPassword] = useState<string>("");
//   // const [confirmpassword, setConfirmPassword] = useState<string>("");

//   console.log("username", username);

//   return (
//     <>
//       <div className="app">
//         <div>
//           <h1> Register🔐</h1>
//           <form
//           //onSubmit={loginUser}
//           >
//             <FormInput
//               placeholder="Username"
//               username={username}
//               setUsername={setUsername}
//             />
//             {/* <FormInputEmail
//             placeholder="Email"
//             email={email}
//             setEmail={setEmail}
//           />
//           <FormInputFullName
//             placeholder="Full Name"
//             fullname={fullname}
//             setFullName={setFullName}
//           />
//           <FormInputBirthDate
//             placeholder="Birth Of Date"
//             birthdate={birthdate}
//             setBirthDate={setBirthDate}
//           />
//           <FormInputPassword
//             placeholder="Password"
//             password={password}
//             setPassword={setPassword}
//           />
//           <FormInputConfirmPassword
//             placeholder="Confirm password"
//             confirmpassword={confirmpassword}
//             setConfirmPassword={setConfirmPassword}
//           /> */}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
