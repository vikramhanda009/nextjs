
"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {addEmployee}  from '@/app/reduxToolKit/slice';
import ShowEmp from "./showEmp";
import Link from 'next/link';
const AddEmp = () => {
  const [empName, setEmpName] = useState('');
  const dispatch = useDispatch()
  const dataDispach = () => {
    // Dispatch logic to add employee
    dispatch(addEmployee(empName))
    console.log(`Employee Added: ${empName}`);
  }
  return (
    <div className="text-center mt-10">
      <h2>Add Employee</h2>
      <input type="text" placeholder="Employee Name" value={empName} onChange={(e) => setEmpName(e.target.value)} />
      <button onClick={dataDispach}>Add Employee</button>
      <Link href="/del-emp">Delete Employee </Link>
        <ShowEmp/>
    </div>
  );
};

export default AddEmp;