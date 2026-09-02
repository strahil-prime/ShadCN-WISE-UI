"use client"

import Link from "next/link"
import {
  Home,
  CreditCard,
  List,
  ArrowLeftRight,
  Users,
  BarChart3,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { WiseLogo } from "@/components/wise-logo"

const navItemClassName =
  "h-auto gap-4 rounded-full px-4 py-3 text-sm font-normal text-muted-foreground hover:bg-muted hover:text-muted-foreground data-[active=true]:bg-muted data-[active=true]:font-semibold data-[active=true]:text-green-700 [&_svg]:size-6"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Logo + flat nav aligned with top bar (Figma 5007:541).
 * — Restyle via --sidebar-* tokens in globals.css or navItemClassName above.
 */
export function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="w-[280px] shrink-0 flex-col border-none bg-background pl-9 pt-16"
    >
      <SidebarHeader className="shrink-0 items-start gap-10 p-0 pb-10">
        <WiseLogo />
      </SidebarHeader>
      <SidebarContent className="px-6 py-4">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <Home className="size-6" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <CreditCard className="size-6" />
                    <span>Cards</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <List className="size-6" />
                    <span>Transactions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <ArrowLeftRight className="size-6" />
                    <span>Payments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <Users className="size-6" />
                    <span>Recipients</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={navItemClassName}>
                  <Link href="/" className="flex items-center gap-4">
                    <BarChart3 className="size-6" />
                    <span>Insights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
