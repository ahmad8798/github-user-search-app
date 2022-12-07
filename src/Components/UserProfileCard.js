import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function UserProfileCard() {

  const [apiData,SetApiData] = useState([])
  const getApiData = async()=>{
    const fetchData = await axios.get(`https://api.github.com/users/ahmad8798`)
    SetApiData(fetchData.data)
    console.log(apiData);
  }

  useEffect(()=>{
    getApiData()
  })
 let profileCreated = apiData.created_at
 let CorrectProfileCreated = profileCreated.split('T')
  return (
        <>
          <div className='container'>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                  <input type='text' placeholder='search Github userName Here' className='w-75 m-1 text-center border rounded'/>
                  <button className='btn btn-outline-primary m-1'>Search</button>
                </div>
                <div  className='col-12 d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center mt-3'>
                            <div className='My-card border rounded'>
                                <div className='card-row d-flex justify-content-center mt-3'>
                                  <img src={apiData.avatar_url} className='img-fluid mx-auto   img-thumbnail w-25'/>
                                  <a href={apiData.html_url} className='btn btn-primary w-25 mx-auto mt-5 h-25' target='_blank'>View Profile</a>
                                </div>
                                <div className='card-row d-flex justify-content-center mt-3 '>
      
                                <p className='mx-auto'><strong>Name:</strong> {apiData.name}</p>
                                <p className='mx-auto'><strong>Repositaries:</strong> {apiData.public_repos}</p>
                                <p className='mx-auto'><strong>Location:</strong> {apiData.location}</p>
                                
                              </div>
                              <div className='card-row d-flex justify-content-center mt-3 '>
      
                             <p><strong>Profile Created:</strong>{CorrectProfileCreated[0]}</p>
                                
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
