"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateData = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  let { email, password } = state;

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/data", state);
      console.log(response);
      if (response.status == 201) {
        toast.success("Data submitted successfully");
        // window.location.assign("/")
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setState({
        email: "",
        password: "",
      });
    }
  };

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="w-[100vw] h-[80vh] flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl text-blue-700">Create Data</h2>
        <form onSubmit={handleSubmit} className="flex gap-4 flex-col text-lg">
          <div>
            <input
              type="text"
              className="p-3 w-[25vw]"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email here"
            />
          </div>
          <div>
            <input
              type="password"
              className="p-3 w-[25vw]"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password here"
            />
          </div>
          <div>
            <button className="btn  btn-info w-full text-base">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateData;
