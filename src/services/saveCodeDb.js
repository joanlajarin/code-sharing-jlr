import { useState } from "react"

export function saveCodeDb() {

    const [loading, setLoading] = useState(true)

    const postToDb = (postData) => {
        setLoading(true)
      //  const url = 'http://localhost:8000/api/code'
        const url = 'https://code-sharing-jlr.onrender.com/api/code'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then((response) => response.text())
        .then((data) => {
            console.log('Post successful:', data)
        })
        .catch((error) => {
            console.error('Error posting data:', error)
        })
        .finally(() => setLoading(false))
    }

    return { loading, postToDb }
}