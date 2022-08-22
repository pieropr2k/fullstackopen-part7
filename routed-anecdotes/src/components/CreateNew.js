import { useState } from 'react'
import {
    useNavigate
} from "react-router-dom"
import { useField } from '../hooks'

export const CreateNew = (props) => {
    const navigate = useNavigate();
    // Exercise 7.4
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    // Exercise 7.5
    const [isReset, setIsReset] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isReset) {
            //console.log('reset')
            content.reset()
            author.reset()
            info.reset()
            setIsReset(false)
        } else {
            props.addNew({
                content: content.value,
                author: author.value,
                info: info.value,
                votes: 0
            })
            // Exercise 7.3 - Part 2
            navigate('/anecdotes')
        }
    }
    // Exercise 7.6
    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input
                        name='content'
                        {...content}
                        reset=''
                    />
                </div>
                <div>
                    author
                    <input
                        name='author'
                        {...author}
                        reset=''
                    />
                </div>
                <div>
                    url for more info
                    <input
                        name='info'
                        {...info}
                        reset=''
                    />
                </div>
                <button>create</button>
                <button onClick={() => setIsReset(true)}>reset</button>
            </form>
        </div>
    )
}
