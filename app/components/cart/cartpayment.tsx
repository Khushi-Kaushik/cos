"use client"
import React, { useState } from "react";



const PaymentPage = () => {

    const [activePage, setActivePage] = useState("home"); 
    
      const handleNavigation = (page: string) => {
        setActivePage(page); 
      };
  return (
    
    <div className="min-h-screen bg-white p-4">
        
        
              {/* Conditional rendering of the components based on activePage */}
              <div>
        

      <main className="flex justify-center items-center h-56">
        <h2 className="text-4xl text-black">PAYMENT GATEWAY HERE</h2>
      </main>
      </div>
              
              </div>
  );
};

export default PaymentPage;