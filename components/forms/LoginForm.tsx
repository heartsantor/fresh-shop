import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="space-y-4">
      {/* Email Input */}
      <div>
        <label className="block text-[18px] font-questrial font-medium text-gray-100">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-[18px] font-questrial font-medium text-gray-100 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
            aria-label="Toggle password visibility"
          >
            {passwordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-sm text-orange-500 hover:underline">
          Forgot Password
        </a>
      </div>

      {/* Login Button */}
      <button className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition mt-2">
        Login
      </button>

      {/* Social Sign-In */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">Or Sign in with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex space-x-4">
        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-green-10 transition">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4818_9853)">
              <g clip-path="url(#clip1_4818_9853)">
                <path
                  d="M20.0399 8.82782C20.1274 8.82782 20.1984 8.89881 20.1984 8.98637V10.651C20.1984 11.274 20.1406 11.8832 20.0296 12.4741C19.171 17.0643 15.1271 20.5332 10.2799 20.4997C4.84108 20.4623 0.488349 16.0677 0.500391 10.6288C0.512356 5.19961 4.91741 0.801941 10.3494 0.801941C13.0107 0.801941 15.4253 1.85771 17.1981 3.57267C17.2621 3.63458 17.2638 3.73661 17.2008 3.79955L14.8458 6.15451C14.7852 6.21514 14.6872 6.21672 14.6251 6.15758C13.5124 5.09847 12.007 4.44824 10.3494 4.44824C6.92642 4.44824 4.17004 7.18504 4.1468 10.6079C4.12345 14.0533 6.90949 16.8537 10.3494 16.8537C13.1404 16.8537 15.501 15.0099 16.2794 12.4741H10.5079C10.4204 12.4741 10.3494 12.4031 10.3494 12.3156V8.98633C10.3494 8.89877 10.4204 8.82779 10.5079 8.82779H20.0399V8.82782Z"
                  fill="#2196F3"
                />
                <path
                  d="M20.0392 8.82782H18.8502C18.9377 8.82782 19.0087 8.8988 19.0087 8.98637V10.651C19.0087 11.274 18.9508 11.8832 18.8398 12.4741C18.0207 16.8532 14.3025 20.2116 9.75354 20.4822C9.92759 20.4925 10.1028 20.4985 10.2792 20.4997C15.1264 20.5332 19.1703 17.0642 20.0289 12.4741C20.1398 11.8832 20.1977 11.274 20.1977 10.651V8.98633C20.1977 8.8988 20.1267 8.82782 20.0392 8.82782Z"
                  fill="#1E88E5"
                />
                <path
                  d="M4.71543 8.05337L1.72424 5.89212C3.40235 2.85696 6.63606 0.801941 10.3494 0.801941C13.0107 0.801941 15.4253 1.85771 17.1981 3.57267C17.2621 3.63458 17.2637 3.73661 17.2008 3.79955L14.8458 6.15451C14.7853 6.21502 14.6873 6.21691 14.6254 6.15789C13.5127 5.09858 12.0071 4.44828 10.3494 4.44828C7.85127 4.44828 5.69794 5.92502 4.71543 8.05337Z"
                  fill="#F44336"
                />
                <path
                  d="M3.85132 7.42949L4.71484 8.0534C5.61164 6.11075 7.48403 4.71165 9.70353 4.48216C9.72023 4.48035 9.73627 4.47816 9.75327 4.47654C9.55795 4.458 9.36001 4.4483 9.15979 4.4483C6.9031 4.4483 4.93637 5.638 3.85132 7.42949Z"
                  fill="#E53935"
                />
                <path
                  d="M16.0088 3.57267C16.0728 3.63458 16.0745 3.73661 16.0115 3.79959L14.1001 5.71103C14.2832 5.8503 14.4585 5.99927 14.6248 6.15762C14.6869 6.21675 14.7849 6.21518 14.8455 6.15454L17.2005 3.79959C17.2635 3.73661 17.2618 3.63462 17.1978 3.57267C15.425 1.85771 13.0104 0.801941 10.3491 0.801941C10.1494 0.801941 9.95127 0.808597 9.75452 0.820331C12.1798 0.964796 14.369 1.98636 16.0088 3.57267Z"
                  fill="#E53935"
                />
                <path
                  d="M17.5736 17.3444C15.775 19.2852 13.2036 20.5 10.3488 20.5C6.49278 20.5 3.15442 18.2841 1.53772 15.0559L4.5915 12.9632C5.50788 15.2434 7.74046 16.8537 10.3488 16.8537C11.9856 16.8537 13.4743 16.2195 14.5825 15.1835L17.5736 17.3444Z"
                  fill="#4CAF50"
                />
                <path
                  d="M4.59153 12.9632L3.69104 13.5803C4.73692 15.5287 6.79364 16.8536 9.15975 16.8536C9.35985 16.8536 9.55764 16.8438 9.75289 16.8253C7.40416 16.6014 5.43724 15.0676 4.59153 12.9632Z"
                  fill="#43A047"
                />
                <path
                  d="M10.3491 20.5C13.204 20.5 15.7754 19.2853 17.574 17.3444L16.8414 16.8151C15.1526 18.9169 12.6191 20.3112 9.7561 20.4821C9.95231 20.4938 10.15 20.5 10.3491 20.5Z"
                  fill="#43A047"
                />
                <path
                  d="M4.14634 10.651C4.14634 11.4682 4.30446 12.2487 4.59181 12.9633L1.538 15.0559C0.873763 13.7306 0.5 12.2344 0.5 10.651C0.5 8.92496 0.943899 7.30272 1.7239 5.89215L4.71508 8.0534C4.35005 8.84328 4.14634 9.72358 4.14634 10.651Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.69129 13.5803L4.59178 12.9632C4.30443 12.2486 4.14631 11.4682 4.14631 10.651C4.14631 9.72354 4.35002 8.84324 4.71505 8.05336L3.85153 7.42944C3.29079 8.35529 2.96535 9.44173 2.95742 10.608C2.95011 11.6834 3.21661 12.6961 3.69129 13.5803Z"
                  fill="#FFB300"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4818_9853">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
              <clipPath id="clip1_4818_9853">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5 0.801941)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>Google</span>
        </button>
        <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-green-10 transition">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4818_9870)">
              <path
                d="M10 20.5001C15.5228 20.5001 20 16.0229 20 10.5001C20 4.97721 15.5228 0.500061 10 0.500061C4.47715 0.500061 0 4.97721 0 10.5001C0 16.0229 4.47715 20.5001 10 20.5001Z"
                fill="#3C5A9A"
              />
              <path
                d="M13.2516 3.56946H11.0364C9.72179 3.56946 8.25958 4.12236 8.25958 6.02793C8.266 6.6919 8.25958 7.32779 8.25958 8.04345H6.73877V10.4635H8.30665V17.4305H11.1877V10.4175H13.0893L13.2614 8.03666H11.1381C11.1381 8.03666 11.1428 6.97754 11.1381 6.66997C11.1381 5.91693 11.9216 5.96005 11.9688 5.96005C12.3416 5.96005 13.0666 5.96114 13.2527 5.96005V3.56946H13.2516Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4818_9870">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>Facebook</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
