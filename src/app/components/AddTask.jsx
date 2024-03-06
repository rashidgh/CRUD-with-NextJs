import React from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link"

const AddTask = () => {
  return (
    <Link href="/components/createdata" className="w-full">
    <button className="btn  btn-info w-full text-base text-white">
      <p className="">Add new task</p>{" "}
      <span>
        <FiPlus size={18} />
      </span>
    </button></Link>
  );
};

export default AddTask;
