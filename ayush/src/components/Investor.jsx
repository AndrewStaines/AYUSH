import React, { useState, useEffect } from 'react';
import img from '../assets/6884036.jpg'
import axios from 'axios';
function Investor() {
    const [good, setgood] = useState([]);
    const [bad, setbad] = useState([]);
    const [comment, setcom]= useState("");
    const [title, settitle] = useState("");
    const [display ,setdis]= useState(true)
    useEffect(() => {
        axios.get('http://localhost:2000/invest/items')
            .then((response) => {
                console.log(response.data);
                setgood(response.data.items1);
                setbad(response.data.items2);
                console.log(good);
                console.log(bad);
            })
            .catch(function (error) {
                alert(error.response.data)
                console.log(error);
            });

    }, []);
    const [isFunding , setfun]= useState(true)
    const handleOnSubmit = async () => {
        setfun(true)
        setdis(true)
        let result = await fetch(
          'http://localhost:2000/update1', {
          method: "PUT",
          body: JSON.stringify({ isFunding , comment ,title , display }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        if (result) {
          alert("User has been informed");
        }
        
      }
      const handleOnSubmit1 = async () => {
        setfun(false)
        setdis(true)
        let result = await fetch(
          'http://localhost:2000/update1', {
          method: "PUT",
          body: JSON.stringify({ isFunding , comment, title , display }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        result = await result.json();
        if (result) {
          alert("User has been Informed");
        }
        
      }
    return (
        <>
            <div className='flex w-screen h-screen overflow-y-hidden'>
                <div className=' w-4/5 h-full '>
                    <h1 className='absolute mt-32 ml-28 text-white'>Ministry Of Ayush</h1>
                    <img src={img} alt="" className='mt-52 ml-10 absolute h-1/2 border-2 rounded-full' />
                    <div className='h-full w-6/6 bg-[#4461F2] ' />
                </div>
                <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border-4 border-blue-500 ml-52 mt-20 mr-40 relative'>
                    <ul className='h-full w-full overflow-scroll m-12 py-12' id='scroll'>
                        <h1>Satisfied</h1><br />
                        {good.map((item) => (
                            <li key={item._id}>
                                <h3 className='para'>{item.title}</h3>
                                <p>{item.desc}</p>
                                <h3>Rating:</h3>
                                {item.rating}
                                <div className="mb-2">
                                <h3>Comments:</h3><br />
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={item.comment} onChange={(e) => setcom(e.target.value)}></textarea>
								</div>
                                <div className="flex gap-4">
                                <input type="button" value="Call for Meet" className='bg-[#4461F2] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#4461f280] text-center' onClick={() => { settitle(item.title); handleOnSubmit() }} />
              <input type="button" value="Reject" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={() => { settitle(item.title); handleOnSubmit1() }} /></div>
                                <hr className='w-full' />
                            </li>
                        ))}
                        <h1>Not-Satisfied</h1><br />
                        {bad.map((item) => (
                            <li key={item._id}>
                                <h3 className='para'>{item.title}</h3>
                                <p>{item.desc}</p>
                                <h3>Rating:</h3>
                                {item.rating}
                                <div className="mb-2">
                                <h3>Comments:</h3><br />
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={item.comment} onChange={(e) => { setcom(e.target.value); item.comment = e.target.value }}></textarea>
								</div>
                                <div className="flex gap-4">
                                <input type="button" value="Call for Meet" className='bg-[#4461F2] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#4461f280] text-center' onClick={() => { settitle(item.title); handleOnSubmit() }} />
              <input type="button" value="Reject" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={() => { settitle(item.title); handleOnSubmit1() }} /></div>
                                <hr className='w-full' />
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div></>


    );
}

export default Investor