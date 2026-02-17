"use client";

import { removeEmployee } from "@/app/reduxToolKit/slice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const ShowEmp = () => {
  const employees = useSelector(
    (state: any) => state.emp.employees
  );

  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Employee List
        </h2>

        {employees.length === 0 ? (
          <p className="text-center text-gray-500">
            No employees added yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {employees.map((emp: any) => (
              <li
                key={emp.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border"
              >
                <span className="font-medium text-gray-800">
                  {emp.name}
                </span>

                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShowEmp;
