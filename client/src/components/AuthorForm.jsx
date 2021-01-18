import { Link } from '@reach/router'
const AuthorForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="border border-dark col-6">
            <p>
                name
        <input className="form-control col-8"
                    name="name"
                    value={props.formInputs.name}
                    onChange={props.handleChange}
                />
            </p>
            <button type="submit">{props.buttonText}</button>
            <button type="submit"><Link to={'/'}>cancel</Link></button>
            
        </form>
    )
}

export default AuthorForm