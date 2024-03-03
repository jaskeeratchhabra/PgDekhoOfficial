import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessComponent from './SuccessComponent';
import Loading from './Loading';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

const LoginForm = () => {
  const [loading,setLoading]=useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { phone, password } = formData;
    const user = { phone, password };
    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", user)).data;
      if (result) {
        setSuccess(true);
        localStorage.setItem("user",JSON.stringify(result));
        console.log(result.name);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success, navigate]);

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && <Loading/>}
      {success ? <SuccessComponent /> : <h1>{error}</h1>}
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-sm">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
