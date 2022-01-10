import React from "react";
import "./form-input.css";
interface FormInputProps {
  placeholder?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
  username?: string;
}
export const FormInput: React.FunctionComponent<FormInputProps> = (props) => {
  const { placeholder, username, setUsername } = props;
  return (
    <div className="formInput">
      {/* <label>Usermane</label> */}
      <input
        placeholder={placeholder}
        onChange={(e) => {
          if (setUsername) setUsername(e.target.value);
        }}
      />
    </div>
  );
};

// interface FormInputEmailProps {
//   placeholder?: string;
//   setEmail: React.Dispatch<React.SetStateAction<string>>;
//   email: string;
// }

// export const FormInputEmail: React.FunctionComponent<FormInputEmailProps> = (
//   props
// ) => {
//   const { placeholder, email, setEmail } = props;
//   return (
//     <div className="formInput">
//       {/* <label>Usermane</label> */}
//       <input
//         placeholder={placeholder}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//   );
// };
// interface FormInputFullNameProps {
//   placeholder?: string;
//   setFullName: React.Dispatch<React.SetStateAction<string>>;
//   fullname: string;
// }
// export const FormInputFullName: React.FunctionComponent<
//   FormInputFullNameProps
// > = (props) => {
//   const { placeholder, fullname, setFullName } = props;
//   return (
//     <div className="formInput">
//       {/* <label>Usermane</label> */}
//       <input
//         placeholder={placeholder}
//         onChange={(e) => setFullName(e.target.value)}
//       />
//     </div>
//   );
// };

// interface FormInputBirthDateProps {
//   placeholder?: string;
//   setBirthDate: React.Dispatch<React.SetStateAction<string>>;
//   birthdate: string;
// }
// export const FormInputBirthDate: React.FunctionComponent<
//   FormInputBirthDateProps
// > = (props) => {
//   const { placeholder, birthdate, setBirthDate } = props;
//   return (
//     <div className="formInput">
//       {/* <label>Usermane</label> */}
//       <input
//         placeholder={placeholder}
//         onChange={(e) => setBirthDate(e.target.value)}
//       />
//     </div>
//   );
// };

// interface FormInputPasswordProps {
//   placeholder?: string;
//   setPassword: React.Dispatch<React.SetStateAction<string>>;
//   password: string;
// }
// export const FormInputPassword: React.FunctionComponent<
//   FormInputPasswordProps
// > = (props) => {
//   const { placeholder, password, setPassword } = props;
//   return (
//     <div className="formInput">
//       {/* <label>Usermane</label> */}
//       <input
//         placeholder={placeholder}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//   );
// };

// interface FormInputConfirmPasswordProps {
//   placeholder?: string;
//   setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
//   confirmpassword: string;
// }
// export const FormInputConfirmPassword: React.FunctionComponent<
//   FormInputConfirmPasswordProps
// > = (props) => {
//   const { placeholder, confirmpassword, setConfirmPassword } = props;
//   return (
//     <div className="formInput">
//       {/* <label>Usermane</label> */}
//       <input
//         placeholder={placeholder}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//     </div>
//   );
// };
