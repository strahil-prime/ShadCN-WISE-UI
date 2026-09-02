import Link from "next/link"
import { CurrencyBalanceCard } from "@/components/currency-balance-card"
import { Button } from "@/components/ui/button"
import { ArrowUpCircle, PlusCircle } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "1.00", flagSrc: "/flags/europe.png", flagAlt: "European Union flag" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", flagSrc: "/flags/australia.png", flagAlt: "Australia flag" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", flagSrc: "/flags/canada.png", flagAlt: "Canada flag" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", flagSrc: "/flags/united-kingdom.png", flagAlt: "United Kingdom flag" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUpCircle, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: PlusCircle, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUpCircle, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[976px] flex-1 flex-col px-6 pb-6 pt-14">
      <div className="flex flex-col gap-8">
        {/* Total balance + actions */}
        <section className="space-y-4">
          <h2 className="text-sm font-medium text-muted-foreground">Total balance</h2>
          <p className="text-3xl font-bold tracking-tight">1.00 EUR</p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Send money</Button>
            <Button size="sm" variant="secondary">Add money</Button>
            <Button size="sm" variant="secondary">Request</Button>
          </div>
        </section>

        {/* Currency account cards */}
        <section className="overflow-x-auto">
          <div className="flex w-max gap-3">
            {CURRENCY_ACCOUNTS.map((account) => (
              <CurrencyBalanceCard
                key={account.code}
                code={account.code}
                label={account.label}
                accountId={account.accountId}
                balance={account.balance}
                flagSrc={account.flagSrc}
                flagAlt={account.flagAlt}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Recent transactions */}
      <section className="mt-14 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            See all
          </Link>
        </div>
        <ul className="rounded-lg bg-card">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 px-4 py-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <tx.icon className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                {tx.subAmount && (
                  <p className="text-xs text-muted-foreground">{tx.subAmount}</p>
                )}
              </div>
              <p className={`shrink-0 text-right font-medium ${tx.isCredit ? "text-primary" : ""}`}>
                {tx.amount}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}
