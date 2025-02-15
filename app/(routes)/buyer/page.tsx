"use client"
import { useState } from 'react';
import verification from '../../assets/sellerActive.png';
import Unverified from '../../assets/sellerUnactive.png';
import sellerSuccess from '../../assets/sellerSuccess.png';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export default function SellerPage() {
    const [step, setStep] = useState(1);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    const handleNext = () => {
        if (step === 1) {
            setShowVerificationModal(true); 
        }
    };

    const handleVerifyNumber = () => {
        setShowVerificationModal(false); 
        setShowThankYouModal(true); 
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-8">
            <div className="w-full max-w-2xl bg-white rounded-lg px-6">
                <div className="flex items-start justify-center gap-32 mb-8">
                    <div className="flex flex-col items-center">
                        <div className={`rounded-full w-14 h-14 flex items-center justify-center ${step === 1 ? 'bg-[#A50705]' : 'bg-[#FFF2F2]'}`}>
                            <svg className={`w-6 h-6 ${step === 1 ? 'text-white' : 'text-[#A50705]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <span className="mt-2 text-sm font-medium">Information</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={`rounded-full w-14 h-14 flex items-center justify-center ${step === 2 ? 'bg-[#A50705]' : 'bg-[#FFF2F2]'}`}>
                            <Image src={step === 1 ? Unverified : verification} alt='verification' className='w-6 h-6' />
                        </div>
                        <span className="mt-2 text-sm font-medium">Verification</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-6 font-[Poppins] text-start">Fill in the basic information about you</h3>
                    {step === 1 && (
                        <>
                            <form className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="date-of-birth" className="text-sm font-medium">Date Of Birth</label>
                                    <input
                                        type="date"
                                        id="date-of-birth"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone-number" className="text-sm font-medium">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phone-number"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                                <div className="col-span-2 flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="p-3 bg-[#F4F4F4] rounded w-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        className="p-3 bg-[#F4F4F4] rounded"
                                    />
                                </div>
                            </form>
                            <button
                                onClick={handleNext} 
                                className="mt-16 w-48 mx-auto block text-[#FFFFFF] bg-[#A50705] py-2 rounded-full hover:bg-red-600"
                            >
                                REGISTER ME <span className='ml-4'>→</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {showVerificationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center pt-20 justify-center">
                    <div className="bg-white p-8 relative rounded-lg max-w-sm h-[90vh] text-center">
                        <div className="absolute top-4 right-4 bg-[#D9D9D9] rounded-full p-2">
                            <FaTimes className='text-black text-xl cursor-pointer' onClick={() => setShowVerificationModal(false)} />
                        </div>

                        <h3 className="text-xl pt-24 text-black font-semibold mb-10">A verification code has been sent on the number</h3>
                        <input
                            type="text"
                            placeholder="Enter the code here"
                            className="p-3 pl-16 text-xs border border-[#D9D9D9] rounded-full w-80 mb-4"
                        />
                        <p className="text-xs text-gray-400 mt-4 mb-10">
                            Your contact number is never shared with external parties nor do we use it to spam you in any way.
                        </p>
                        <button
                            onClick={handleVerifyNumber} 
                            className="w-48 mx-auto block text-[#FFFFFF] bg-[#A50705] py-2 rounded-full hover:bg-red-600"
                        >
                            VERIFY MY NUMBER
                        </button>
                    </div>
                </div>
            )}
            {showThankYouModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 relative rounded-lg max-w-md w-full text-center">
                        <div className="absolute top-4 right-4 bg-[#D9D9D9] rounded-full p-2">
                            <FaTimes className='text-black text-xl cursor-pointer' onClick={() => setShowThankYouModal(false)} />
                        </div>

                        <div className="w-40 h-40 bg-[#FFF2F2] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Image src={sellerSuccess} alt='verification' className='w-32 h-32' />
                        </div>
                        <h3 className="text-2xl text-[#A50705] font-medium mb-2">Thank you for registering
                        as a member with COS :)</h3>
                    </div>
                </div>
            )}
        </div>
    );
}
