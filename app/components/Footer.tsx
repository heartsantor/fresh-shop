"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F4F6F6] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-4 md:py-9">
          {/* Left Section */}
          <div className="col-span-4 flex flex-col items-start space-y-2">
            {/* Logo */}
            <div className="h-full flex flex-col items-center justify-between space-x-2">
              <Image
                src="/images/logo-header.png"
                alt="Fresh Harvest Logo"
                width={296}
                height={51}
              />
            </div>
            {/* App Downloads */}
            <div className="hidden md:block">
              <span className="block text-gray-100 text-[12px] font-medium font-rubik mb-2">
                Download App:
              </span>
              <div className="flex space-x-2">
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={138}
                  height={40}
                />
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={138}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Right Section: Contact Us */}
          <div className="col-span-8 grid grid-cols-12 gap-8 ">
            <div className="col-span-3 flex flex-col items-start space-y-2">
              <h4 className="text-gray-100 font-medium mb-4">Quick links 1</h4>
              <ul className="space-y-2 text-gray-600 text-[14px] font-normal font-questrial">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Detail Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3 flex flex-col items-start space-y-2">
              <h4 className="text-gray-900 font-medium mb-4">Quick links 2</h4>
              <ul className="space-y-2 text-gray-100 text-[14px] font-normal font-questrial">
                <li>
                  <a href="#" className="hover:underline">
                    Favorites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign in
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 flex flex-col items-start space-y-2">
              <h4 className="text-gray-900 font-medium mb-4">Contact us</h4>
              <ul className="space-y-2 text-gray-100 text-[14px] font-normal font-questrial">
                <li className="flex items-center space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5625 17.5C14.8681 17.5 13.184 17.0833 11.5104 16.25C9.83681 15.4167 8.33333 14.3333 7 13C5.66667 11.6667 4.58333 10.1632 3.75 8.48958C2.91667 6.81597 2.5 5.13194 2.5 3.4375C2.5 3.16964 2.58928 2.94642 2.76785 2.76785C2.94642 2.58928 3.16964 2.5 3.4375 2.5H6.35417C6.54321 2.5 6.712 2.56597 6.86054 2.69792C7.00907 2.82986 7.10417 3.00694 7.14583 3.22917L7.70833 5.85417C7.73611 6.04861 7.73264 6.22569 7.69792 6.38542C7.66319 6.54514 7.59028 6.68056 7.47917 6.79167L5.39583 8.89583C6.17361 10.1875 7.04514 11.3125 8.01042 12.2708C8.97569 13.2292 10.0694 14.0417 11.2917 14.7083L13.2708 12.6667C13.4097 12.5139 13.5694 12.4062 13.75 12.3438C13.9306 12.2812 14.1111 12.2708 14.2917 12.3125L16.7708 12.8542C16.9835 12.901 17.1582 13.0065 17.2949 13.1706C17.4316 13.3346 17.5 13.5278 17.5 13.75V16.5625C17.5 16.8304 17.4107 17.0536 17.2321 17.2321C17.0536 17.4107 16.8304 17.5 16.5625 17.5ZM4.77083 7.75L6.45833 6.04167L5.97917 3.75H3.75C3.75 4.29167 3.83333 4.88542 4 5.53125C4.16667 6.17708 4.42361 6.91667 4.77083 7.75ZM16.25 16.25V14.0208L14.1042 13.5833L12.4583 15.3125C13.0278 15.5764 13.6458 15.7917 14.3125 15.9583C14.9792 16.125 15.625 16.2222 16.25 16.25Z"
                      fill="#749B3F"
                    />
                  </svg>

                  <span>1234 5678 90</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91675 16.6668C2.58341 16.6668 2.29175 16.5418 2.04175 16.2918C1.79175 16.0418 1.66675 15.7502 1.66675 15.4168V4.5835C1.66675 4.25016 1.79175 3.9585 2.04175 3.7085C2.29175 3.4585 2.58341 3.3335 2.91675 3.3335H17.0834C17.4167 3.3335 17.7084 3.4585 17.9584 3.7085C18.2084 3.9585 18.3334 4.25016 18.3334 4.5835V15.4168C18.3334 15.7502 18.2084 16.0418 17.9584 16.2918C17.7084 16.5418 17.4167 16.6668 17.0834 16.6668H2.91675ZM17.0834 5.72933L10.3334 10.146C10.2779 10.1738 10.2258 10.1981 10.1772 10.2189C10.1286 10.2397 10.0695 10.2502 10.0001 10.2502C9.93064 10.2502 9.87161 10.2397 9.823 10.2189C9.77439 10.1981 9.7223 10.1738 9.66675 10.146L2.91675 5.72933V15.4168H17.0834V5.72933ZM10.0001 9.12516L17.0001 4.5835H3.02091L10.0001 9.12516ZM2.91675 5.87516V5.05606V5.07131V4.5835V5.06266V5.04366V5.87516Z"
                      fill="#749B3F"
                    />
                  </svg>

                  <span className="break-words ">Freshharvests@gmail.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    className="min-w-6"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0018 9.7915C10.4033 9.7915 10.7464 9.64853 11.0312 9.36257C11.3159 9.07662 11.4583 8.73287 11.4583 8.33132C11.4583 7.92978 11.3153 7.58664 11.0293 7.30192C10.7434 7.0172 10.3996 6.87484 9.99806 6.87484C9.59652 6.87484 9.25339 7.01782 8.96867 7.30378C8.68395 7.58972 8.54158 7.93347 8.54158 8.33503C8.54158 8.73657 8.68456 9.0797 8.97052 9.36442C9.25647 9.64914 9.60022 9.7915 10.0018 9.7915ZM9.99992 16.6873C11.8471 15.0068 13.2117 13.4825 14.0937 12.1144C14.9756 10.7464 15.4166 9.5415 15.4166 8.49984C15.4166 6.86387 14.8937 5.52432 13.848 4.48119C12.8023 3.43807 11.5196 2.9165 9.99992 2.9165C8.48024 2.9165 7.19754 3.43807 6.15183 4.48119C5.10611 5.52432 4.58325 6.86387 4.58325 8.49984C4.58325 9.5415 5.03464 10.7464 5.93742 12.1144C6.8402 13.4825 8.19436 15.0068 9.99992 16.6873ZM10.0103 18.0832C9.92006 18.0832 9.83325 18.0693 9.74992 18.0415C9.66658 18.0137 9.5902 17.9721 9.52075 17.9165C7.45131 16.0971 5.9027 14.4103 4.87492 12.8562C3.84714 11.3021 3.33325 9.84999 3.33325 8.49984C3.33325 6.4165 4.00339 4.75678 5.34367 3.52067C6.68395 2.28456 8.23603 1.6665 9.99992 1.6665C11.7638 1.6665 13.3159 2.28456 14.6562 3.52067C15.9964 4.75678 16.6666 6.4165 16.6666 8.49984C16.6666 9.84706 16.1527 11.2984 15.1249 12.854C14.0971 14.4096 12.5485 16.0971 10.4791 17.9165C10.4096 17.9721 10.3367 18.0137 10.2603 18.0415C10.1839 18.0693 10.1006 18.0832 10.0103 18.0832Z"
                      fill="#749B3F"
                    />
                  </svg>

                  <span>Tanjung Sari Street, Pontianak, Indonesia</span>
                </li>
              </ul>
              {/* Accepted Payment Methods */}
              <div className="!mt-6 hidden md:block">
                <h5 className="text-gray-900 font-medium font-rubik text-[12px] mb-2">
                  Accepted Payment Methods:
                </h5>
                <div className="flex space-x-2">
                  <Image
                    src="/images/visa.png"
                    alt="Visa"
                    width={69}
                    height={0}
                  />
                  <Image
                    src="/images/paypal.png"
                    alt="PayPal"
                    width={69}
                    height={0}
                  />
                  <Image
                    src="/images/apple-pay.png"
                    alt="Apple Pay"
                    width={69}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden px-4">
          <div className="">
            <h5 className="text-gray-900 font-medium font-rubik text-[12px] mb-2">
              Accepted Payment Methods:
            </h5>
            <div className="flex space-x-2">
              <Image src="/images/visa.png" alt="Visa" width={69} height={0} />
              <Image
                src="/images/paypal.png"
                alt="PayPal"
                width={69}
                height={0}
              />
              <Image
                src="/images/apple-pay.png"
                alt="Apple Pay"
                width={69}
                height={0}
              />
            </div>
          </div>
          <div className="block md:hidden my-4">
            <span className="block text-gray-100 text-[12px] font-medium font-rubik mb-2">
              Download App:
            </span>
            <div className="flex space-x-2">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={138}
                height={40}
              />
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={138}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D9D9D9] py-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center  py-4 md:py-0">
            {/* Copyright */}
            <p className="text-gray-100 text-[12px] font-rubik font-medium">
              © Copyright 2024, All Rights Reserved by Banana Studio
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
                aria-label="Twitter"
              >
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0939 1.55219C12.615 1.76502 12.1096 1.89805 11.5775 1.97786C12.1096 1.65861 12.5352 1.15312 12.7215 0.541213C12.216 0.833863 11.6573 1.0467 11.0454 1.17972C10.5665 0.674236 9.87478 0.35498 9.12985 0.35498C7.6932 0.35498 6.5226 1.52558 6.5226 2.96223C6.5226 3.17507 6.5492 3.3613 6.60241 3.54753C4.44744 3.44111 2.50531 2.40353 1.20168 0.807259C0.988845 1.20633 0.855822 1.632 0.855822 2.11088C0.855822 3.01544 1.3081 3.81358 2.02642 4.29246C1.60075 4.26586 1.20168 4.15944 0.829218 3.9732V3.99981C0.829218 5.27683 1.73377 6.34101 2.93098 6.58045C2.71814 6.63366 2.4787 6.66027 2.23926 6.66027C2.07963 6.66027 1.8934 6.63366 1.73377 6.60706C2.07963 7.64464 3.0374 8.41617 4.1814 8.41617C3.27684 9.10789 2.15945 9.53356 0.935636 9.53356C0.722799 9.53356 0.509963 9.53356 0.32373 9.50696C1.49433 10.2519 2.85117 10.6776 4.34102 10.6776C9.15645 10.6776 11.7903 6.68687 11.7903 3.22828C11.7903 3.12186 11.7903 2.98883 11.7903 2.88242C12.2958 2.53656 12.7481 2.08428 13.0939 1.55219Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.23865 14.2042V7.85731H0.102783V5.38379H2.23865V3.55964C2.23865 1.44274 3.53159 0.290039 5.42001 0.290039C6.32459 0.290039 7.10203 0.357387 7.32859 0.387489V2.59978L6.01887 2.60038C4.99183 2.60038 4.79297 3.08841 4.79297 3.80456V5.38379H7.24235L6.92343 7.85731H4.79297V14.2042H2.23865Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.42919 1.65381C10.4963 1.65381 10.7411 1.66155 11.5577 1.69879C12.0486 1.7048 12.535 1.79495 12.9955 1.96533C13.3294 2.09412 13.6327 2.29141 13.8858 2.5445C14.1389 2.79759 14.3362 3.10088 14.465 3.43483C14.6353 3.89533 14.7255 4.38164 14.7315 4.87261C14.7684 5.6892 14.7765 5.934 14.7765 8.00109C14.7765 10.0682 14.7687 10.313 14.7315 11.1296C14.7255 11.6205 14.6353 12.1069 14.465 12.5674C14.3362 12.9013 14.1389 13.2046 13.8858 13.4577C13.6327 13.7108 13.3294 13.9081 12.9955 14.0369C12.535 14.2072 12.0486 14.2974 11.5577 14.3034C10.7414 14.3403 10.4967 14.3484 8.42919 14.3484C6.36173 14.3484 6.11693 14.3406 5.30071 14.3034C4.80974 14.2974 4.32343 14.2072 3.86292 14.0369C3.52897 13.9081 3.22569 13.7108 2.9726 13.4577C2.71951 13.2046 2.52222 12.9013 2.39343 12.5674C2.22305 12.1069 2.1329 11.6205 2.12689 11.1296C2.09002 10.313 2.08191 10.0682 2.08191 8.00109C2.08191 5.934 2.08965 5.6892 2.12689 4.87261C2.1329 4.38164 2.22305 3.89533 2.39343 3.43483C2.52222 3.10088 2.71951 2.79759 2.9726 2.5445C3.22569 2.29141 3.52897 2.09412 3.86292 1.96533C4.32343 1.79495 4.80974 1.7048 5.30071 1.69879C6.1173 1.66192 6.36209 1.65381 8.42919 1.65381ZM8.42919 0.258789C6.32781 0.258789 6.06311 0.267637 5.2373 0.305241C4.59474 0.318021 3.959 0.439685 3.35712 0.665056C2.8408 0.859587 2.37315 1.16443 1.9868 1.55833C1.59255 1.94483 1.28744 2.41274 1.09279 2.92939C0.867415 3.53127 0.745751 4.16701 0.73297 4.80957C0.696104 5.63464 0.687256 5.89934 0.687256 8.00072C0.687256 10.1021 0.696104 10.3668 0.733707 11.1926C0.746488 11.8352 0.868152 12.4709 1.09352 13.0728C1.28796 13.5894 1.59281 14.0573 1.9868 14.4439C2.37337 14.8378 2.84128 15.1427 3.35786 15.3371C3.95973 15.5625 4.59548 15.6842 5.23804 15.6969C6.06385 15.7338 6.32744 15.7434 8.42993 15.7434C10.5324 15.7434 10.796 15.7345 11.6218 15.6969C12.2644 15.6842 12.9001 15.5625 13.502 15.3371C14.0161 15.1378 14.483 14.8334 14.8728 14.4434C15.2626 14.0534 15.5666 13.5863 15.7656 13.0721C15.991 12.4702 16.1126 11.8344 16.1254 11.1919C16.1623 10.3668 16.1711 10.1021 16.1711 8.00072C16.1711 5.89934 16.1623 5.63464 16.1247 4.80883C16.1119 4.16627 15.9902 3.53053 15.7649 2.92865C15.5704 2.41207 15.2656 1.94416 14.8716 1.55759C14.485 1.16361 14.0171 0.858755 13.5005 0.664319C12.8986 0.438948 12.2629 0.317284 11.6203 0.304503C10.7953 0.267637 10.5306 0.258789 8.42919 0.258789Z"
                    fill="white"
                  />
                  <path
                    d="M8.43075 4.02637C7.64444 4.02637 6.87578 4.25954 6.22199 4.69639C5.56819 5.13324 5.05862 5.75415 4.75771 6.48061C4.4568 7.20707 4.37807 8.00645 4.53147 8.77765C4.68487 9.54885 5.06352 10.2572 5.61953 10.8133C6.17553 11.3693 6.88393 11.7479 7.65513 11.9013C8.42634 12.0547 9.22571 11.976 9.95217 11.6751C10.6786 11.3742 11.2995 10.8646 11.7364 10.2108C12.1732 9.557 12.4064 8.78835 12.4064 8.00204C12.4064 6.94762 11.9876 5.9364 11.242 5.19081C10.4964 4.44523 9.48516 4.02637 8.43075 4.02637ZM8.43075 10.5827C7.92035 10.5827 7.4214 10.4313 6.99702 10.1478C6.57263 9.8642 6.24187 9.46116 6.04654 8.98961C5.85122 8.51805 5.80011 7.99917 5.89969 7.49858C5.99926 6.99798 6.24505 6.53815 6.60596 6.17724C6.96687 5.81633 7.42669 5.57055 7.92729 5.47098C8.42789 5.3714 8.94677 5.42251 9.41832 5.61783C9.88987 5.81315 10.2929 6.14392 10.5765 6.56831C10.86 6.99269 11.0114 7.49163 11.0114 8.00204C11.0114 8.68646 10.7395 9.34286 10.2555 9.82683C9.77157 10.3108 9.11518 10.5827 8.43075 10.5827Z"
                    fill="white"
                  />
                  <path
                    d="M12.5628 4.79752C13.0759 4.79752 13.4919 4.38158 13.4919 3.86849C13.4919 3.35539 13.0759 2.93945 12.5628 2.93945C12.0497 2.93945 11.6338 3.35539 11.6338 3.86849C11.6338 4.38158 12.0497 4.79752 12.5628 4.79752Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
