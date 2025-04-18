'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div
        className={
          `w-full h-[84px] rounded-2xl flex justify-center items-center text-[#64748B] font-black transition-all duration-300 ` +
          (isActive
            ? 'bg-[#abb9c8] text-[#F8FAFC]'
            : 'bg-[#F8FAFC] hover:bg-[#abb9c8] hover:scale-105 hover:shadow-md hover:text-[#F8FAFC]')
        }
      >
        {children}
      </div>
    </Link>
  )
}