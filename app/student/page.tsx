"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../reduxToolKit/mySlice";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const students = useSelector((state: any) => state.student.students);
  const dispatch = useDispatch()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Registered:", formData);
    dispatch(addStudent(formData));
    alert("Student registered successfully!");
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register Student
          </button>
        </form>
      </div>
      <div className="w-full max-w-md mt-8 bg-white p-6 rounded-xl shadow-lg">
        {students.length === 0 ? (
          <p className="text-gray-500 text-center">
            No students registered yet.
          </p>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center text-green-600">
              Registered Students
            </h3>
            <ul className="space-y-3">
              {students.map((student: any) => (
                <li
                  key={student.id   }
                  className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{student.name}</span>
                  <span className="text-gray-600 text-sm">{student.email}</span> 

                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRegistration;
