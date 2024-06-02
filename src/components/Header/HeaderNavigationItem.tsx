'use client'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface HeaderNavigationItemProps {
  text: string
  textColor: string
  onMouseOverTextColor: string
  className?: string
  scrollTarget?: string
  linkHref?: string
  onClick?: () => void
}

export default function HeaderNavigationItem({
  onClick,
  text,
  textColor,
  onMouseOverTextColor,
  className,
  linkHref,
  scrollTarget,
}: HeaderNavigationItemProps) {

  return (
    <a
      href={linkHref}
      className={twMerge(
        'link-underline-animation link-underline cursor-pointer text-sm font-medium transition-all duration-300 ease-in-out hover:text-bluePrimary',
        className,
      )}
      style={{
        color: textColor,
        backgroundImage: `linear-gradient(transparent, transparent), linear-gradient(${onMouseOverTextColor}, ${onMouseOverTextColor})`,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = onMouseOverTextColor
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = textColor
      }}
    >
      {text}
    </a>
  )
}
