import {
  Link
} from "react-router-dom"

export const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  // Exercise 7.1 - Part 1
  return (
    <div>
      <Link style={padding} to="/anecdotes">anecdotes</Link>
      <Link style={padding} to="/create">create new</Link>
      <Link style={padding} to="/about">about</Link>
    </div>
  )
}