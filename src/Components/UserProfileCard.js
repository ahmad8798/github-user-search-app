import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function UserProfileCard() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  })

  const [apiData, SetApiData] = useState([])
  const [user, setUser] = useState()
  const [display, setDisplay] = useState('hidden')
  const getApiData = async () => {
    const fetchData = await axios.get(`https://api.github.com/users/${user}`)
    SetApiData(fetchData.data)
    console.log(apiData);
  }




  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <input onChange={(e) => setUser(e.target.value)} type='text' placeholder='search Github userName Here' className='w-75 m-1 text-center border rounded' />
            <button onClick={() => { getApiData(); setDisplay('show') }} className='btn btn-outline-primary m-1'>Search</button>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-center mt-3'>
                <div data-aos="fade-down-left" className={`My-card border rounded w-100 ${display}`}>
                  <div className='card-row d-flex justify-content-center mt-3'>
                    <img src={apiData.avatar_url} className='img-fluid mx-auto   img-thumbnail w-25' />
                    <a href={apiData.html_url} className='btn btn-primary w-25 mx-auto mt-5 h-25' target='_blank'>View Profile</a>
                  </div>
                  <div className='card-row d-flex justify-content-center mt-3 '>

                    <p className='mx-auto'><strong>User Name:</strong> {apiData.login}</p>
                    <p className='mx-auto'><strong>Repositaries:</strong> {apiData.public_repos}</p>


                  </div>
                  <div className='card-row d-flex justify-content-center mt-3 '>
                    <p className='mx-auto'><strong>Location:</strong>{apiData.location}</p>
                    <p className='mx-auto'><strong>Created:</strong>{apiData.created_at}</p>

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
