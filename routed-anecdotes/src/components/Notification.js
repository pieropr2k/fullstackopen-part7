
// Exercise 7.3 - Part 1
export const Notification = ({ message }) => {
    if (message === '') {
      return null
    }
    return (
      <div>{message}</div>
    )
  }