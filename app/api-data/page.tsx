"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../reduxToolKit/mySlice";
import { apiData } from "../reduxToolKit/slice";
import type { AppDispatch, RootState } from "../reduxToolKit/store";

const ApiDataPage = () => {

   const employeesData = useSelector((state: RootState) => state.emp.employeesData);
  const isLoading = useSelector((state: RootState) => state.emp.isLoading);
  const error = useSelector((state: RootState) => state.emp.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(apiData());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md mt-8 bg-white p-6 rounded-xl shadow-lg">
        {isLoading ? (
          <p className="text-gray-500 text-center">
            Loading employees data...
          </p>
        ) : error ? (
          <p className="text-red-500 text-center">
            Error loading employees data: {error}
          </p>
        ) : employeesData.length === 0 ? (
          <p className="text-gray-500 text-center">
            No employees data available.
          </p>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center text-green-600">
              APi Data Employees
            </h3>
            <ul className="space-y-3">
              {employeesData.map((emp: any) => (
                <li
                  key={emp.id}
                  className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{emp.name}</span>
                  <span className="text-gray-600 text-sm">{emp.email}</span> 

                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiDataPage;
