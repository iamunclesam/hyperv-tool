import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { QrCode, Search, Download, Copy, Eye, Filter, MoreHorizontal, Share } from "lucide-react"

const qrCodes = [
  {
    id: "QR001",
    product: "Premium Sneakers",
    generated: "Jan 15, 2024",
    scans: 87,
    lastScan: "2 hours ago",
    status: "Active",
    url: "hyperv.verify/abc123",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "QR002",
    product: "Designer Handbag",
    generated: "Jan 14, 2024",
    scans: 42,
    lastScan: "1 day ago",
    status: "Active",
    url: "hyperv.verify/def456",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "QR003",
    product: "Luxury Watch",
    generated: "Jan 13, 2024",
    scans: 18,
    lastScan: "3 days ago",
    status: "Pending",
    url: "hyperv.verify/ghi789",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "QR004",
    product: "Premium Headphones",
    generated: "Jan 12, 2024",
    scans: 61,
    lastScan: "5 hours ago",
    status: "Active",
    url: "hyperv.verify/jkl012",
    color: "from-green-500 to-green-600",
  },
]

export default function QRCodesPage() {
  return (
    <div className="p-10 space-y-8 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            QR Codes
          </h1>
          <p className="text-xl text-gray-300 mt-3 font-medium">Manage and download your generated QR codes</p>
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-purple-500/25">
            <Download className="w-6 h-6 mr-3" />
            Bulk Download
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">156</p>
            <p className="text-gray-300 text-lg font-medium">Total QR Codes</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">1,247</p>
            <p className="text-gray-300 text-lg font-medium">Total Scans</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Download className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">89</p>
            <p className="text-gray-300 text-lg font-medium">Downloads</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-lg font-bold">%</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-white">98.5%</p>
            <p className="text-gray-300 text-lg font-medium">Success Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                placeholder="Search QR codes..."
                className="pl-14 h-14 rounded-2xl border-2 border-gray-600 bg-slate-700/50 text-white placeholder:text-gray-400 focus:border-[#2979FF] focus:ring-[#2979FF] text-lg"
              />
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 border-gray-600 hover:border-[#2979FF] hover:text-[#2979FF] bg-slate-700/50 text-gray-300 h-14 px-6 text-lg font-semibold"
              >
                <Filter className="w-5 h-5 mr-3" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 border-gray-600 hover:border-[#2979FF] hover:text-[#2979FF] bg-slate-700/50 text-gray-300 h-14 px-6 text-lg font-semibold"
              >
                Sort
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* QR Codes Grid */}
      <div className="grid grid-cols-1 gap-8">
        {qrCodes.map((qr) => (
          <Card
            key={qr.id}
            className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* QR Code Preview */}
                  <div className="w-20 h-20 bg-white border-4 border-gray-600 rounded-3xl flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* QR Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{qr.product}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg text-gray-300 font-mono bg-slate-700/50 px-3 py-1 rounded-lg border border-gray-600/50">
                        {qr.url}
                      </span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-blue-400">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-8 text-base text-gray-400">
                      <span className="font-semibold">
                        Generated: <span className="text-white">{qr.generated}</span>
                      </span>
                      <span className="font-semibold">
                        Scans: <span className="text-green-400">{qr.scans}</span>
                      </span>
                      <span className="font-semibold">
                        Last scan: <span className="text-white">{qr.lastScan}</span>
                      </span>
                      <span className="font-semibold">
                        ID: <span className="text-white">{qr.id}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge
                    variant={qr.status === "Active" ? "default" : "secondary"}
                    className={`text-base px-6 py-2 font-semibold ${
                      qr.status === "Active"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {qr.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="lg" className="h-12 w-12 p-0 hover:bg-blue-500/20 text-blue-400">
                      <Download className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="lg" className="h-12 w-12 p-0 hover:bg-purple-500/20 text-purple-400">
                      <Share className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="lg" className="h-12 w-12 p-0 hover:bg-gray-500/20 text-gray-400">
                      <MoreHorizontal className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Generate More CTA */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <CardContent className="p-10 text-center">
          <QrCode className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h3 className="text-3xl font-bold mb-4">Need more QR codes?</h3>
          <p className="text-xl text-purple-100 mb-8">Generate codes for all your products instantly</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-2xl font-bold text-lg h-16 px-10 shadow-lg">
            Generate More
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
