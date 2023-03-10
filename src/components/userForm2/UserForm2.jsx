import React, { useState } from "react";
import ErrorMessage from "../error/ErrorMessage";

const UserForm2 = () => {
  // user data

  const [userData, setUserData] = useState({
    name: null,
    email: "",
    phone: "",
  });

  console.log(userData.email)


  // error

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });


  const formHandler = (e) => {
    e.preventDefault();
  };

  const nameHandler = (e) => {
    const userName = e.target.value;

    // validation
    // je kono dhoroner error hole, useState er username empty set korte hobe
    if (userName === "") {
      setError({
        ...error,
        nameError: "User name must not be empty ",
      });

      setUserData({
        ...userData,
        name: "",
      });
    } else if (userName.length < 6) {
      setError({
        ...error,
        nameError: "User name must not less than 6 character ",
      });

      setUserData({
        ...userData,
        name: "",
      });
    } else {
      setError({
        ...error,
        nameError: "",
      });

      setUserData({
        ...userData,
        name: userName,
      });
    }
  };

  // email handler 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailHandler =(e)=>{
     const userEmail = e.target.value;
     const isValidEmail = emailRegex.test(userEmail);
     console.log(isValidEmail)

     if(userEmail === "")
     {
        setError({
            ...error,
            emailError:" Email must not be empty "
        });

        setUserData({
            ...userData,
            email: ""
        });
     } 
     else if(!isValidEmail)
     {
        setError({
            ...error,
            emailError:"Enter a valid email "
        });

        setUserData({
            ...userData,
            email: userEmail
        });

     }else{

        setError({
            ...error,
            emailError:""
        });

        setUserData({
            ...userData,
            email: userEmail
        });

     }

  }

  // phone handler 

  const phoneHandler = (e) => {
    const userPhone = e.target.value;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const isValidPhone = phoneRegex.test(userPhone);
    console.log(isValidPhone);

    if (userPhone === "") {
      setError({
        ...error,
        phoneError: " Phone number must not be empty ",
      });

      setUserData({
        ...userData,
        phone: "",
      });
    } else if (!isValidPhone) {
      setError({
        ...error,
        phoneError: "Enter a valid phone number ",
      });

      setUserData({
        ...userData,
        phone: "",
      });
    } else {
      setError({
        ...error,
        phoneError: "",
      });

      setUserData({
        ...userData,
        phone: userPhone,
      });
    }
  };


  // error clear is awesome 

const clearError = (errorName)=>{
    setError({
        error,
        [errorName]:"",
    });
}

  return (
    <div className="w-[80%] mx-auto bg-slate-200 mt-5 p-5">
      <div className="w-4/5 mx-auto">
        <h1 className="text-center text-2xl">
          {" "}
          User Data With simple validation (Form 2)
        </h1>

        <div className="bg-formCard p-10 rounded-sm mt-5 hover:shadow-lg">
          <form onSubmit={formHandler}>
            <div className="mb-2">
              <label htmlFor="userName" className="block mb-1">
                User Name
              </label>
              <input
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                onKeyUp={nameHandler}
                name="userName"
              />
              {error.nameError && (
                <ErrorMessage error={error} errorMessage="nameError" clearError={clearError}  />
              )}
            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="block  mb-1">
                User Email
              </label>
              <input
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                name="email" onKeyUp={emailHandler}
              />
              {error.emailError && (
                <ErrorMessage error={error} errorMessage="emailError" clearError={clearError}  />
              )}
            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="block  mb-1">
                User Phone
              </label>
              <input
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                name="phone" onKeyUp={phoneHandler}
              />

            {error.phoneError && (
                <ErrorMessage error={error} errorMessage="phoneError" clearError={clearError}  />
              )}
            </div>

            <div>
               {userData.email && userData.name ? <input
                type="submit"
                className="bg-green-100 px-2 py-1 rounded-sm"
                value="Submit"
              /> : <input
              type="submit"
              className="bg-slate-400 px-2 py-1 rounded-sm"
              value="Submit" disabled
            />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm2;
