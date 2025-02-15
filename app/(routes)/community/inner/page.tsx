import Image from 'next/image'
import React from 'react'
import Image1 from "../../../assets/community/inner/inner1.png";
import Image2 from "../../../assets/community/inner/inner2.png";
import Image3 from "../../../assets/community/inner/inner3.png";
import { communityData } from '@/app/constants/data';
import CommunityCard from '@/app/components/community/CommunityCard';
import linkedin from "../../../assets/community/inner/linkedin.png";
import facebook from "../../../assets/community/inner/facebook.png";
import instagram from "../../../assets/community/inner/instagram.png";
import logo from "../../../assets/community/inner/logo.png";
import Link from 'next/link';

const Inner = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex-grow h-screen flex'>
                <div className='w-full flex flex-col relative overflow-hidden justify-center items-center'>
                    <Image
                        src={Image1}
                        className='w-full h-full object-cover'
                        layout="responsive"
                        width={1200}
                        height={800}
                        alt="Image 1"
                    />
                    {/* Centered Text */}
                    <div className="w-full text-white  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center flex flex-col gap-4">
                        <p className='text-4xl w-full font-bold max-w-xl text-left'>Gen Z's influence on making
                            thrifting mainstream</p>
                        <div className=' w-full max-w-xl text-left flex flex-col gap-4'>
                            <p>
                                Over the past decade, thrifting has undergone a
                                remarkable transformation—from being a niche
                                activity to becoming a mainstream fashion movement.
                            </p>
                            <button className='w-fit text-black p-4 px-12 rounded-full bg-[#D9D9D9] flex justify-start items-center z-20'>
                                NEWS
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* content */}
            <div className='w-full flex flex-col min-h-screen  justify-center items-center'>
                <div className='w-full flex flex-grow max-w-[100rem] gap-4  p-4 px-4 py-12'>
                    <div className='w-full flex max-w-[30%] gap-4 justify-center items-start px-4'>
                        <div className='flex w-full justify-center items-center gap-4'>
                            <p>08.01.2025</p>
                            <span className='border w-16 bg-[#C4C4C4]'></span>
                            <p>4 minutes</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-8'>
                        <div className='w-full flex flex-col gap-4 max-w-[80%]'>
                            <p className='text-black font-normal'>
                                Over the past decade, thrifting has undergone a remarkable transformation—from being a niche activity to becoming a mainstream fashion movement. At the heart of this change is Generation Z, a cohort of socially conscious, tech-savvy, and trend-forward individuals who are redefining the way we think about shopping, sustainability, and style. For Gen Z, the appeal of thrifting goes beyond affordability; it’s rooted in their commitment to sustainability. As the generation most vocal about climate change and environmental issues, they are acutely aware of the fashion industry’s environmental toll. By choosing pre-loved clothing over fast fashion, Gen Z is helping to reduce waste, conserve resources, and lower their carbon footprint. For them, thrifting isn’t just shopping—it’s activism.
                            </p>
                            <p className='text-black font-normal'>
                                Gen Z thrives on individuality and self-expression, and thrifting offers the perfect platform for this. Unlike mass-produced fast fashion, thrift stores are treasure troves of unique, one-of-a-kind pieces that allow individuals to curate a wardrobe that reflects their personal identity. From retro jackets to vintage denim, every item has a story, adding depth and character to their style.
                            </p>
                            <div className='w-full flex flex-grow p-4 gap-4 justify-center items-center'>
                                <div className='w-full flex flex-col justify-center items-center flex-grow h-[15rem] rounded-md'>
                                    <Image src={Image2} width={1000} height={1000} alt="image" />
                                </div>
                                <div className='w-full flex flex-col justify-center items-center flex-grow h-[15rem] rounded-md'>
                                    <Image src={Image3} width={1000} height={1000} alt="image" />
                                </div>
                            </div>
                            <p className='text-black font-normal'>
                                Platforms like TikTok, Instagram, and YouTube have played a pivotal role in making thrifting mainstream. Influencers and content creators frequently share thrift hauls, styling tips, and DIY upcycling projects, inspiring millions to explore secondhand shopping.
                            </p>
                            <p className='text-[#A50705] font-semibold'>
                                “ Hashtags like #ThriftFlip & #SustainableFashion have garnered billions of views, turning thrifting into a cultural phenomenon ”
                            </p>
                            <p className='text-black font-normal'>
                                Thrifting aligns perfectly with Gen Z’s budget-conscious mindset. With student loans and rising living costs, many in this generation seek affordable alternatives to high-end fashion. Thrifting allows them to achieve aspirational looks without breaking the bank. Additionally, secondhand platforms like Depop, Poshmark, and ThredUp have made thrifting accessible and convenient, further fueling its popularity.
                            </p>
                        </div>

                        <div className='w-full flex gap-4 max-w-[80%]'>
                            <button className='w-fit p-1 px-2 border rounded'>
                                GEN Z
                            </button>
                            <button className='w-fit p-1 px-2 border rounded'>
                                FASHION
                            </button>
                            <button className='w-fit p-1 px-2 border rounded'>
                                SUSTAINABILITY
                            </button>
                        </div>

                        <div className='py-6  max-w-[80%]'>
                            <hr className=' border border-[#C4C4C4]' />
                        </div>

                        <div className='w-full flex justify-between gap-4 max-w-[80%]'>
                            <div className='w-full flex flex-grow gap-4'>
                                <span className='w-12 h-12 border-2 rounded-full p-2 flex'>
                                    <Image src={logo} width={100} height={100} alt="logo" className='flex justify-center items-center' />
                                </span>
                                <div className='flex flex-col'>
                                    <p>By COS</p>
                                    <p>Circular Fashion</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-grow gap-2 justify-end items-center text-'>
                                <Link href='' className='w-4 h-4 overflow-hidden'>
                                    <Image src={linkedin} width={100} height={100} alt="" />
                                </Link>
                                <Link href='' className='w-4 h-4 overflow-hidden'>
                                    <Image src={facebook} width={100} height={100} alt="" />
                                </Link>
                                <Link href='' className='w-4 h-4 overflow-hidden'>
                                    <Image src={instagram} width={100} height={100} alt="" />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='w-full flex flex-col bg-[#E5E5E5] justify-center items-center  p-8 gap-4 py-24 min-h-[50vh]'>
                    <div className='flex flex-col w-full px-12'>
                        <h2 className='text-black font-semibold'>Related Posts</h2>
                        <br />
                        <div className='flex justify-around items-center gap-8 flex-grow w-full'>
                            {
                                communityData.slice(4, 8).map((item, idx) =>
                                    <CommunityCard image={item.image} description={item.description} title={item.title} tag={item.tag} link={item.link} key={idx} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inner;
