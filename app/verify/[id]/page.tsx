import Link from "next/link"
import { CheckCircle, XCircle, Twitter, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would normally come from your database/API
const mockVerificationData = {
  isAuthentic: true,
  brandName: "Premium Footwear Co.",
  twitterHandle: "@premiumfootwear",
  productName: "Premium Sneakers",
  description: "Limited edition premium sneakers with advanced comfort technology",
  quantity: "100 units",
  verificationDate: "2024-01-15",
  hashId: "0x1a2b3c4d5e6f7g8h9i0j",
}

export default function ScanResultPage({ params }: { params: { id: string } }) {
  const { isAuthentic, brandName, twitterHandle, productName, description, quantity } = mockVerificationData

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-[#0A2540]">
            HyperV
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full space-y-8">
          {/* Status Icon */}
          <div className="text-center">
            {isAuthentic ? (
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            ) : (
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                <XCircle className="w-16 h-16 text-red-500" />
              </div>
            )}
          </div>

          {/* Status Badge */}
          <div className="text-center animate-in slide-in-from-bottom duration-500 delay-200">
            {isAuthentic ? (
              <Badge className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg font-semibold rounded-full">
                ✓ AUTHENTIC
              </Badge>
            ) : (
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-lg font-semibold rounded-full">
                ⚠ NOT VERIFIED
              </Badge>
            )}
          </div>

          {/* Product Details Card */}
          <Card className="shadow-2xl border-0 rounded-3xl animate-in slide-in-from-bottom duration-500 delay-300">
            <CardContent className="p-8 space-y-6">
              {/* Brand Info */}
              <div className="text-center space-y-3">
                <h1 className="text-3xl font-bold text-[#0A2540]">{brandName}</h1>
                <div className="flex items-center justify-center gap-2 text-[#1DA1F2]">
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">{twitterHandle}</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Verified
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 border-t pt-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-2">{productName}</h2>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Quantity:</span>
                    <span className="ml-2 font-medium text-[#0A2540]">{quantity}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Verified:</span>
                    <span className="ml-2 font-medium text-[#0A2540]">Jan 15, 2024</span>
                  </div>
                </div>
              </div>

              {/* Blockchain Info */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#0A2540]">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium text-sm">Blockchain Verified</span>
                </div>
                <p className="text-xs text-gray-500 font-mono break-all">Hash: {mockVerificationData.hashId}</p>
                <p className="text-xs text-gray-500">Stored on Hyperliquid blockchain</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          {isAuthentic ? (
            <div className="text-center space-y-4 animate-in fade-in duration-500 delay-500">
              <p className="text-gray-600">This product has been verified as authentic by the brand owner.</p>
              <Button
                variant="outline"
                className="border-[#2979FF] text-[#2979FF] hover:bg-[#2979FF] hover:text-white rounded-full px-6 bg-transparent"
                asChild
              >
                <Link href="/">Learn More About HyperV</Link>
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-4 animate-in fade-in duration-500 delay-500">
              <p className="text-red-600 font-medium">This product could not be verified. Please contact the seller.</p>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full px-6 bg-transparent"
                asChild
              >
                <Link href="/">Report Counterfeit</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
