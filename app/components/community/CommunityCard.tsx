import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommunityCard = ({image, title, description, tag, link, key}: any) => {
  return (
    <Link href={link} className="flex flex-col w-72 h-[30rem] bg-[#C9C9C9] hover:shadow cursor-pointer overflow-hidden justify-between" key={key}>
      <Image
        src={image}
        alt="Community"
        width={1000}
        height={1000}
        className="w-full h-52 object-cover flex flex-grow"
      />
      <div className="p-2 flex flex-col">
        <h3 className="text-sm font-semibold text-black">{title}</h3>
        <p className="text-black text-xs">{description}</p>
        <br />
        <p className="text-black text-xs text-right">{tag}</p>
      </div>
    </Link>
  )
}

export default CommunityCard
