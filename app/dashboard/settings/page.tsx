import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Twitter, Bell, Shield, CreditCard, Users, Key, ExternalLink, Check } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-10 space-y-8 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-xl text-gray-300 mt-3 font-medium">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <nav className="space-y-2">
                {[
                  { name: "Profile", icon: Users, active: true },
                  { name: "Twitter Integration", icon: Twitter, active: false },
                  { name: "Notifications", icon: Bell, active: false },
                  { name: "Security", icon: Shield, active: false },
                  { name: "Billing", icon: CreditCard, active: false },
                  { name: "API Keys", icon: Key, active: false },
                ].map((item) => (
                  <button
                    key={item.name}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-colors text-base font-medium ${
                      item.active
                        ? "bg-gradient-to-r from-[#2979FF] to-[#1976D2] text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Profile Settings */}
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Users className="w-6 h-6" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="brandName" className="text-white font-semibold text-base">
                    Brand Name
                  </Label>
                  <Input
                    id="brandName"
                    defaultValue="Premium Footwear Co."
                    className="h-12 rounded-xl border-2 border-gray-600 bg-slate-700/50 text-white placeholder:text-gray-400 focus:border-[#2979FF] focus:ring-[#2979FF] text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white font-semibold text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="contact@premiumfootwear.com"
                    className="h-12 rounded-xl border-2 border-gray-600 bg-slate-700/50 text-white placeholder:text-gray-400 focus:border-[#2979FF] focus:ring-[#2979FF] text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="description" className="text-white font-semibold text-base">
                  Brand Description
                </Label>
                <Textarea
                  id="description"
                  defaultValue="Premium footwear brand focused on quality, comfort, and style. Established in 2020."
                  className="rounded-xl border-2 border-gray-600 bg-slate-700/50 text-white placeholder:text-gray-400 focus:border-[#2979FF] focus:ring-[#2979FF] min-h-[100px] resize-none text-lg"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="website" className="text-white font-semibold text-base">
                  Website
                </Label>
                <Input
                  id="website"
                  defaultValue="https://premiumfootwear.com"
                  className="h-12 rounded-xl border-2 border-gray-600 bg-slate-700/50 text-white placeholder:text-gray-400 focus:border-[#2979FF] focus:ring-[#2979FF] text-lg"
                />
              </div>

              <Button className="bg-gradient-to-r from-[#2979FF] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Twitter Integration */}
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Twitter className="w-6 h-6" />
                Twitter Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-green-500/10 rounded-2xl border border-green-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">@premiumfootwear</p>
                    <p className="text-base text-gray-300">Connected and verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-base px-4 py-2 font-semibold">
                    <Check className="w-4 h-4 mr-2" />
                    Verified
                  </Badge>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl h-12 bg-slate-700/50 border-gray-600 text-gray-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Auto-post verification updates</p>
                    <p className="text-base text-gray-300">Automatically tweet when products are verified</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Include verification stats</p>
                    <p className="text-base text-gray-300">Add verification count to your Twitter bio</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Bell className="w-6 h-6" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Email notifications</p>
                    <p className="text-base text-gray-300">Receive email updates about verifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Weekly reports</p>
                    <p className="text-base text-gray-300">Get weekly analytics summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Security alerts</p>
                    <p className="text-base text-gray-300">Notifications about account security</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">Counterfeit alerts</p>
                    <p className="text-base text-gray-300">Alerts when counterfeit reports are filed</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card className="border border-gray-700/50 shadow-xl bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Key className="w-6 h-6" />
                API Keys
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-lg">
                Use API keys to integrate HyperV verification into your own applications and systems.
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-slate-700/30 rounded-2xl border border-gray-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-white text-lg">Production API Key</p>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-base px-4 py-2 font-semibold">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 p-4 bg-slate-800/50 rounded-xl text-base font-mono text-gray-300 border border-gray-600/50">
                      hv_prod_1a2b3c4d5e6f7g8h9i0j...
                    </code>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl h-12 bg-slate-700/50 border-gray-600 text-gray-300 hover:text-white"
                    >
                      Copy
                    </Button>
                  </div>
                  <p className="text-base text-gray-400 mt-3">Created on Jan 15, 2024 • Last used 2 hours ago</p>
                </div>

                <div className="p-6 bg-slate-700/30 rounded-2xl border border-gray-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-white text-lg">Development API Key</p>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-base px-4 py-2 font-semibold">
                      Test
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 p-4 bg-slate-800/50 rounded-xl text-base font-mono text-gray-300 border border-gray-600/50">
                      hv_test_9z8y7x6w5v4u3t2s1r0q...
                    </code>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl h-12 bg-slate-700/50 border-gray-600 text-gray-300 hover:text-white"
                    >
                      Copy
                    </Button>
                  </div>
                  <p className="text-base text-gray-400 mt-3">Created on Jan 10, 2024 • Last used 1 day ago</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-2 border-[#2979FF] text-[#2979FF] hover:bg-[#2979FF] hover:text-white rounded-xl bg-transparent px-8 py-4 text-lg font-semibold"
              >
                Generate New Key
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
