
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, Trophy, Clock, Youtube } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  points: number
}

interface QuizData {
  title: string
  videoId: string
  questions: Question[]
  totalPoints: number
}

// Mock quiz data - in a real app this would come from props/API
const mockQuizData: QuizData = {
  title: "JavaScript Fundamentals",
  videoId: "dQw4w9WgXcQ",
  questions: [
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 2,
      question: "Which method is used to add an element to the end of an array?",
      options: ["append()", "push()", "add()", "insert()"],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 3,
      question: "What does '===' operator do in JavaScript?",
      options: ["Assigns a value", "Compares values only", "Compares values and types", "Creates a variable"],
      correctAnswer: 2,
      points: 15
    },
    {
      id: 4,
      question: "How do you create a function in JavaScript?",
      options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 5,
      question: "What is the result of '2' + 2 in JavaScript?",
      options: ["4", "22", "Error", "undefined"],
      correctAnswer: 1,
      points: 15
    }
  ],
  totalPoints: 60
}

export default function QuizTaking() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(mockQuizData.questions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  // Timer effect
  useEffect(() => {
    if (!showResults) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [showResults])

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < mockQuizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    let totalScore = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === mockQuizData.questions[index].correctAnswer) {
        totalScore += mockQuizData.questions[index].points
      }
    })
    setScore(totalScore)
    setShowResults(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((currentQuestion + 1) / mockQuizData.questions.length) * 100

  if (showResults) {
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === mockQuizData.questions[index].correctAnswer
    ).length

    return (
      <div className="p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            <CardDescription>Great job! Here are your results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Score</p>
                <p className="text-2xl font-bold text-primary">{score}/{mockQuizData.totalPoints}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Correct</p>
                <p className="text-2xl font-bold text-green-600">{correctAnswers}/{mockQuizData.questions.length}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-bold text-blue-600">{Math.round((correctAnswers / mockQuizData.questions.length) * 100)}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="text-2xl font-bold text-orange-600">{formatTime(timeElapsed)}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Question Review</h3>
              {mockQuizData.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index]
                const isCorrect = userAnswer === question.correctAnswer
                
                return (
                  <div key={question.id} className="border rounded-lg p-4 text-left">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      )}
                      <div className="flex-1 space-y-2">
                        <p className="font-medium">{question.question}</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-green-600">
                            ✓ Correct: {question.options[question.correctAnswer]}
                          </p>
                          {!isCorrect && userAnswer !== null && (
                            <p className="text-red-600">
                              ✗ Your answer: {question.options[userAnswer]}
                            </p>
                          )}
                          {userAnswer === null && (
                            <p className="text-orange-600">⚠ Not answered</p>
                          )}
                        </div>
                        <Badge variant="outline">+{question.points} points</Badge>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/quiz')}>
                Create New Quiz
              </Button>
              <Button variant="outline" onClick={() => navigate('/history')}>
                View History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQ = mockQuizData.questions[currentQuestion]

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Youtube className="w-6 h-6 text-primary" />
          <div>
            <h1 className="text-xl font-bold">{mockQuizData.title}</h1>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {mockQuizData.questions.length}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {formatTime(timeElapsed)}
          </div>
          <Badge variant="outline">
            {score} / {mockQuizData.totalPoints} points
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground text-center">
          {Math.round(progress)}% Complete
        </p>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Question {currentQuestion + 1}</span>
            <Badge>+{currentQ.points} points</Badge>
          </CardTitle>
          <CardDescription className="text-lg font-medium text-foreground">
            {currentQ.question}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedAnswers[currentQuestion]?.toString() || ""}
            onValueChange={(value) => handleAnswerSelect(parseInt(value))}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {currentQuestion === mockQuizData.questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswers[currentQuestion] === null}
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === null}
                >
                  Next Question
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Navigation */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {mockQuizData.questions.map((_, index) => (
              <Button
                key={index}
                variant={currentQuestion === index ? "default" : selectedAnswers[index] !== null ? "secondary" : "outline"}
                size="sm"
                onClick={() => setCurrentQuestion(index)}
                className="w-10 h-10"
              >
                {index + 1}
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Click on a question number to jump to it
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
