"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductUploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    description: "",
  })

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const isFormValid = formData.productName && formData.quantity

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-[#0A2540] hover:text-[#2979FF] transition-colors">
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
            <h1 className="text-4xl font-bold text-[#0A2540]">Upload Product Details</h1>
            <p className="text-gray-600">Add your product information to generate an authenticity code</p>
          </div>

          {/* Form */}
          <Card className="shadow-lg border-0 rounded-2xl">
            <CardContent className="p-8 space-y-8">
              {/* Product Name */}
              <div className="space-y-2">
                <Label htmlFor="productName" className="text-[#0A2540] font-medium">
                  Product Name *
                </Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="Enter product name"
                  className="rounded-xl border-gray-200 focus:border-[#2979FF] focus:ring-[#2979FF] h-12"
                />
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-[#0A2540] font-medium">
                  Quantity *
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="Enter quantity"
                  className="rounded-xl border-gray-200 focus:border-[#2979FF] focus:ring-[#2979FF] h-12"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#0A2540] font-medium">
                  Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Add product description..."
                  className="rounded-xl border-gray-200 focus:border-[#2979FF] focus:ring-[#2979FF] min-h-[100px] resize-none"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-[#0A2540] font-medium">Product Image</Label>
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-[#2979FF] bg-blue-50"
                      : uploadedImage
                        ? "border-green-300 bg-green-50"
                        : "border-gray-300 hover:border-[#2979FF] hover:bg-gray-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded product"
                        className="max-h-32 mx-auto rounded-lg shadow-md"
                      />
                      <p className="text-green-600 font-medium">Image uploaded successfully</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-[#0A2540] font-medium">Drop your image here, or click to browse</p>
                        <p className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Generate Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  disabled={!isFormValid}
                  className={`w-full rounded-xl h-14 text-lg font-medium transition-all duration-300 ${
                    isFormValid
                      ? "bg-[#2979FF] hover:bg-[#1976D2] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  asChild={isFormValid}
                >
                  {isFormValid ? <Link href="/generate">Generate Hash</Link> : <span>Generate Hash</span>}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
