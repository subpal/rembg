import React from 'react'
import Image from 'next/image'

const Title = () => {
  return (
    <div className="flex justify-center p-1">
      <Image className="rounded-lg"
        src="/bgrem.png"
        width={70}
        height={70}
        alt="Logo"
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-3">
        BG Rem
      </h1>
    </div>
  )
}

export default Title
