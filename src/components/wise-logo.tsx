import Link from "next/link"

import { cn } from "@/lib/utils"

type WiseLogoProps = {
  className?: string
}

export function WiseLogo({ className }: WiseLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)} aria-label="Wise home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/wise-logo-light.png"
        alt="Wise"
        width={106}
        height={24}
        className="block h-6 w-[106px] object-contain object-left dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/wise-logo-dark.png"
        alt="Wise"
        width={106}
        height={24}
        className="hidden h-6 w-[106px] object-contain object-left dark:block"
      />
    </Link>
  )
}
