"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Eye, MapPin, Calendar, Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const verificationData = [
  { month: "Jan", verifications: 120 },
  { month: "Feb", verifications: 190 },
  { month: "Mar", verifications: 300 },
  { month: "Apr", verifications: 280 },
  { month: "May", verifications: 450 },
  { month: "Jun", verifications: 380 },
]

const topProducts = [
  { name: "Premium Sneakers", verifications: 87, percentage: 35 },
  { name: "Designer Handbag", verifications: 42, percentage: 17 },
  { name: "Luxury Watch", verifications: 38, percentage: 15 },
  { name: "Premium Headphones", verifications: 33, percentage: 13 },
]

const topLocations = [
  { country: "United States", verifications: 156, percentage: 45 },
  { country: "United Kingdom", verifications: 89, percentage: 26 },
  { country: "Germany", verifications: 67, percentage: 19 },
  { country: "Japan", verifications: 34, percentage: 10 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0A2540]">Analytics</h1>
          <p className="text-gray-600 mt-1">Track your product verification performance</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-[#2979FF] text-[#2979FF] hover:bg-[#2979FF] hover:text-white rounded-lg bg-transparent"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-lg bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Verifications</p>
                <p className="text-2xl font-bold text-[#0A2540] mt-1">1,247</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#2979FF]" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-green-500 text-xs font-medium">+24%</span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Success Rate</p>
                <p className="text-2xl font-bold text-[#0A2540] mt-1">98.5%</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-green-500 text-xs font-medium">+0.3%</span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg. Daily Scans</p>
                <p className="text-2xl font-bold text-[#0A2540] mt-1">42</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-green-500 text-xs font-medium">+18%</span>
              <span className="text-gray-500 text-xs">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Countries</p>
                <p className="text-2xl font-bold text-[#0A2540] mt-1">23</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-green-500 text-xs font-medium">+3</span>
              <span className="text-gray-500 text-xs">new this month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verification Trends */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#0A2540]">Verification Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={verificationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="verifications"
                    stroke="#2979FF"
                    strokeWidth={2}
                    dot={{ fill: "#2979FF", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#2979FF", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Products Chart */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#0A2540]">Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="verifications" fill="#2979FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Locations */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#0A2540]">Top Locations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-[#0A2540] text-sm">{location.country}</p>
                    <p className="text-xs text-gray-600">{location.verifications} verifications</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 text-xs">{location.percentage}%</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#0A2540]">Recent Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { product: "Premium Sneakers", location: "New York, US", time: "5 minutes ago", status: "Verified" },
                { product: "Designer Handbag", location: "London, UK", time: "12 minutes ago", status: "Verified" },
                { product: "Luxury Watch", location: "Tokyo, JP", time: "1 hour ago", status: "Verified" },
                { product: "Premium Headphones", location: "Berlin, DE", time: "2 hours ago", status: "Verified" },
              ].map((verification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Eye className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0A2540] text-sm">{verification.product}</p>
                      <p className="text-xs text-gray-600">{verification.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-700 text-xs">{verification.status}</Badge>
                    <p className="text-xs text-gray-500 mt-1">{verification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
