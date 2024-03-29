import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment";

const Write = () => {
    const state = useLocation().state;
    // if there is a state use its title, if not, it means it's a new post, then use empty string
    const [value, setValue] = useState(state?.title || '');
    const [title, setTitle] = useState(state?.desc || '');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || '');
    const navigate = useNavigate();


    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await axios.post("/uploads", formData)
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = async e => {
        e.preventDefault();
        // adding the img url to our database
        const imgUrl = await upload();

        try {
            // if there is a state, it means it's an update page
            state ? await axios.put(`/posts/${state.id}`, {
                title, desc: value, cat, img: file ? imgUrl : ""
            }) : await axios.post(`/posts/`, {
                title, desc: value, cat, img: file ? imgUrl : "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            });
            navigate("/");

        } catch (err) {

        }

    }

    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" name="" id="file" onChange={e => setFile(e.target.files[0])} />
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1 className='h1-menu'>Category</h1>

                    <div className="cat">
                        <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Art</label></div>
                    <div className="cat">
                        <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="science">Science</label></div>
                    <div className="cat">
                        <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="technology">Technology</label></div>
                    <div className="cat">
                        <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="cinema">Cinema</label></div>
                    <div className="cat">
                        <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="design">Design</label></div>
                    <div className="cat">
                        <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write