import Link from "next/link"
import { Twitter, ShieldCheck, QrCode, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-blue-950 to-neutral-800 text-neutral-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-neutral-100" />
            <h1 className="text-2xl font-bold text-neutral-100 tracking-tight">HyperV</h1>
          </Link>
          <Button
            variant="outline"
            asChild
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 rounded-xl font-medium bg-transparent"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-neutral-700/50 bg-neutral-800/30 backdrop-blur-lg shadow-xl animate-float">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-6">
              Unrivaled Brand Authenticity.
              <br />
              Powered by HyperV.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Protect your brand's integrity with blockchain-secured authenticity codes.
              <br />
              Ensure every product is genuinely yours.
            </p>

            {/* CTA Section */}
            <div className="space-y-6">
              <Button
                size="lg"
                className="bg-neutral-100 text-neutral-900 hover:bg-neutral-200 px-10 py-6 text-lg rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/dashboard" className="flex items-center justify-center gap-3">
                  <Twitter className="w-6 h-6" />
                  Connect Twitter & Start
                </Link>
              </Button>

              <div>
                <Link
                  href="#how-it-works"
                  className="text-neutral-400 hover:text-neutral-200 text-base font-medium underline underline-offset-4 transition-colors"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-100 text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative p-8 rounded-3xl border border-neutral-700/50 bg-neutral-800/30 backdrop-blur-lg shadow-xl animate-float delay-100">
              <div className="w-16 h-16 bg-neutral-100/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-neutral-100" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-3">1. Register Products</h3>
              <p className="text-neutral-300 leading-relaxed">
                Securely upload your product details and link them to your verified brand identity.
              </p>
            </div>
            <div className="relative p-8 rounded-3xl border border-neutral-700/50 bg-neutral-800/30 backdrop-blur-lg shadow-xl animate-float delay-200">
              <div className="w-16 h-16 bg-neutral-100/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-8 h-8 text-neutral-100" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-3">2. Generate Codes</h3>
              <p className="text-neutral-300 leading-relaxed">
                Instantly create unique, blockchain-secured QR codes for each product unit.
              </p>
            </div>
            <div className="relative p-8 rounded-3xl border border-neutral-700/50 bg-neutral-800/30 backdrop-blur-lg shadow-xl animate-float delay-300">
              <div className="w-16 h-16 bg-neutral-100/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-neutral-100" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-3">3. Verify & Protect</h3>
              <p className="text-neutral-300 leading-relaxed">
                Consumers scan to verify authenticity, while you monitor and combat counterfeits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
