
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Settings as SettingsIcon, User, Bell, Palette, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Settings() {
  const { toast } = useToast()
  const [preferences, setPreferences] = useState({
    defaultQuestionCount: '10',
    difficulty: 'medium',
    autoPlay: true,
    showExplanations: true,
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true
  })

  const handleSave = () => {
    // Save preferences to localStorage or API
    localStorage.setItem('quiz-ai-preferences', JSON.stringify(preferences))
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  const updatePreference = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <SettingsIcon className="w-8 h-8" />
          Settings
        </h1>
        <p className="text-muted-foreground">
          Customize your learning experience and account preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Preferences */}
        <Card className="quiz-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Quiz Preferences
            </CardTitle>
            <CardDescription>
              Set your default quiz configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="question-count">Default Number of Questions</Label>
              <Select
                value={preferences.defaultQuestionCount}
                onValueChange={(value) => updatePreference('defaultQuestionCount', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Questions</SelectItem>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="15">15 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Default Difficulty Level</Label>
              <Select
                value={preferences.difficulty}
                onValueChange={(value) => updatePreference('difficulty', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-play">Auto-play Videos</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically play videos when creating quizzes
                  </p>
                </div>
                <Switch
                  id="auto-play"
                  checked={preferences.autoPlay}
                  onCheckedChange={(checked) => updatePreference('autoPlay', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-explanations">Show Explanations</Label>
                  <p className="text-sm text-muted-foreground">
                    Display detailed explanations for quiz answers
                  </p>
                </div>
                <Switch
                  id="show-explanations"
                  checked={preferences.showExplanations}
                  onCheckedChange={(checked) => updatePreference('showExplanations', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account & Notifications */}
        <Card className="quiz-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage how you receive updates and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive quiz updates and learning tips via email
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={preferences.emailNotifications}
                  onCheckedChange={(checked) => updatePreference('emailNotifications', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get browser notifications for quiz reminders
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={preferences.pushNotifications}
                  onCheckedChange={(checked) => updatePreference('pushNotifications', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="weekly-report">Weekly Progress Report</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive a summary of your learning progress
                  </p>
                </div>
                <Switch
                  id="weekly-report"
                  checked={preferences.weeklyReport}
                  onCheckedChange={(checked) => updatePreference('weeklyReport', checked)}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="theme">Theme Preference</Label>
              <Select
                value={preferences.theme}
                onValueChange={(value) => updatePreference('theme', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Information */}
      <Card className="quiz-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Manage your account details and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <p className="text-sm text-muted-foreground">demo@example.com</p>
              </div>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <p className="text-sm text-muted-foreground">Free Plan</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Member Since</Label>
                <p className="text-sm text-muted-foreground">January 2024</p>
              </div>
              <div className="space-y-2">
                <Label>Total Quizzes</Label>
                <p className="text-sm text-muted-foreground">24 completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Preferences
        </Button>
      </div>
    </div>
  )
}
