import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function UserProfileCard() {


  const [apiData, SetApiData] = useState([])
  const [user, setUser] = useState('ahmad8798')
  
 
   const getApiData = async () => {
    const fetchData = await axios.get(`https://api.github.com/users/${user}`)
    SetApiData(fetchData.data)
    console.log(apiData);
  }
  useEffect(()=>{
    
        getApiData()
        Aos.init({ duration: 500 })
  },[])


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <input onChange={(e) => setUser(e.target.value)} type='text' placeholder='search Github userName Here' className='w-75 m-1 text-center border rounded' />
            <button  onClick={()=>getApiData()} className='btn btn-outline-primary m-1'>Search</button>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-center mt-3'>
                <div data-aos="fade-down-left" className='My-card border rounded w-100'>
                  <div className='card-row d-flex justify-content-center mt-3'>
                    <img src={apiData.avatar_url} className='img-fluid mx-auto  w-25 h-25 border rounded-circle' />
                    <a href={apiData.html_url} className='btn btn-outline-secondary profile-btn mx-auto mt-4 w-50 h-25' target='_blank'>View Profile</a>
                  </div>
                  <div className='card-row d-flex justify-content-center mt-3 '>

                    <p className='mx-auto'><strong>{apiData.login}</strong></p>
                    <p className='mx-auto'><strong>Repositaries: </strong>{apiData.public_repos}</p>


                  </div>
                  <div className='card-row d-flex justify-content-center mt-3 '>
                    
                    <p className='mx-auto'><strong>Profile Created:</strong>{apiData.created_at}</p>
                 </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
