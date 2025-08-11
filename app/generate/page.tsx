"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Printer, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function QRGenerationPage() {
  const [copied, setCopied] = useState(false)
  const [qrGenerated, setQrGenerated] = useState(false)

  // Simulate QR generation
  useEffect(() => {
    const timer = setTimeout(() => {
      setQrGenerated(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://hyperv.verify/abc123")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=300&width=300"
    link.download = "hyperv-qr-code.png"
    link.click()
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/upload" className="text-[#0A2540] hover:text-[#2979FF] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-[#0A2540]">HyperV</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-[#0A2540]">Your QR Code is Ready</h1>
            <p className="text-gray-600">Download and print this code to authenticate your products</p>
          </div>

          {/* QR Code Card */}
          <div className="flex justify-center">
            <Card className="shadow-2xl border-0 rounded-3xl max-w-md w-full">
              <CardContent className="p-12 text-center space-y-8">
                {!qrGenerated ? (
                  <div className="space-y-6">
                    <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                      <div className="text-gray-400">Generating QR Code...</div>
                    </div>
                    <div className="w-8 h-8 border-4 border-[#2979FF] border-t-transparent rounded-full animate-spin mx-auto"></div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="w-64 h-64 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                      <img src="/placeholder.svg?height=240&width=240" alt="QR Code" className="w-60 h-60 rounded-xl" />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#0A2540]">Premium Sneakers</h3>
                      <p className="text-gray-600">Quantity: 100 units</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <span>hyperv.verify/abc123</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyLink}
                          className="h-6 w-6 p-0 hover:bg-gray-100"
                        >
                          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          {qrGenerated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-500 delay-300">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-[#2979FF] hover:bg-[#1976D2] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download QR
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handlePrint}
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Printer className="w-5 h-5 mr-2" />
                Print
              </Button>
            </div>
          )}

          {/* Blockchain Info */}
          {qrGenerated && (
            <div className="text-center animate-in fade-in duration-500 delay-500">
              <p className="text-sm text-gray-500">This code is stored on-chain via Hyperliquid</p>
            </div>
          )}

          {/* Next Steps */}
          {qrGenerated && (
            <Card className="bg-gray-50 border-0 rounded-2xl animate-in slide-in-from-bottom duration-500 delay-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#0A2540] mb-3">Next Steps</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2979FF] rounded-full mt-2 flex-shrink-0"></span>
                    Print the QR code and attach it to your products
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2979FF] rounded-full mt-2 flex-shrink-0"></span>
                    Customers can scan to verify authenticity instantly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#2979FF] rounded-full mt-2 flex-shrink-0"></span>
                    Monitor verification attempts through your dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
