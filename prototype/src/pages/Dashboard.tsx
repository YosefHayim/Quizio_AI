
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Youtube, Trophy, Clock, BookOpen, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalQuizzes: 24,
    averageScore: 85,
    totalTime: 180, // minutes
    streak: 7
  }

  const recentQuizzes = [
    {
      id: '1',
      title: 'Introduction to React Hooks',
      score: 90,
      totalQuestions: 10,
      completedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'JavaScript ES6 Features',
      score: 75,
      totalQuestions: 8,
      completedAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'CSS Grid Layout Tutorial',
      score: 95,
      totalQuestions: 12,
      completedAt: '2024-01-13'
    }
  ]

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Ready to learn something new today?
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="quiz-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalQuizzes}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.averageScore}%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalTime}m</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.streak}</div>
            <p className="text-xs text-muted-foreground">days in a row</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="quiz-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-primary" />
              Create New Quiz
            </CardTitle>
            <CardDescription>
              Turn any YouTube video into an interactive learning experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/quiz">
              <Button className="w-full">
                Start New Quiz
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="quiz-card">
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
            <CardDescription>Your learning journey this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Weekly Goal</span>
                <span>7/10 quizzes</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Average Score</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Quizzes */}
      <Card className="quiz-card">
        <CardHeader>
          <CardTitle>Recent Quizzes</CardTitle>
          <CardDescription>Your latest learning activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentQuizzes.map((quiz) => (
              <div key={quiz.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{quiz.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    Completed on {new Date(quiz.completedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">
                    {quiz.score}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {quiz.totalQuestions} questions
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/history">
              <Button variant="outline">View All History</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
