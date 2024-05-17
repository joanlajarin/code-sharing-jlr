import {useEffect, useState} from "react"

export function getCodeDb(linkId) {

    const [codeDb, setDataDb] = useState(null)
    const [loading, setLoading] = useState(true)

  //  const url = `http://localhost:8000/api/code/${linkId}`
    const url = `https://code-sharing-jlr.onrender.com/api/code/${linkId}`

    useEffect(() => {
        console.log("Searching for data")
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setDataDb(data), console.log(data)})
            .finally(() => setLoading(false))
    },[])

     return {codeDb, loading}
}