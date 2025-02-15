"use client";
import { auth } from '@/app/firebase';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

const JoinCycleSection: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
   
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      if (!agreed) {
        toast.error("You must agree to the terms and conditions.");
        return;
      }
    
      setLoading(true);
    
      try {
        // Attempt to create the user account
        await createUserWithEmailAndPassword(auth, email, "password");
    
        // Send data to Google Sheets
        const scriptURL = "https://script.google.com/macros/s/AKfycbywv68K76uhAZNVYn3Ww2AT0PH6zvM8x9WrOhKt94HpjyWTaVIhBhmfldtJaAD9qMa7/exec";
        const formData = { firstName, lastName, email };
    
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });
  
    
        if (response.ok) {
          toast.success("Account created successfully");
          setSuccess(true);
          setFirstName("");
          setLastName("");
          setEmail("");
        } else {
          toast.error("Failed to submit data to Google Sheets.");
          console.error("Failed to submit data");
        }
      } catch (error: any) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email is already in use.");
        } else {
          toast.error("Error creating account.");
          console.error("Error:", error);
        }
      } finally {
        setLoading(false);
      }
    };
  
  // Handle Google login
  const handleGoogleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      // Prompt the user to sign in with Google
      const result = await signInWithPopup(auth, provider);
  
      const email = result.user.email ?? "";
  
      // Check if the user already exists
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      console.log(signInMethods);
      if (signInMethods.length > 0) {
        // User is already registered
        toast.error("User already exists. Please log in with your existing account.");
        return; // Exit the function early
      }
  
      // Set the user's first and last name from their Google profile
      setFirstName(result.user.displayName?.split(" ")[0] ?? "");
      setLastName(result.user.displayName?.split(" ")[1] ?? "");
      setEmail(email);
  
      // Send data to Google Sheets
      const scriptURL = "https://script.google.com/macros/s/AKfycbxT61QKJX9ZIrgfb4ri0LCVuB4U3LKIuLtKeoGskzgk6JcvPHNucLYqzWI5PzxJetNJVQ/exec";
      const formData = { firstName, lastName, email };
      

      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
  
      if (response.ok) {
        toast.success("Google login successful");
        console.log("Google login success:", result.user);
        setSuccess(true);
      } else {
        toast.error("Failed to submit data to Google Sheets.");
        console.error("Failed to submit data");
      }
    } catch (error) {
      toast.error("Google login failed");
      console.error("Google login error:", error);
    }
  };
  
    // Handle Facebook login
    // const handleFacebookLogin = async () => {
    //   const provider = new FacebookAuthProvider();
    //   try {
    //     const result = await signInWithPopup(auth, provider);
    //     console.log("Facebook login success:", result.user);
    //     setSuccess(true);
    //   } catch (error) {
    //     console.error("Facebook login error:", error);
    //   }
    // };
  
    // Handle Apple login
    const handleAppleLogin = async () => {
      const provider = new OAuthProvider("apple.com");
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Apple login success:", result.user);
        setSuccess(true);
      } catch (error) {
        console.error("Apple login error:", error);
      }
    };
  return (
    <section className="bg-gray-100 py-10 px-6 flex justify-center items-center"
    style={{
      fontFamily: 'Hanken Grotesk',
    }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center"
       
        >
          <h2 className="text-[40px] font-medium text-black"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
          >
          
          
            JOIN THE <span className="text-[--main]"
            style={{
              fontFamily: 'Hanken Grotesk',
            }}
            >CYCLE</span>
          </h2>
          <h1 className="text-[64px] font-semibold text-[#5F0201] mt-2"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
          >
            REDUCE, REUSE <br /> & RELOVE
          </h1>
          <div className="mt-6 flex space-x-4 w-full">
            <button className="bg-[--main] text-white w-full py-3 font-semibold  hover:bg-[#5F0201]"
            style={{
              fontFamily: 'Hanken Grotesk',
            }}

            >
              SELL NOW
            </button>
            <button className="bg-[--main] text-white w-full py-3 font-semibold hover:bg-[#5F0201]"
            style={{
              fontFamily: 'Hanken Grotesk',
            }}

            >
              BUY NOW
            </button>
          </div>
        </div>
        
        <Card className=" p-2 bg-[--main] h-auto rounded-none text-white  space-y-10">
        <>
          
          <CardContent className="pt-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-bold rounded-none py-4 md:py-6  px-2"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-bold rounded-none py-4 md:py-6 px-2"
                  required
                />
              </div>
              <Input
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-bold rounded-none py-4 md:py-6 px-2"
                required
              />

              <div className="flex items-center space-x-2 py-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={() => setAgreed(!agreed)}
                  className="text-black bg-white"
                  required
                />
                <label htmlFor="terms" className="text-sm  text-white">
                  I agree to the{" "}
                  <span className="underline text-[#470100] italic">Terms & Conditions</span>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5F0201] text-white py-4 md:py-8 rounded-[5px] text-base md:text-2xl"
                disabled={loading}
              >
                {loading ? <ClipLoader color="#fff" size={20} /> : "Create Account"}
              </Button>

              <div className="text-center pt-2">
                <div className="flex items-center justify-between">
                  <hr className="flex-grow border-gray-900" />
                  <span className="mx-4">or register with</span>
                  <hr className="flex-grow border-gray-900" />
                </div>
              </div>
              </form>
              <div className="flex flex-row justify-center items-center gap-4 pt-8">
                <Button
                  variant="outline"
                  onClick={handleGoogleLogin}
                  className=" text-white bg-transparent rounded-none border-none items-center justify-center space-x-2 px-4 py-2 md:py-6"
                >
                 <FaGoogle className="text-xl md:text-2xl" />
                  <span className="text-xs md:text-base">Google</span>
                </Button>
                {/* <Button
                  variant="outline"
                  onClick={handleFacebookLogin}
                  className="bg-white text-black rounded-lg flex items-center justify-center space-x-2 px-4 py-2 md:py-6"
                >
                  <Image src={facebook} alt="Facebook" className="h-4 w-4 md:h-6 md:w-6" height={500} width={500} />
                  <span className="text-xs md:text-base">Facebook</span>
                </Button> */}
                <Button
                  variant="outline"
                  onClick={handleAppleLogin}
                  className="text-white bg-transparent rounded-lg border-none items-center justify-center space-x-2 px-4 py-2 md:py-6"
                >
                  <FaApple className="text-xl md:text-3xl" />
                 
                  <span className="text-xs md:text-base">Apple</span>
                </Button>
              </div>
        
          </CardContent>
        </>
  
    </Card>
        
      </div>
    </section>
  );
};

export default JoinCycleSection;
