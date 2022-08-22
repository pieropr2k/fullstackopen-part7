import { useParams } from "react-router-dom"

// Exercise 7.2 - Part 1
export const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    const anecdote = anecdotes.find(n => n.id === Number(id))
    return (
      <div>
        <h2>{`${anecdote.content} by ${anecdote.author}`}</h2>
        <p>{`has ${anecdote.votes} votes`}{anecdote.user}</p>
        <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
      </div>
    )
  }