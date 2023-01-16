import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from "axios";
import moment from "moment";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    // we split the address with the /, but we have 2 /, so there are 3 items after the split. And we need the last part, the id number
    const postId = location.pathname.split("/")[2];
    // console.log(location.pathname)

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData()
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

    return (
        <div className='single'>
            <div className="content">
                {/*we added the ? after post?. so that if it's loading, it doesn't give us an error */}
                <img src={`../upload/${post?.img}`} alt="" />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {/* if currentuser equals post.username show me this div */}
                    {currentUser.username === post.username &&
                        <div className="edit">
                            <Link className='link edit' to={`/write?edit=2`} state={post}>
                                <FaEdit className='edit-icon' />
                            </Link>
                            <RiDeleteBinLine className='delete-icon' onClick={handleDelete} />
                        </div>}
                </div>
                <h1>{post.title}</h1>
                {/* we won't use a p tag for the desc because we are using rich editor and it already has a p tag */}
                {getText(post.desc)}
            </div>
            <Menu cat={post.cat} />
        </div>
    )
}

export default Single