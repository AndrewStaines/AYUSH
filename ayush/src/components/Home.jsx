import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/know.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
	const [abstract, setabstract] = useState([]);
	const [desc, setdesc] = useState("");
	const [title, settitle] = useState("");
	const handleOnSubmit = async (e) => {
		let result = await fetch(
			'http://localhost:2000/register', {
			method: "post",
			body: JSON.stringify({ abstract, desc, title }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		if (result) {
			alert("Data saved succesfully");
			setabstract("")
			setdesc("")
			settitle("")
		}

	}
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
					<div className='bg-primary.bg-gradient'>
						<h1>Ministry Of Ayush</h1>
						<div className='content'>
							<form action="">
								<div className="mb-3">
									<h2 for="formFile" className="form-label text-x1 mt-4">Abstract</h2><br />
									<input className="form-control" type="file" id="formFile" value={abstract} onChange={(e) => setabstract(e.target.value)}></input>
								</div>
								<input type="text" value={title} className='border-solid border-2 border-black-500 px-2' onChange={(e) => settitle(e.target.value)} placeholder='Title of the Paper' id='0'></input><br /><br />
								<div className="mb-2">
									<label for="exampleFormControlTextarea1" className="form-label">Description</label><br />
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
								</div>
								<div className=''>
									<Link type="button" value="Post" className='bg-[#4461F2] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-white shadow-xl cursor-pointer hover:shadow-[#4461f280] text-center' onClick={handleOnSubmit} to='/home/cnfm'>Post</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div></>
	);
}

export default Home