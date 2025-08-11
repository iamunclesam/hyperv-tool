import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Search, Plus, MoreHorizontal, Eye, Download, Filter } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    description: "Limited edition premium sneakers with advanced comfort technology",
    quantity: 100,
    verified: 87,
    status: "Active",
    created: "Jan 15, 2024",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Designer Handbag",
    description: "Luxury leather handbag with premium craftsmanship",
    quantity: 50,
    verified: 42,
    status: "Active",
    created: "Jan 14, 2024",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    name: "Luxury Watch",
    description: "Swiss-made luxury timepiece with automatic movement",
    quantity: 25,
    verified: 18,
    status: "Pending",
    created: "Jan 13, 2024",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 4,
    name: "Premium Headphones",
    description: "Noise-cancelling wireless headphones with premium audio",
    quantity: 75,
    verified: 61,
    status: "Active",
    created: "Jan 12, 2024",
    color: "from-green-500 to-green-600",
  },
]

export default function ProductsPage() {
  return (
    <div className="p-10 space-y-8 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-xl text-gray-300 mt-3 font-medium">Manage your authenticated products</p>
        </div>
        <Button
          asChild
          className="bg-gradient-to-r from-[#2979FF] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/25"
        >
          <Link href="/upload" className="flex items-center gap-3">
            <Plus className="w-6 h-6" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                placeholder="Search products..."
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center shadow-lg`}
                  >
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-lg text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center gap-8 text-base text-gray-400">
                      <span className="font-semibold">
                        Quantity: <span className="text-white">{product.quantity}</span>
                      </span>
                      <span className="font-semibold">
                        Verified: <span className="text-green-400">{product.verified}</span>
                      </span>
                      <span className="font-semibold">
                        Created: <span className="text-white">{product.created}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={product.status === "Active" ? "default" : "secondary"}
                    className={`text-base px-6 py-2 font-semibold ${
                      product.status === "Active"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }`}
                  >
                    {product.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="lg" className="h-12 w-12 p-0 hover:bg-blue-500/20 text-blue-400">
                      <Eye className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="lg" className="h-12 w-12 p-0 hover:bg-purple-500/20 text-purple-400">
                      <Download className="w-6 h-6" />
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

      {/* Create Product CTA */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-[#2979FF] to-[#1976D2] text-white">
        <CardContent className="p-10 text-center">
          <Package className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to add more products?</h3>
          <p className="text-xl text-blue-100 mb-8">Protect your brand with blockchain-secured authenticity</p>
          <Button
            asChild
            className="bg-white text-[#2979FF] hover:bg-gray-100 rounded-2xl font-bold text-lg h-16 px-10 shadow-lg"
          >
            <Link href="/upload" className="flex items-center gap-3">
              <Plus className="w-6 h-6" />
              Add New Product
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
