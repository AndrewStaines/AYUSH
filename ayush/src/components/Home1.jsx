import React, { useState,useEffect } from 'react'
import axios from 'axios';

import img from '../assets/know.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home1() {	
    const [data, setData] = useState([]);
    const [data1,SetData1] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:2000/cnfm/items')
        .then((response) => {
          console.log(response.data);
          setData(response.data.items1)
          SetData1(response.data.items2)
        })
        .catch(function (error) {
          alert(error.response.data)
          console.log(error);
        });
    }, []);
	return (
		// 		<center>
		// 			<div className='bg-primary.bg-gradient'>
		// 				<h1>Ministry Of Ayush</h1>
		// 				<div className='content'>
		// 					<form action="">
		// 					<div className="mb-3">
		//   <label for="formFile" className="form-label">Abstract</label><br/>
		//   <input className="form-control" type="file" id="formFile" value={abstract} onChange={(e) => setabstract(e.target.value)}></input>
		// </div>
		// <input type="text"value={domain} onChange={(e) => setdom(e.target.value)} placeholder='Domain of the Paper' id='0'></input><br/><br/>
		// 						<div className="mb-2">
		//   <label for="exampleFormControlTextarea1" className="form-label">Description</label><br/>
		//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
		// </div>
		// 						<div className=''>
		// 						<input type="button" value="Post" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
		// 						</div>
		// 					</form>
		// 				</div>
		// 			</div>

		// 		</center>
		<>
			<div className='flex w-screen h-screen overflow-y-hidden'>
				<div className=' w-4/5 h-full '>
					<h1 className='absolute mt-32 ml-24 text-white'>Ministry Of Ayush</h1>
					<img src={img} alt="" className='mt-52 ml-10 absolute h-1/2 border-2 rounded-full' />
					<div className='h-full w-6/6 bg-[#4461F2] ' />
				</div>
				<div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border-4 border-blue-500 ml-52 mt-20 mr-40 relative'>
                <ul className='h-full overflow-scroll m-12 py-12' id='scroll'>
          <h1>Conformation</h1><br />
          {data.map((item) => (
            <li key={item._id}>
                <div className='bg-lime-400 p-12 border-8 border-lime-400 rounded-full'>
                <h3 className='underline underline-offset-1 ' >Title:</h3>
                <h4>{item.title}</h4>
                <h3 className='underline underline-offset-1'>Comments:</h3>
                <h4>{item.comment}</h4>
                </div>
                <br />
            </li>
          ))}
          {data1.map((item) => (
            <li key={item._id}>
                <div className='bg-red-600 p-12 border-8 border-red-600 rounded-full'>
                <h3 className='underline underline-offset-1 ' >Title:</h3>
                <h4>{item.title}</h4>
                <h3 className='underline underline-offset-1'>Comments:</h3>
                <h4>{item.comment}</h4>
                </div>
                <br />
            </li>
          ))}
        </ul>
				</div>
			</div></>
	);
}

export default Home1