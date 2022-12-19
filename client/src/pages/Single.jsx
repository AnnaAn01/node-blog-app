import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/7990901/pexels-photo-7990901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link className='link edit' to={`/write?edit=2`}>
                            <FaEdit className='edit-icon' />
                        </Link>
                        <RiDeleteBinLine className='delete-icon' />

                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum modi quo et quam autem velit, perspiciatis possimus ut similique mollitia rerum molestiae adipisci eos eveniet tempore rem repellat iusto architecto sit voluptatum vero. Ex, architecto quas! Impedit sapiente, nulla velit atque incidunt modi voluptate ducimus voluptas illo obcaecati nobis, eveniet, repellat quam inventore. Minus enim, consequatur similique voluptate nulla iusto quas! Quos dicta quia illo adipisci exercitationem aperiam tempore, provident deleniti dolores libero magni commodi sed corrupti perferendis eaque laudantium culpa tenetur vel est explicabo! Facilis at explicabo aliquid reiciendis voluptatibus nihil a assumenda ipsam. Qui ipsam cumque dolor.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum modi quo et quam autem velit, perspiciatis possimus ut similique mollitia rerum molestiae adipisci eos eveniet tempore rem repellat iusto architecto sit voluptatum vero. Ex, architecto quas! Impedit sapiente, nulla velit atque incidunt modi voluptate ducimus voluptas illo obcaecati nobis, eveniet, repellat quam inventore. Minus enim, consequatur similique voluptate nulla iusto quas! Quos dicta quia illo adipisci exercitationem aperiam tempore, provident deleniti dolores libero magni commodi sed corrupti perferendis eaque laudantium culpa tenetur vel est explicabo! Facilis at explicabo aliquid reiciendis voluptatibus nihil a assumenda ipsam. Qui ipsam cumque dolor.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum modi quo et quam autem velit, perspiciatis possimus ut similique mollitia rerum molestiae adipisci eos eveniet tempore rem repellat iusto architecto sit voluptatum vero. Ex, architecto quas! Impedit sapiente, nulla velit atque incidunt modi voluptate ducimus voluptas illo obcaecati nobis, eveniet, repellat quam inventore.
                </p>
            </div>
            <div className="menu">m</div>
        </div>
    )
}

export default Single