
export interface Quiz {
  id: string
  title: string
  videoUrl: string
  videoTitle: string
  questions: QuizQuestion[]
  createdAt: string
  completedAt?: string
  score?: number
  totalQuestions: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  userAnswer?: number
  timeSpent?: number
}

export interface QuizHistory {
  id: string
  videoUrl: string
  videoTitle: string
  score: number
  totalQuestions: number
  completedAt: string
  duration: number
}

export interface UserPreferences {
  defaultQuestionCount: number
  difficulty: 'easy' | 'medium' | 'hard'
  autoPlay: boolean
  showExplanations: boolean
  theme: 'light' | 'dark'
}
