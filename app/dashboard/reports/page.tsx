import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Search, Filter, Eye, MessageSquare, Clock, User, MapPin, ExternalLink } from "lucide-react"

const reports = [
  {
    id: "RPT001",
    product: "Premium Sneakers",
    reporter: "john.doe@email.com",
    location: "New York, US",
    reportedAt: "2 hours ago",
    status: "Under Investigation",
    priority: "High",
    description: "Suspected counterfeit product being sold on marketplace with fake QR code",
    evidence: "Photos, marketplace link",
    color: "from-red-500 to-red-600",
  },
  {
    id: "RPT002",
    product: "Designer Handbag",
    reporter: "jane.smith@email.com",
    location: "London, UK",
    reportedAt: "1 day ago",
    status: "Resolved",
    priority: "Medium",
    description: "QR code leads to incorrect product verification page",
    evidence: "Screenshots, QR scan results",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "RPT003",
    product: "Luxury Watch",
    reporter: "mike.wilson@email.com",
    location: "Tokyo, JP",
    reportedAt: "2 days ago",
    status: "New",
    priority: "High",
    description: "Multiple fake products with cloned QR codes found in local market",
    evidence: "Photos, location details",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "RPT004",
    product: "Premium Headphones",
    reporter: "sarah.jones@email.com",
    location: "Berlin, DE",
    reportedAt: "3 days ago",
    status: "In Progress",
    priority: "Low",
    description: "Customer received product that doesn't match QR verification details",
    evidence: "Product photos, receipt",
    color: "from-blue-500 to-blue-600",
  },
]

export default function ReportsPage() {
  return (
    <div className="p-10 space-y-8 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            Counterfeit Reports
          </h1>
          <p className="text-xl text-gray-300 mt-3 font-medium">Monitor and investigate counterfeit product reports</p>
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-red-500/25">
            <AlertTriangle className="w-6 h-6 mr-3" />
            New Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">23</p>
            <p className="text-gray-300 text-lg font-medium">Total Reports</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">8</p>
            <p className="text-gray-300 text-lg font-medium">Pending</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-gray-300 text-lg font-medium">Resolved</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-br from-slate-800 to-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-gray-300 text-lg font-medium">High Priority</p>
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
                placeholder="Search reports..."
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
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="grid grid-cols-1 gap-8">
        {reports.map((report) => (
          <Card
            key={report.id}
            className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
          >
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{report.product}</h3>
                    <div className="flex items-center gap-4 text-base text-gray-300">
                      <span className="font-semibold">
                        ID: <span className="text-white font-mono">{report.id}</span>
                      </span>
                      <span className="font-semibold">
                        Priority:
                        <Badge
                          className={`ml-2 text-sm px-3 py-1 ${
                            report.priority === "High"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : report.priority === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }`}
                        >
                          {report.priority}
                        </Badge>
                      </span>
                    </div>
                  </div>
                </div>
                <Badge
                  className={`text-base px-6 py-2 font-semibold ${
                    report.status === "Resolved"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : report.status === "Under Investigation"
                        ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                        : report.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                  }`}
                >
                  {report.status}
                </Badge>
              </div>

              <div className="bg-slate-700/30 rounded-2xl p-6 mb-6 border border-gray-600/30">
                <p className="text-lg text-gray-200 mb-4">{report.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-gray-300">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-400" />
                    <span>
                      Reporter: <span className="text-white">{report.reporter}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>
                      Location: <span className="text-white">{report.location}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span>
                      Reported: <span className="text-white">{report.reportedAt}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-base text-gray-300 font-semibold">
                    Evidence: <span className="text-white">{report.evidence}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent rounded-xl h-12 px-6 text-base font-semibold"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent rounded-xl h-12 px-6 text-base font-semibold"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Reporter
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent rounded-xl h-12 px-6 text-base font-semibold"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Investigate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Guidelines */}
      <Card className="border border-gray-700/50 shadow-xl bg-gradient-to-r from-slate-800 to-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Report Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Investigation Process</h4>
              <ul className="space-y-2 text-base">
                <li>• Reports are reviewed within 24 hours</li>
                <li>• High priority cases get immediate attention</li>
                <li>• Evidence is analyzed by our security team</li>
                <li>• Reporters receive status updates via email</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Required Evidence</h4>
              <ul className="space-y-2 text-base">
                <li>• Photos of suspected counterfeit products</li>
                <li>• QR code scan results or screenshots</li>
                <li>• Purchase location and seller information</li>
                <li>• Any additional supporting documentation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
