import Image from 'next/image'
import React from 'react'
import Image1 from "../../assets/community/image1.png";
import Image2 from "../../assets/community/image2.png";
import Image3 from "../../assets/community/image3.png";
import Image4 from "../../assets/community/image4.png";
import { communityData } from '@/app/constants/data';
import { CiSearch } from "react-icons/ci";
import CommunityCard from '@/app/components/community/CommunityCard';
import { IoIosArrowRoundForward } from "react-icons/io";

const Community = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex-grow min-h-screen flex'>
                <div className='w-full flex flex-col max-w-1/2 relative overflow-hidden justify-center items-center'>
                    <Image
                        src={Image1}
                        className='w-full h-full object-cover'
                        layout="responsive"
                        width={1200}
                        height={800}
                        alt="Image 1"
                    />
                    {/* Centered Text */}
                    <div className="w-full text-white absolute bottom-[10rem] z-20 flex justify-center items-center max-w-[20rem] flex-col gap-20">
                        <p className='text-4xl font-bold'>A first chance to second hands ?</p>
                        <button className='w-fit bg-[#A50705] p-2 px-8 rounded-full text-white flex justify-center items-center z-20'>
                            Read More
                        </button>
                    </div>
                </div>
                <div className='w-full flex flex-col max-w-1/2 overflow-hidden justify-center items-center'>
                    <div className='w-full flex flex-col h-1/2 relative'>
                        <Image
                            src={Image2}
                            className='w-full h-full object-cover'
                            layout="responsive"
                            width={1200}
                            height={800}
                            alt="Image 2"
                        />
                        {/* Centered Text */}
                        <div className="w-full text-white font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center flex flex-col gap-12">
                            <p className='text-4xl w-full max-w-xl text-center'>Surreal Stories of Sustainability</p>
                            <button className='w-fit bg-[#A50705] p-2 px-8 rounded-full text-white flex justify-center items-center z-20'>
                                Read More
                            </button>
                        </div>

                    </div>
                    <div className='w-full flex flex-col max-h-1/2 relative'>
                        <Image
                            src={Image3}
                            className='w-full h-full object-bottom'
                            layout="responsive"
                            width={1200}
                            height={800}
                            alt="Image 3"
                        />
                        {/* Centered Text */}
                        <div className="w-full text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center flex flex-col gap-2">
                            <p className='text-4xl w-full max-w-[20rem] text-center'>Sell a <span className='font-bold'>PRE-LOVED</span> to adapt a pre loved</p>
                            <button className='w-fit bg-[#A50705] p-2 px-8 rounded-full text-white flex justify-center items-center z-20'>
                                Read More
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <div className='w-full flex flex-col relative overflow-hidden justify-center items-center h-[40rem]'>

                <Image
                    src={Image4}
                    className='w-full h-full'
                    layout="responsive"
                    width={1200}
                    height={800}
                    alt="Image 4"
                />
                {/* Centered Text */}
                <div className="w-full  font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center flex flex-col gap-[20rem]">
                    <p className='text-3xl bg-white p-2 text-black px-4'>Make Sustainability a Norm!</p>
                    <button className='w-fit bg-[#A50705] p-2 px-8 rounded-full text-white flex justify-center items-center z-20'>
                        Read More
                    </button>
                </div>
            </div>

            {/* ___________Community search and actions section */}
            <div className='w-full flex flex-col py-12 p-4  justify-start items-center'>
                <div className='w-full flex max-w-[80rem] gap-4 flex-grow flex-col justify-center items-center'>
                    {/* search action */}
                    <div className='w-full flex  flex-grow justify-around items-center rounded-md  min-h-[10vh]'>
                        <div className='w-full flex justify-start px-4 max-w-[20rem] items-center border border-black rounded-full p-2'>
                            <CiSearch className='text-4xl' />
                            <input type="text" className='w-full px-4 outline-none border-none' placeholder='search' />
                        </div>
                        <div className='w-full flex flex-grow justify-around items-center h-full'>
                            <button className='w-full flex flex-col justify-center border p-4 rounded-full items-center max-w-[12rem] px-12 bg-[#C9C9C9] hover:bg-[#a8a8a8] text-[#A50705]'>
                                ALL
                            </button>
                            <button className='w-full flex flex-col justify-center border p-4 rounded-full items-center max-w-[12rem] px-12 bg-[#C9C9C9] hover:bg-[#a8a8a8] text-[#A50705]'>
                                THRIFTOPEDIA
                            </button>
                            <button className='w-full flex flex-col justify-center border p-4 rounded-full items-center max-w-[12rem] px-12 bg-[#C9C9C9] hover:bg-[#a8a8a8] text-[#A50705]'>
                                NEWS
                            </button>
                            <button className='w-full flex flex-col justify-center border p-4 rounded-full items-center max-w-[12rem] px-12 bg-[#C9C9C9] hover:bg-[#a8a8a8] text-[#A50705]'>
                                SUSTAINABILITY
                            </button>
                        </div>
                    </div>

                    <div className='w-full flex flex-wrap gap-4 space-y-4 flex-grow justify-around items-center rounded-md  py-12'>
                        {
                            communityData.map((item,idx) => 
                                <CommunityCard image={item.image} description={item.description} title={item.title} tag={item.tag} link={item.link} key={idx}/>
                            )
                        }
                        <div className='w-full flex gap-2 justify-center items-center py-12'>
                            <p>1/5</p>
                            <IoIosArrowRoundForward className='text-4xl text-[#A50705]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;
