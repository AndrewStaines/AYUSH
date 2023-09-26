import React, { useState } from 'react'
import img from '../assets/login.png'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [domain, setDomain] = useState('');
    const [stream, setStream] = useState('');
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        if (password != confirmpassword) {
            alert("Password is not same")
            return
        }
        e.preventDefault();
        console.log("fndjkn")
        let result = await fetch(
            'http://localhost:4000/register', {
            method: "post",
            body: JSON.stringify({ email, password, domain, stream }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result)
        if (result?.stream) {
            console.log(result)
            if (result.stream == "startups") navigate('/home')
            // if(result.stream=="investors") navigate('/know')
            if (result.stream == "knowledge_partner") navigate('/know')

        }
        else {
            alert(result)
        }
    }
    return (
        <>
            <div className='flex w-screen h-screen overflow-y-hidden'>
                <div className=' w-4/5 h-full '>
                    <h1 className='absolute mt-52 ml-48 text-white'>Ministry Of Ayush</h1>
                    <img src={img} alt="" className='mt-72 ml-10 absolute h-1/2 border-0 rounded-full' />
                      <div className='h-full w-6/6 bg-[#4461F2] ' />
                </div>
                <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border- border-blue-500 ml-52 mt-32 mr-40 relative'>
                    <form >
                        <input type="text" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} className='bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none' />
                        <br />
                        <input type="text" value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} className='bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg focus:outline-none' />
                        <br />
                        <input type="text" value={confirmpassword} placeholder='Confrim Password' onChange={e => setConfirmpassword(e.target.value)} className='bg-[#EAF0F7] px-12 text-xl py-3  my-4 rounded-lg focus:outline-none' />
                        <br />
                        <select placeholder="Name" class="bg-[#EAF0F7] px-14 text-xl py-3 my-4 rounded-lg focus:outline-none" onChange={e => setStream(e.target.value)} >
                            <option value="">Select Stream</option>
                            <option value="startups">StartUps</option>
                            <option value="investors">Investors</option>
                            <option value="knowledge_partner">knowledge partner</option>

                        </select>
                        <br />
                        <input type="text" value={domain} placeholder='Domain' onChange={e => setDomain(e.target.value)} className='bg-[#EAF0F7] text-xl  px-12 py-3 my-4 rounded-lg focus:outline-none' />
                        <br />
                        <input type="button" value="login" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup