import react from 'react';
import axios from 'axios';

const linkexam = 'http://jsonplaceholder.typicode.com/posts';

function Posts(){
    const [posts, setPosts] = react.useState([]);

    react.useEffect(() =>{
        axios
            .get(linkexam)
            .then( (response) => setPosts(response.data));
    }, []);

    return (
        <ul className='posts'>
            {posts.map( post => (
                <li className = 'post' key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))};
        </ul>
    
    );

}

export default Posts;