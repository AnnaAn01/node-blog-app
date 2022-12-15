import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/7990901/pexels-photo-7990901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/5806695/pexels-photo-5806695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: "https://images.pexels.com/photos/5806696/pexels-photo-5806696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
    ]


    return (
        <div className='home'>
            <div className='posts'>
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>

                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home