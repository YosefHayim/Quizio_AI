import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Youtube, Play, Settings, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function Quiz() {
  const [videoUrl, setVideoUrl] = useState("")
  const [questionCount, setQuestionCount] = useState("10")
  const [difficulty, setDifficulty] = useState("medium")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleGenerateQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!videoUrl) {
      toast({
        title: "Error",
        description: "Please enter a YouTube URL",
        variant: "destructive"
      })
      return
    }

    // Validate YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/
    if (!youtubeRegex.test(videoUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube URL",
        variant: "destructive"
      })
      return
    }

    setIsGenerating(true)
    
    try {
      // Simulate quiz generation
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      toast({
        title: "Quiz Generated!",
        description: `Created a ${questionCount}-question quiz on ${difficulty} difficulty`,
      })
      
      // Navigate to quiz taking page
      navigate('/quiz/take')
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate quiz. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const videoId = extractVideoId(videoUrl)

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
          <Youtube className="w-8 h-8 text-primary" />
          Create New Quiz
        </h1>
        <p className="text-muted-foreground">
          Transform any YouTube video into an interactive learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Generation Form */}
        <Card className="quiz-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Quiz Configuration
            </CardTitle>
            <CardDescription>
              Set up your personalized learning experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerateQuiz} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="video-url">YouTube Video URL</Label>
                <Input
                  id="video-url"
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  required
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">
                  Paste the URL of the YouTube video you want to create a quiz from
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="question-count">Number of Questions</Label>
                  <Select value={questionCount} onValueChange={setQuestionCount}>
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
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
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
              </div>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">AI-Powered</Badge>
                <Badge variant="secondary">Auto-Generated</Badge>
                <Badge variant="secondary">Instant Results</Badge>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12" 
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Quiz...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Generate Quiz
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Video Preview */}
        <Card className="quiz-card">
          <CardHeader>
            <CardTitle>Video Preview</CardTitle>
            <CardDescription>
              Preview of the video you'll create a quiz from
            </CardDescription>
          </CardHeader>
          <CardContent>
            {videoId ? (
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    Ready to generate quiz from this video
                  </p>
                  <div className="flex gap-2">
                    <Badge>{questionCount} Questions</Badge>
                    <Badge variant="outline" className="capitalize">
                      {difficulty} Level
                    </Badge>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Youtube className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">
                    Enter a YouTube URL to see video preview
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* How it Works */}
      <Card className="quiz-card">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>
            Our AI-powered system creates personalized quizzes in seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold">Paste URL</h3>
              <p className="text-sm text-muted-foreground">
                Simply paste any YouTube video URL
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes the video content
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold">Take Quiz</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized questions instantly
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
