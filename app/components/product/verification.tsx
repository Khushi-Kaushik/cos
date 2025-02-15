import { Hanken_Grotesk } from "next/font/google";
import { FaUsers, FaHandHoldingHeart, FaHandshake } from "react-icons/fa"; // For the icons

export default function ItemVerificationBenefits() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      <h2 style={{fontFamily: "Hanken Grotesk"}} className="text-5xl text-center font-semibold mb-12">Why Use Item Verification?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-80">
        <div className="bg-white p-6 rounded-2xl border border-gray-400 flex flex-col items-center">
          <FaUsers className="text-4xl text-[#A50705] mb-4" />
          <h3 className="text-2xl font-semibold text-[#A50705] mb-4">Protect Buyers</h3>
          <p className="text-center text-gray-600">
            Ensure items are genuine, reducing the risk of counterfeit purchases.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg flex flex-col items-center border border-gray-400">
  <div className="flex items-center mb-4 ">
    <FaHandHoldingHeart className="text-4xl text-[#A50705] mr-4" />
    <h3 className="text-2xl font-semibold text-[#A50705]">Boost Seller Trust</h3>
  </div>
  <p className="text-center text-gray-600">
    Increase buyer confidence and improve sales by verifying high-value items.
  </p>
</div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaHandshake className="text-4xl text-[#A50705] mb-4" />
          <h3 className="text-2xl font-semibold text-[#A50705] mb-4">Industry-Trusted Verification</h3>
          <p className="text-center text-gray-600">
            Use globally recognized authenticators for professional evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}
