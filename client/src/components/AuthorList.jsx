import AuthorSingle from './AuthorSingle';
import { Link } from '@reach/router'
const Authorslist = (props) => {
    return (
        <div>
            <h1>Favourit Authors</h1>
            <Link to={'/new/'}>Add an Author</Link>
            <p>We have quotes by:</p>
            <table class="table table-bordered col-7 ">
                <thead class="thead-light">
                    <tr>
                        <th>Author</th>
                        <th>Ations Available</th>
                    </tr>
                </thead>
                <tbody>
            {props.data.length > 0 &&
            props.data.map((author) => 
            <tr>
            <AuthorSingle key={author._id} author={author}/>
            </tr>
            )}
            </tbody>
            </table>
        </div>
    )
}
export default Authorslist;