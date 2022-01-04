import React, {useState, useEffect} from "react";

const EditPage = () => {
    const [post, setPost] = useState({})

    useEffect(()=> {
        const id = localStorage.getItem('id');
        fetch(`http://localhost:3000/posts/${id}`).then((res)=>{
            return res.json();
        }).then(data => {
            console.log(data)
            setPost(data);
        })
        console.log(post)
    }, [])

    const onChangeTitle = async (value) => {
        const postLocal = {...post};
        postLocal.title = value;
        await setPost(postLocal);
        console.log(post)
    }

    return(
        <div>
            <img src={post.img} alt={post.title}/>
            <input type="file" accept="image/*"/>
            <input type="text" name="title" onChange={(e) => onChangeTitle(e.target.value)}/>
            <input type="text" name="author" />
        </div>
    )
}

export default EditPage