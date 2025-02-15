"use client";
import React from "react";
import Logo from "../components/comingSoon/LogoSection";
import MainHeader from "../components/comingSoon/MainHeader";
import AboutSection from "../components/comingSoon/AboutSection";
import Sustainability from "../components/comingSoon/sustainability";
import Brands from "../components/comingSoon/Brands";
import MemberSignup from "../components/comingSoon/SignUp";
import WhyMember from "../components/comingSoon/whyMember";
import Footer from "../components/comingSoon/Footer";
import ShowImage from "../components/comingSoon/showImage";
import designer from '../assets/designer.svg';
import shoe from '../assets/image2.svg';

export function ComingSoon() {
  return (
    <div>
      <div className="md:grid grid-cols-1 w-[1280px] hidden md:grid-cols-2 gap-4 p-2 md:p-2 container mx-auto">
        {/* Left Column */}
        <div className="space-y-4">
          <Logo />
          <MainHeader />
          <AboutSection />
          <ShowImage image={designer} />
          <Brands />
          <Sustainability />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <MemberSignup />
          <WhyMember />
          <ShowImage image={shoe} />
          <Footer />
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:p-8 container mx-auto">
        {/* Left Column */}
        <div className="space-y-2">
          <Logo />
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <MainHeader />
            </div>
            <div className="w-full">
              <AboutSection />
            </div>
          </div>
          <MemberSignup />
          <ShowImage image={designer} />
          <WhyMember />
          <Sustainability />
          <div className="grid grid-cols-2 gap-2">
            <Brands />
            <ShowImage image={shoe} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
