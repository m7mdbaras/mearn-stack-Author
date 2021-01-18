import axios from 'axios'
import React, { useEffect, useState } from "react"
import AuthorList from '../components/AuthorList'

const Home = () => {
    const [authorz, setAuthorz] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then((res) => {
                setAuthorz(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return <div>
        <AuthorList data={authorz} />
    </div>
}
export default Home