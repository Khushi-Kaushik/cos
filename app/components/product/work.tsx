import { Poppins } from "next/font/google";
import img2 from "../../assets/product/img2.svg";
import Image from "next/image";

export default function AuthenticationSteps() {
    const steps = [
      {
        title: "Select an Authenticator",
        description:
          "Sellers listing high-value items can choose from trusted partners like LegitGrails or RealAuthentication.",
      },
      {
        title: "Obtain Authentication",
        description:
          "The seller uploads detailed images of the item on the selected authenticator’s site. The authenticator evaluates the item for brand authenticity, quality, and condition.",
      },
      {
        title: "Receive Certificate with QR Code",
        description:
          "The authenticator issues a certificate with a unique QR code containing the item’s details, images, and confirmation of the item’s authenticity.",
      },
      {
        title: "Upload to COS",
        description:
          "Sellers upload the QR code and authentication details when listing the item on Cycle of Samsara.",
      },
      {
        title: "Display on Listings",
        description:
          "Verified items display an 'AUTHENTIC' tag for buyer assurance. Non-authenticated items include a disclaimer stating they are not verified by COS.",
      },
      {
        title: "Receive Certificate with QR Code",
        description:
          "Buyers can scan the QR code on the product page to review the item’s authentication details, images, and report.",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-gray-300 bg-gray-100 rounded-xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col h-full ${index >= 3 ? 'border-t border-gray-500' : ''}`}
            >
              <h2 style={{ fontFamily: "Poppins" }} className="text-5xl font-medium mb-2">
                {`0${index + 1}.`}
              </h2>
              <h3 className="text-3xl font-medium mb-2 max-w-xs">{step.title}</h3>
              <div className="flex-grow flex flex-col justify-between">
                <p className="text-md max-w-sm mt-4">{step.description}</p>
              </div>
              <div className="mt-8 p-4 bg-white rounded-lg w-full flex justify-center">
                <Image src={img2} alt="Authentication Steps" className="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  