import React from "react";
import { useForm } from "react-hook-form";
import { useMakeAdminMutation } from "../../api/userSlice";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [makeAdmin] = useMakeAdminMutation();

  const onSubmit = (data) => {
    makeAdmin(data);
    reset();
  };

  return (
    <div>
      <h4 className="font-monospace fw-bold pt-5">
        Make an Admin Whom You Want
      </h4>

      <hr className="w-75 mb-5 mx-auto" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-3 m-3 w-50 input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 cursor-pointer"
          type="submit"
          value="Make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;