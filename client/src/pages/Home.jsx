import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;
    // console.log(location);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData()
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img: "https://images.pexels.com/photos/7990901/pexels-photo-7990901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img: "https://images.pexels.com/photos/5806695/pexels-photo-5806695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img: "https://images.pexels.com/photos/5806696/pexels-photo-5806696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    //     },
    // ]

    // for editing the <p> tag in the article in home page

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home