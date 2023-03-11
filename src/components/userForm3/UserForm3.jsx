import React, { useState } from "react";
import { useForm } from "react-hook-form";


const UserForm3 = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange"});
    // mode = onChange will get all error in live writing
   const onSubmit = data => console.log(data);

//    console.log(watch("userName"));

const watchAllFields = watch();
console.log(watchAllFields)



  return (
    <div className="w-[80%] mx-auto bg-slate-200 mt-5 p-5">
      <div className="w-4/5 mx-auto">
        <h1 className="text-center text-2xl">
          {" "}
          User Data With validation React Hook Form
        </h1>

        <div className="bg-formCard p-10 rounded-sm mt-5 hover:shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="userName" className="block mb-1">
                User Name
              </label>
              <input 
                 {...register('userName',{ required: true, maxLength: 10, pattern: /^[^!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?`~]*$/})}
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                name="userName" aria-invalid={errors.userName ? "true" : "false"} 
              />
              {errors?.userName?.type === 'required' && <p>User name is required !</p>}
              {errors?.userName?.type === 'maxLength' && <p>User name not more than 15 character !</p>}
              {errors?.userName?.type === 'pattern' && <p>Special Character not allow!</p>}

            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="block  mb-1">
                User Email
              </label>
              <input
                {...register("email",{ required: true , pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})}
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                name="email"
              />
              {errors?.email?.type === "required" && <p>Email is required</p>}
              {errors?.email?.type === "pattern" && <p>Input a valid email</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="block  mb-1">
                User Phone
              </label>
              <input
                {...register("phone",{ required: true , pattern:/^(\+?880|0)1[1|3-9][0-9]{8}$/ })}
                type="text"
                className="w-full p-1 rounded-sm outline-none"
                name="phone"
              />
               {errors?.phone?.type === "pattern" && <p>Input a valid mobile number </p>}
               {errors?.phone?.type === "required" && <p>Phone number is required ! </p>}

            </div>

            <div>
             
              <input
                type="submit"
                className="bg-green-100 px-2 py-1 rounded-sm"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm3;
