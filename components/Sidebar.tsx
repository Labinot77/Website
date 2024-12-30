"use client"

import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='mx-auto'>
      <Link href="/">
      <IoHome size={24} />
      </Link>
    </div>
  )
}

export default Sidebar
