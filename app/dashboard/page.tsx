import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Package,
  QrCode,
  Eye,
  TrendingUp,
  Plus,
  Users,
  Globe,
  Zap,
  Shield,
  Activity,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  return (
    <div className="p-4 pt-8 md:p-10 space-y-10 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      {/* Header */}
      <div className="md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Toggle Button */}
          <SidebarTrigger className="md:hidden bg-gradient-to-r from-[#2979FF] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200" />
          
          <div>
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
              Sam Shoes
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24"><path fill="#1908d2" d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"/></svg>
            </h1>
            <p className="text-sm  md:text-xl text-gray-300 mt-3 font-medium">Welcome to your HyperV control center</p>
          </div>
        </div>
        <Button
          asChild
          className="mt-4 md:mt-0 bg-gradient-to-r from-[#2979FF] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
        >
          <Link href="/upload" className="flex items-center gap-3">
            <Plus className="w-6 h-6" />
            Create Product
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-300">Total Products</p>
                <p className="text-4xl font-bold text-white mt-2">24</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-base font-semibold">+12%</span>
              <span className="text-gray-400 text-base">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-300">QR Codes </p>
                <p className="text-4xl font-bold text-white mt-2">156</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <QrCode className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-base font-semibold">+8%</span>
              <span className="text-gray-400 text-base">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-300">Verifications</p>
                <p className="text-4xl font-bold text-white mt-2">1,247</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-base font-semibold">+24%</span>
              <span className="text-gray-400 text-base">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-300">Success Rate</p>
                <p className="text-4xl font-bold text-white mt-2">98.5%</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-base font-semibold">+0.3%</span>
              <span className="text-gray-400 text-base">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Products */}
        <div className="hidden lg:block lg:col-span-2">
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-white">Recent Products</CardTitle>
                <Button variant="ghost" size="lg" asChild className="text-lg">
                  <Link href="/dashboard/products" className="text-blue-400 hover:text-blue-300 font-semibold">
                    View All
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  name: "Premium Sneakers",
                  quantity: 100,
                  status: "Active",
                  date: "2 hours ago",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "Designer Handbag",
                  quantity: 50,
                  status: "Active",
                  date: "1 day ago",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  name: "Luxury Watch",
                  quantity: 25,
                  status: "Pending",
                  date: "2 days ago",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  name: "Premium Headphones",
                  quantity: 75,
                  status: "Active",
                  date: "3 days ago",
                  color: "from-green-500 to-green-600",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl hover:shadow-lg transition-all duration-200 border border-gray-600/30"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{product.name}</p>
                      <p className="text-base text-gray-300">{product.quantity} units</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={product.status === "Active" ? "default" : "secondary"}
                      className={`text-sm px-4 py-2 font-semibold ${
                        product.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {product.status}
                    </Badge>
                    <p className="text-sm text-gray-400 mt-2 font-medium">{product.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Activity */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 border-2 border-[#2979FF] text-[#2979FF] hover:bg-[#2979FF] hover:text-white bg-transparent rounded-2xl text-lg font-semibold transition-all duration-200"
              >
                <Link href="/upload" className="flex items-center gap-4">
                  <Plus className="w-6 h-6" />
                  <span>Add New Product</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent rounded-2xl text-lg font-semibold transition-all duration-200"
              >
                <Link href="/dashboard/qr-codes" className="flex items-center gap-4">
                  <QrCode className="w-6 h-6" />
                  <span>Generate QR Code</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent rounded-2xl text-lg font-semibold transition-all duration-200"
              >
                <Link href="/dashboard/reports" className="flex items-center gap-4">
                  <AlertTriangle className="w-6 h-6" />
                  <span>View Reports</span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="hidden md:block border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { product: "Premium Sneakers", action: "Verified in New York", time: "5 min ago" },
                { product: "Designer Handbag", action: "QR Code downloaded", time: "12 min ago" },
                { product: "Luxury Watch", action: "Product updated", time: "1 hour ago" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl border border-gray-600/30"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold text-white">{activity.product}</p>
                    <p className="text-base text-gray-300">{activity.action}</p>
                    <p className="text-sm text-gray-400 mt-1 font-medium">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-100">Active Users</p>
                <p className="text-3xl font-bold text-white">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-600 to-orange-700 text-white hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-orange-100">Countries</p>
                <p className="text-3xl font-bold text-white">23</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600 to-green-700 text-white hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-green-100">Growth Rate</p>
                <p className="text-3xl font-bold text-white">+18.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
