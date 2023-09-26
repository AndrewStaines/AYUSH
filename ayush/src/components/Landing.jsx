import React from "react";
import img from '../assets/lad.jpg'
import log from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col  items-center justify-center gap-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})` }}>
                <div><img src={log} className="rounded-xl "></img></div>
                <div className="text-4xl  font-bold mx-32 text-center text-white">"India is a treasure trove of herbal plants, it is, in a way our Green Gold".
                    Shri Narendra Modi</div>
                <div className="flex gap-4">
                    <Link className="bg-[#4461F2] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#4461f280] text-center" to='/signup'>Signup</Link>
                    <Link className="bg-[#4461F2] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#4461f280] text-center" to='/login'>Login</Link>
                </div>
            </div>
        </>
    )
}

export default Landing