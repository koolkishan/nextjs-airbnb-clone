import { userAppStore } from "airbnb/store/store";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormInput from "../common/FormInput";
export default function AuthModal() {
  const { setAuthModal } = userAppStore();
  const [email, setEmail] = useState("");
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white  pb-4 pt-5">
              <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                <span
                  className="absolute left-5 cursor-pointer text-lg"
                  onClick={() => setAuthModal()}
                >
                  <IoMdClose />
                </span>
                <span>Log in or signup</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl pb-5">Welcome to Airbnb</h3>
                <FormInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
                />
                <button className="bg-airbnb-gradient  py-3 mt-5 w-full text-white text-lg font-medium rounded-md">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
