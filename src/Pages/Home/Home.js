import React, {useState, useEffect} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {Link} from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        fetch('http://localhost:3000/posts').then((res) => {
            return res.json()
        })
            .then(async (data) => {
                setPosts(data)
            })
    }

    const deletePost = (postId) => {
        console.log(postId)
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE',
        }).then(() => {
            getPosts()
        })
    }

    const editPost = (postId) => {
        localStorage.setItem('id', postId);
    }

    return (
        <div>
            <Header/>
            <div className="content container">
                <div className="blog-wrapper">
                    {posts.length > 0 ?
                        posts.map(item => {
                            const {id, title, author, img} = item;

                            return (
                                <div className="blog" key={id}>
                                    <img className="blog_img" src={img} alt={title}/>
                                    <h3 className="blog_title">{title}</h3>
                                    <p className="blog_author">Author: {author}</p>
                                    <svg onClick={() => deletePost(id)} width="32px" height="32px" aria-hidden="true"
                                         focusable="false" data-prefix="fas" data-icon="trash-alt"
                                         className="svg-inline--fa fa-trash-alt fa-w-14" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                              d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                    </svg>
                                    <Link onClick={() => {editPost(id)}} to={`/edit/${id}`}>
                                        <svg width="32px" height="32px" aria-hidden="true" focusable="false"
                                             data-prefix="fas" data-icon="pencil-alt"
                                             className="svg-inline--fa fa-pencil-alt fa-w-16" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="#000"
                                                  d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            )
                        }) : 'No posts here'
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;