import { navigate } from "@reach/router"
import axios from "axios"
import { useState } from "react"
import AuthorForm from "../components/AuthorForm"

const New = (props) => {
    const [errors, setErrors] = useState([])
    const [formInputs, setFormInputs] = useState({
        name: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/author/", formInputs)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors // Get the errors from err.response.data
                const errorArr = [] // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
    }

    const handleChange = (e) => {
        console.log("e.target.name: ", e.target.name)
        console.log("e.target.value: ", e.target.value)

        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h1>Favorite author</h1>
            <a href="/">Home</a>
            <p>Add a new author:</p>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm
                formInputs={formInputs}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText={"create"}
            />
        </div>
    )
}
export default New