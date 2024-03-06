"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateData = () => {
  let [data, setData] = useState();
  console.log(data);
  let [state, setState] = useState({
    email: data?.email,
    password: data?.password,
  });

  let { email, password } = state;
  // console.log(state);
  let id = window.localStorage.getItem("id");

  let getData = async () => {
    const response = await axios.get(`http://localhost:3001/data/${id}`);
    // console.log(response?.data);
    setData(response?.data);
    window.localStorage.setItem("id", response?.data?.id);
  };
  useEffect(() => {
    getData();
  }, []);

  let handleUpdate = async e => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    let data = await axios.put(`http://localhost:3001/data/${id}`, payload);
    console.log(data);
    setData({
      email: "",
      password: "",
    });
    if (data?.status == 200) {
      toast.success("updated successfully");
      window.location.assign("/")
    }
  };

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="w-[100vw] h-[80vh] flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl text-blue-700">Update Data</h2>
        <form className="flex gap-4 flex-col text-lg">
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
            <button
              className="btn  btn-info w-full text-base"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateData;
