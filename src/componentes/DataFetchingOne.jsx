import React, {useState, useEffect } from 'react'
import Axios from 'axios'

export default DataFechingOne =>{

    const[loading, setLoading] = useState(true)
    const[error, setError] = useState('')
    const[post, setPost] = useState({})

    useEffect(() =>{
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong! ')
            })
    },[])
    return(
        <>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
        </>
    )
}