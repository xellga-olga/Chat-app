import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [uploadPhoto, setUploadPhoto] = useState("");

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setUploadPhoto(file);
  };

  const handleClearUploadPhoto = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setUploadPhoto(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 p-4 rounded overflow-hidden mx-auto">
        <h3>Welcome to Chat app!</h3>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="name">Name : </label>
            <input
              required
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              type="text"
              id="name"
              name="name"
              placeholder="enter your name"
              value={data.name}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="email">Email : </label>
            <input
              required
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="password">Password : </label>
            <input
              required
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="profile_pic">
              Photo :
              <div className="cursor-pointer h-14 bg-slate-100 flex justify-center items-center border hover:border-primary">
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                  { 
                    uploadPhoto?.name
                    ? uploadPhoto?.name
                    : "Upload profile photo"
                  }
                </p>
                {uploadPhoto?.name && (
                  <button
                    className="ml-2 text-lg hover:text-red-600"
                    onClick={handleClearUploadPhoto}
                  >
                    <IoMdClose />
                  </button>
                )}
              </div>
            </label>
            <input
              className="hidden bg-slate-100 px-2 py-1 focus:outline-primary"
              type="file"
              id="profile_pic"
              name="profile_pic"
              onChange={handleUploadPhoto}
            />
          </div>
          <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">Register</button>
        </form>

        <p className="my-2">Already have account ? <Link to={"/email"} className='font-semibold hover:text-primary'>Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
