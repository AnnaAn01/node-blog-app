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
                        {/*<img src={Edit} alt="" />
    <img src={Delete} alt="" />*/}
                    </div>
                </div>
            </div>
            <div className="menu">m</div>
        </div>
    )
}

export default Single