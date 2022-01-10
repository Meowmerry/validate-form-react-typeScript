import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

type IFormData = {
  firstName: string;
  lastName: string;
  password: string;
  confPassword: string;
  email: string;
};

const validationSchema = Yup
  .object({
    firstName: Yup.string().min(2).max(20).required("First name is required"),
    lastName: Yup.string().required(),
    password: Yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
    confPassword: Yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    email: Yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  })
  .required();

export default function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: IFormData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div>
                <label
                  className={`block ${
                    errors.firstName ? "text-red-400" : "text-gray-700"
                  }`}
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  autoFocus
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.firstName && errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className={`block ${
                    errors.lastName ? "text-red-400" : "text-gray-700"
                  }`}
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  autoFocus
                  {...register("lastName", { required: true })}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.lastName && "Last name is required"}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className={`block ${
                    errors.email ? "text-red-400" : "text-gray-700"
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.email && errors.email.message}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className={`block ${
                    errors.email ? "text-red-400" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.password && errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className={`block ${
                    errors.email ? "text-red-400" : "text-gray-700"
                  }`}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("confPassword")}
                />
                {errors.confPassword && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.confPassword && errors.confPassword.message}
                  </p>
                )}
              </div>

              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <a className="text-blue-600 hover:underline" href="#">
                  Log in
                </a>
              </div>
            </div>
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
