import { Link } from '@reach/router'
import { navigate } from "@reach/router"
import axios from "axios"

const Author = (props) => {
    const handleClick = (e) => {
        axios
            .delete("http://localhost:8000/api/authors/" + props.author._id)
            .then((res) => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <td>{props.author.name}</td>
            <td>
                <Link to={'/edit/' + props.author._id}><button>Edit</button></Link>
                <button onClick={handleClick}>Delete</button>
            </td>
        </>
    )
}

export default Author