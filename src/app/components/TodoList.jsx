"use client";

import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const TodoList = () => {
  let [state, setState] = useState([]);
  let [data, setData] = useState();

  // console.log("hello");
  useEffect(() => {
    window
      .fetch("http://localhost:3001/data")
      .then(res => res.json())
      .then(data => setState(data));
  }, []);
  // console.log(state);

  let handleDelete = async id => {
    try {
      let data = await axios.delete(`http://localhost:3001/data/${id}`);
      // console.log(data);
      if (data?.status == 200) {
        toast.success("user deleted successfully");
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead className="text-base text-gray-800">
          <tr>
            <th>userId</th>
            <th>Email</th>
            <th>Password</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {state == null
            ? "Loading..."
            : state?.map((li, ind) => {
                return (
                  <tr className="hover" key={ind}>
                    <th>{li.id}</th>
                    <td>{li.email}</td>
                    <td>{li.password}</td>
                    <td>
                      <div className="flex justify-evenly">
                        <Link href="components/updatedata" state={data}>
                        <span
                          className="cursor-pointer"
                          onClick={() => window.localStorage.setItem("id",li.id)}
                        >
                          <FaRegEdit size={18} />
                        </span>
                        </Link>

                        <span
                          className="cursor-pointer text-red-800"
                          onClick={() =>handleDelete(li.id) }
                        >
                          <MdOutlineDelete size={18} />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
