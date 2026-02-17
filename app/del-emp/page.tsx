"use client";

import { removeEmployee } from "@/app/reduxToolKit/slice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const delEmp = () => {
  const employees = useSelector(
    (state: any) => state.emp.employees
  );

  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 text-center">
        
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Delete Employees
        </h2>

        {employees.length === 0 ? (
          <p className="text-gray-500">
            No employees available.
          </p>
        ) : (
          <div className="space-y-4">
            {employees.map((emp: any) => (
              <div
                key={emp.id}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2"
              >
                <h3 className="font-medium text-gray-800">
                  {emp.name}
                </h3>

                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default delEmp;
