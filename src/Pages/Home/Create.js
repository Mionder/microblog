import React, {useState, useEffect} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const CreatePage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');

    return(
        <div>
            <Header />
            <div>
                <div className="input-wrapper">
                    <label htmlFor="title">Enter title</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value) }/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="author">Enter author</label>
                    <input type="text" id="author" onChange={(e) => setAuthor(e.target.value) }/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="img">Enter Img</label>
                    <input type="file" accept="image/*" id="img" onChange={(e) => setImg(e.target.value) }/>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default CreatePage;