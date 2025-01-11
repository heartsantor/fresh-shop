"use client";

import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {isLogin ? (
          <>
            <h2 className="text-[32px] font-rubik font-bold mb-6 text-black text-center">
              Login
            </h2>
            <LoginForm />
            <p className="text-sm text-gray-600 mt-6 text-center">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-orange-500 hover:underline"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-[32px] font-rubik font-bold mb-6 text-black text-center">
              Register
            </h2>
            <RegisterForm />
            <p className="text-sm text-gray-600 mt-6 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-orange-500 hover:underline"
              >
                Log In
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
