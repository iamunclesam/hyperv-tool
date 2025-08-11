"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, QrCode, AlertTriangle, Settings, User, Plus, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: Package,
  },
  {
    title: "QR Codes",
    url: "/dashboard/qr-codes",
    icon: QrCode,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: AlertTriangle,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-gray-700/30 bg-gradient-to-b from-slate-900 to-slate-800">
      <SidebarHeader className="p-8 border-b border-gray-700/30">
        <Link href="/dashboard" className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2979FF] to-[#1976D2] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white">HyperV</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Connected</span>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-6 py-8">
        <SidebarMenu className="space-y-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  size="lg"
                  className={`h-16 px-6 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#2979FF] to-[#1976D2] text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  <Link href={item.url} className="flex items-center gap-4">
                    <item.icon className="w-6 h-6" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        <div className="mt-10">
          <Button
            asChild
            className="w-full h-16 bg-gradient-to-r from-[#2979FF] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
          >
            <Link href="/upload" className="flex items-center gap-3">
              <Plus className="w-6 h-6" />
              Create Product
            </Link>
          </Button>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-gray-700/30">
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="h-14 px-4 rounded-xl text-base font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white"
            >
              <User className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base text-white">Premium Footwear</span>
                <span className="text-sm text-gray-400">@premiumfootwear</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="h-12 px-4 rounded-xl text-base font-medium text-gray-400 hover:bg-gray-700/50 hover:text-red-400"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
