import Image from "next/image"
import { Building2 } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type CurrencyBalanceCardProps = {
  code: string
  label: string
  accountId: string
  balance: string
  flagSrc: string
  flagAlt: string
  className?: string
}

function formatAccountId(code: string, accountId: string) {
  if (code === "EUR" && accountId.length === 5) {
    return `·· ${accountId[0]} ${accountId.slice(1)}`
  }

  return `·· ${accountId}`
}

export function CurrencyBalanceCard({
  code,
  label,
  accountId,
  balance,
  flagSrc,
  flagAlt,
  className,
}: CurrencyBalanceCardProps) {
  return (
    <Card
      className={cn(
        "h-[206px] w-[256px] shrink-0 justify-between gap-0 rounded-2xl border-0 bg-muted p-4 shadow-none",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 p-0">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-black/15">
          <Image
            src={flagSrc}
            alt={flagAlt}
            width={48}
            height={48}
            className="size-full object-cover"
          />
        </div>
        <CardTitle className="text-lg font-semibold leading-6 text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-0.5 p-0">
        <div className="flex items-center gap-2">
          <Building2 className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <p className="text-sm font-normal leading-5 text-muted-foreground">
            {formatAccountId(code, accountId)}
          </p>
        </div>
        <p className="text-2xl font-semibold leading-8 text-foreground">{balance}</p>
      </CardContent>
    </Card>
  )
}
