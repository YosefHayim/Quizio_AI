
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { History as HistoryIcon, Search, Trophy, Clock, Calendar, ExternalLink } from "lucide-react"

export default function History() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  // Mock quiz history data
  const quizHistory = [
    {
      id: '1',
      videoTitle: 'Introduction to React Hooks - Complete Tutorial',
      videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      score: 90,
      totalQuestions: 10,
      completedAt: '2024-01-15T10:30:00Z',
      duration: 480, // seconds
      difficulty: 'medium'
    },
    {
      id: '2',
      videoTitle: 'JavaScript ES6 Features Explained',
      videoUrl: 'https://youtube.com/watch?v=abc123def',
      score: 75,
      totalQuestions: 8,
      completedAt: '2024-01-14T15:45:00Z',
      duration: 360,
      difficulty: 'easy'
    },
    {
      id: '3',
      videoTitle: 'CSS Grid Layout - Master Class',
      videoUrl: 'https://youtube.com/watch?v=xyz789ghi',
      score: 95,
      totalQuestions: 12,
      completedAt: '2024-01-13T09:15:00Z',
      duration: 720,
      difficulty: 'hard'
    },
    {
      id: '4',
      videoTitle: 'Node.js Backend Development',
      videoUrl: 'https://youtube.com/watch?v=node123js',
      score: 82,
      totalQuestions: 15,
      completedAt: '2024-01-12T14:20:00Z',
      duration: 900,
      difficulty: 'medium'
    },
    {
      id: '5',
      videoTitle: 'Python Data Science Fundamentals',
      videoUrl: 'https://youtube.com/watch?v=python456',
      score: 88,
      totalQuestions: 10,
      completedAt: '2024-01-11T11:00:00Z',
      duration: 600,
      difficulty: 'medium'
    }
  ]

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes}m ${seconds % 60}s`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 75) return "text-yellow-600"
    return "text-red-600"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredHistory = quizHistory.filter(quiz =>
    quiz.videoTitle.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    totalQuizzes: quizHistory.length,
    averageScore: Math.round(quizHistory.reduce((sum, quiz) => sum + quiz.score, 0) / quizHistory.length),
    totalTime: Math.round(quizHistory.reduce((sum, quiz) => sum + quiz.duration, 0) / 60), // in minutes
    bestScore: Math.max(...quizHistory.map(quiz => quiz.score))
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <HistoryIcon className="w-8 h-8" />
          Quiz History
        </h1>
        <p className="text-muted-foreground">
          Track your learning progress and review past quizzes
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="quiz-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Quizzes</p>
                <p className="text-2xl font-bold text-primary">{stats.totalQuizzes}</p>
              </div>
              <Trophy className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold text-primary">{stats.averageScore}%</p>
              </div>
              <Trophy className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Time</p>
                <p className="text-2xl font-bold text-primary">{stats.totalTime}m</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Best Score</p>
                <p className="text-2xl font-bold text-primary">{stats.bestScore}%</p>
              </div>
              <Trophy className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="quiz-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search quiz history..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="score-high">Highest Score</SelectItem>
                <SelectItem value="score-low">Lowest Score</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Quiz History List */}
      <div className="space-y-4">
        {filteredHistory.map((quiz) => (
          <Card key={quiz.id} className="quiz-card hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-lg leading-tight">
                      {quiz.videoTitle}
                    </h3>
                    <Button variant="outline" size="sm" className="ml-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty}
                    </Badge>
                    <Badge variant="outline">
                      {quiz.totalQuestions} questions
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(quiz.completedAt)}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDuration(quiz.duration)}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground truncate">
                    {quiz.videoUrl}
                  </p>
                </div>

                <div className="text-right lg:text-center lg:min-w-[120px]">
                  <div className={`text-3xl font-bold ${getScoreColor(quiz.score)}`}>
                    {quiz.score}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {quiz.score >= 90 ? '🏆 Excellent' : 
                     quiz.score >= 75 ? '👍 Good' : 
                     '📚 Keep Learning'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <Card className="quiz-card">
          <CardContent className="p-12 text-center">
            <HistoryIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No quizzes found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? 
                "No quizzes match your search criteria. Try adjusting your search." :
                "You haven't completed any quizzes yet. Start learning today!"
              }
            </p>
            <Button>Create Your First Quiz</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
