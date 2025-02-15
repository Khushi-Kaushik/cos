import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.png";
import { auth } from "../../firebase";
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,  OAuthProvider, fetchSignInMethodsForEmail } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { FaApple, FaGoogle } from "react-icons/fa";


const MemberSignup = () => {
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
      const scriptURL = "https://script.google.com/macros/s/AKfycbyN_XCxZXFjHSDXz6FI1Lxk18pfoz7E0vExf8D6PiACD1H3YBDFBQus8C96COqirEH8EQ/exec";
      const formData = { firstName, lastName, email };
  
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: 'no-cors',
        body: new URLSearchParams(formData).toString(),
      });
  
      // Check if the response was successful
      if (response) {
        toast.success("Account created successfully");
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
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

    // Retrieve first name and last name from the Google profile
    const firstName = result.user.displayName?.split(" ")[0] ?? "";
    const lastName = result.user.displayName?.split(" ")[1] ?? "";

    // Prepare form data directly from retrieved values
    const formData = { firstName, lastName, email };
    const scriptURL = "https://script.google.com/macros/s/AKfycbyN_XCxZXFjHSDXz6FI1Lxk18pfoz7E0vExf8D6PiACD1H3YBDFBQus8C96COqirEH8EQ/exec";

    // Send data to Google Sheets
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      mode: 'no-cors',
      body: new URLSearchParams(formData).toString(),
    });

    if (response) {
      toast.success("Google login successful");
      console.log("Google login success:", result.user);
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
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
    <Card className=" p-2 bg-[--main] h-auto text-white rounded-[20px] space-y-10">
        <>
          <CardHeader className="text-start">
            <CardTitle className="md:text-[45px] uppercase text-3xl font-semibold" style={{
              fontFamily: "Hanken Grotesk"
            }}>
              Become a Member
            </CardTitle>
          <CardDescription className="text-white text-base md:flex hidden">
          Join now for exclusive updates and early access to our <br />curated pre-loved fashion treasures.
          </CardDescription>
          <CardDescription className="text-white text-sm md:hidden flex">
          Be the first to know! Join now for exclusive updates and early access to our curated pre-loved fashion treasures.

          </CardDescription>

          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-normal rounded-[5px] py-4 md:py-6  px-2"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-normal rounded-[5px] py-4 md:py-6 px-2"
                />
              </div>
              <Input
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black placeholder:text-[--main] text-sm md:text-lg placeholder:font-normal rounded-[5px] py-4 md:py-6 px-2"
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
                  <span className="underline text-[#470100] font-[poppins] italic">Terms & Conditions</span>
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
                  className=" text-black bg-white  border-none items-center justify-center space-x-2 px-4 py-2 md:py-6"
                >
                <Image src={google} alt="" className="h-6 w-6" height="100"  width="100" />
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
                  className="text-black bg-white border-none items-center justify-center space-x-2 px-4 py-2 md:py-6"
                >
                 <Image src={apple} alt="" className="h-6 w-6" height={100} width={100}/>
                 
                  <span className="text-xs md:text-base">Apple</span>
                </Button>
              </div>
        
          </CardContent>
        </>
  
    </Card>
  );
};

export default MemberSignup;
