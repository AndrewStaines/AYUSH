import React, { useState, useEffect } from 'react'
import img from '../assets/know.jpg'
import axios from 'axios';
import './Knowledge.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Knowledge() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:2000/api/items')
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(function (error) {
        alert(error.response.data)
        console.log(error);
      });
  }, []);
  const handleDownload = (abs, fileName) => {
    const blob = new Blob([data]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  };
  if (!data) {
    setData("No Abstracts")
  }
  const [isApprove, setisap] = useState(true);
  const [rating, setrat] = useState("");
  const [title, settitle] = useState("");
  const handleOnSubmit = async () => {
    console.log(rating, isApprove, title)
    setisap(true)
    let result = await fetch(
      'http://localhost:2000/update', {
      method: "PUT",
      body: JSON.stringify({ isApprove, rating, title }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    if (result) {
      alert("Message Sent To Investor");
      setrat("");
    }
    
  }

  return (
    // <>
    // <h1 className='fixed'>Ministry Of Ayush</h1>
    //       <div className=' w-1/2 h-full'>
    //           <img src={img} alt="" className='my-32 fixed h-3/5' />
    //           <div className='h-full w-1/3 bg-[#4461F2]' />
    //       </div>
    // <div className='container'>
    // <h2>Abstracts:</h2>
    // <ul type='none'>
    //   {data.map((item) => (
    //     <li key={item._id}>
    //       {/* <h2>{item.abstract}</h2> */}
    //       <h3 className='para'>{item.desc}</h3>
    //       {/* <button onClick={()=>handleDownload(item.abs.data,item.desc)} className='b2'>Download File</button><br/><br/> */}
    //       <input type="button" value="Download" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={()=>handleDownload(item.abstract.data,item.desc)} /> 
    //       <input type="text"value={rating} className="form-control border-success" onChange={(e) => setrat(e.target.value)} placeholder='Your rating out of 10' id='1'></input><br/><br/>
    //       <input type="button" value="Approve" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
    //       <h6>------------------------------------------------------------------------------------</h6>
    //     </li>
    //   ))}
    // </ul>
    // </div>
    // </>
    <> <div className='flex w-screen h-screen overflow-y-hidden'>
      <div className=' w-4/5 h-full '>
        <h1 className='absolute mt-32 ml-24 text-white'>Ministry Of Ayush</h1>
        <img src={img} alt="" className='mt-52 ml-10 absolute h-1/2 border-2 rounded-full' />
        <div className='h-full w-6/6 bg-[#4461F2] ' />
      </div>
      <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border-4 border-blue-500 ml-52 mt-20 mr-40 relative'>
        <ul className='h-full overflow-scroll m-12 py-12' id='scroll'>
          <h2>Abstracts:</h2><br />
          {data.map((item) => (
            <li key={item._id}>
              {/* <h2>{item.abstract}</h2> */}
              <h3 className='para'>{item.title}</h3>
              <p>{item.desc}</p>
              {/* <button onClick={()=>handleDownload(item.abs.data,item.desc)} className='b2'>Download File</button><br/><br/> */}
              <input type="text" value={item.rating} className="form-control border-success" onChange={(e) => { setrat(e.target.value); item.rating = e.target.value }} placeholder='Your rating out of 10' id='1'></input><br /><br />
              <input type="button" value="Download" className='bg-[#4461F2] text-xl px-6 py-3 font-bold  rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={() => handleDownload(item.abstract.data, item.desc)} />
              <input type="button" value="Approve" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={() => { settitle(item.title); handleOnSubmit() }} />
              <h6>------------------------------------------------------------------------------------</h6>
            </li>
          ))}
        </ul>
      </div>
    </div></>
  );
}

export default Knowledge