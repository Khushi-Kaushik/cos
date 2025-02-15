import React, { useState } from "react";
import { useUserContext } from "../provider/UserContextProvider";
import Image from "next/image";
import SignUpImage from "../assets/signupbg.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import apple from "../assets/apple.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignUpAndLoginModal: React.FC = () => {
  const { isSignUpModalOpen, setIsSignUpModalOpen, isLogin, setIsLogin } = useUserContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const closeModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <>
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg max-w-3xl w-full relative overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col items-start justify-center">
                <h2 className="text-2xl font-medium text-[--main] mb-4">
                  {isLogin ? "Hello, Happy to see you again!" : "Create an Account"}
                </h2>
                <p className="text-sm mb-4">
                  {isLogin
                    ? "Log in to your account?"
                    : "Already have an account?"}
                  <button className="underline" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "" : " Log in"}
                  </button>
                </p>
                <form className="space-y-4 w-full">
                  {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium mb-1">User Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Username"
                      />
                    </div>
                  )}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">Email Id</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="w-full px-4 py-2  border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Password"
                    />
                    
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                      className="absolute right-3 top-[70%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {isPasswordVisible ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <a href="#" className="text-[#000] underline text-sm pt-10">Forgot Password?</a>
                  {!isLogin && (
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 border rounded" />
                    <span className="text-sm">
                      By creating an account, you agree to our{" "}
                      <a href="#" className="text-[--main] underline">
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[--main] underline">
                        Privacy Policy
                      </a>
                    </span>
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-[--main] text-white"
                    >
                      {isLogin ? "Log in" : "Create an Account"}
                    </button>
                  </div>
                </form>
                <div className="w-full border-b border-gray-200 mt-8"></div>
                <p className="text-center text-sm mt-4">Or continue with</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <button className="px-4 py-2 border border-black text-[10px] flex items-center gap-2 hover:bg-gray-100">
                    <Image src={google} alt="Google" width={20} height={20} />
                    Google
                  </button>
                  <button className="px-4 py-2 border border-black text-[10px] flex items-center gap-2 hover:bg-gray-100">
                    <Image src={facebook} alt="Facebook" width={20} height={20} />
                    Facebook
                  </button>
                  <button className="px-4 py-2 border border-black text-[10px] flex items-center gap-2 hover:bg-gray-100">
                    <Image src={apple} alt="Apple" width={24} height={24} />
                    Apple
                  </button>
                </div>

                <p className="text-sm mt-4">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button className="underline" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign up here" : "Log in"}
                  </button>
                </p>
                

              </div>
              {/* Image Section */}
              <div className="hidden md:block">
                <Image
                  src={SignUpImage}
                  alt="Fashion Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpAndLoginModal;
