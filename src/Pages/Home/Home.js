import React, {useState, useEffect} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts').then((res) => {
            return res.json()
        })
            .then(async (data) => {
                setPosts(data)
                console.log(data)
             })
    }, [])

    return (
        <div>
            <Header/>
            <div className="content">
                { posts.length > 0 ?
                    posts.map(item => {
                        const {id, title, author, img} = item;

                        return (
                            <div key={id}>
                                <img src={img} alt={title}/>
                                <h3>{title}</h3>
                                <p>{author}</p>
                            </div>
                        )
                    }) : 'Lox'
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Home;