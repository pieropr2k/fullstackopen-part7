import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom"
import { About } from './components/About'
import { Anecdote } from './components/Anecdote'
import { AnecdoteList } from './components/AnecdoteList'
import { CreateNew } from './components/CreateNew'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    // Exercise 7.3 - Part 3
    popUpAdvicer(`a new anecdote ${anecdote.content} created!`)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  // Exercise 7.3 - Part 4
  const popUpAdvicer = (text) => {
    setNotification(text)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  // Exercise 7.1 - Part 2
  // Exercise 7.2 - Part 2
  return (
    <div>
      <Router>
        <h1>Software anecdotes</h1>
        <Menu />
        <Routes>
          <Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} notification={notification} />} />
          <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
