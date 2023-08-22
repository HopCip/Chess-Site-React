import React, { useState } from 'react'
import questionsData from './questions.json'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const getCorrectAnswersCount = (selectedAnswers) => {
  return questionsData.filter((question, index) => {
    if (
      selectedAnswers[index] &&
      question.answers.find((answer) => answer.correct)
    ) {
      return (
        question.answers.find((answer) => answer.correct) ===
        selectedAnswers[index]
      )
    }
    return false
  }).length
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questionsData.length).fill(null)
  )
  const question = questionsData[currentQuestion]

  const handleAnswerClick = (answer) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestion] = answer
    setSelectedAnswers(newSelectedAnswers)

    // Po kliknutí na akúkoľvek odpoveď sa po krátkej pauze posuňte na ďalšiu otázku
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1)
    }, 1000)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questionsData.length).fill(null))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        gap: 4,
        marginY: 4,
      }}
    >
      {question && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
          <Typography variant="h5">{question.question}</Typography>
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
      {!question && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">
            Kvíz je dokončený! {getCorrectAnswersCount(selectedAnswers)} /{' '}
            {questionsData.length}
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
