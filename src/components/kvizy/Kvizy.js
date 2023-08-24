import React, { useState, useMemo } from 'react'
import questionsData from './questions.json'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'

const shuffleQuestions = (questions) => {
  const shuffled = [...questions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10)
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  const handleSliderChange = (event, newValue) => {
    setSelectedQuestionCount(newValue)
  }

  const startQuiz = () => {
    const maxQuestionCount = questionsData.length
    const validQuestionCount = Math.min(selectedQuestionCount, maxQuestionCount)

    const initialSelectedAnswers = Array(validQuestionCount).fill(null)
    setSelectedAnswers(initialSelectedAnswers)

    setCurrentQuestion(0)
    setShuffledQuestions(shuffleQuestions(questionsData))
    setQuizStarted(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShuffledQuestions(shuffleQuestions(questionsData))
    setQuizStarted(false)
  }

  const question = shuffledQuestions[currentQuestion]

  const handleAnswerClick = (answer) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestion] = answer
    setSelectedAnswers(newSelectedAnswers)

    setTimeout(() => {
      if (currentQuestion + 1 < selectedQuestionCount) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setCurrentQuestion(null)
      }
    }, 1000)
  }

  const getCorrectAnswersCount = (selectedAnswers) => {
    return selectedAnswers.filter((selectedAnswer, index) => {
      const question = shuffledQuestions[index]
      return (
        selectedAnswer &&
        question.answers.find((answer) => answer.correct) === selectedAnswer
      )
    }).length
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 4,
        marginY: 4,
      }}
    >
      {!quizStarted && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            boxShadow: 4,
            backgroundColor: 'white',
            borderRadius: 8,
            width: 550,
            height: 550,
            paddingY: 3,
          }}
        >
          <Box>
            <Typography variant="h2">Otestuj sa!</Typography>
          </Box>
          <Box>
            <Typography variant="h4">Vyber si počet otázok</Typography>
            <Box width={300}>
              <Slider
                id="slider"
                defaultValue={10}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={5}
                min={5}
                max={20}
                onChange={handleSliderChange}
                marks={[
                  { value: 5, label: '5' },
                  { value: 10, label: '10' },
                  { value: 15, label: '15' },
                  { value: 20, label: '20' },
                ]}
              />
            </Box>
          </Box>
          <Button variant="contained" onClick={startQuiz}>
            Spustiť kvíz
          </Button>
        </Box>
      )}

      {quizStarted && question && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            padding: 4,
            boxShadow: 4,
            backgroundColor: 'white',
            borderRadius: 8,
          }}
        >
          <img
            src={question.image}
            alt="Question"
            style={{ maxWidth: '400px' }}
          />
          <Typography variant="h5">
            Otázka {currentQuestion + 1}: {question.question}
          </Typography>
          <Box>
            {question.answers.map((answer) => (
              <Button
                key={answer.id}
                variant="contained"
                onClick={() => handleAnswerClick(answer)}
                sx={{
                  width: '100%',
                  marginBottom: 2,
                  backgroundColor:
                    selectedAnswers[currentQuestion] === answer
                      ? answer.correct
                        ? 'green'
                        : 'red'
                      : 'default',
                  color: 'white',
                  '&:hover': {
                    backgroundColor:
                      selectedAnswers[currentQuestion] === answer
                        ? answer.correct
                          ? 'green'
                          : 'red'
                        : 'default',
                  },
                }}
              >
                {answer.text}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {quizStarted && currentQuestion === null && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">
            Kvíz je dokončený! {getCorrectAnswersCount(selectedAnswers)} /{' '}
            {selectedQuestionCount}
          </Typography>
          <Button
            variant="contained"
            onClick={restartQuiz}
            sx={{ marginTop: 2 }}
          >
            Spustiť kvíz znova
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Quiz
