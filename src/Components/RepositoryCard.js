import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aos from 'aos'
export default function RepositoryCard() {

  useEffect(() => {
    Aos.init({ duration: 500 })
  })
  function RepositoryCardComponent(props) {
    return (


      <div data-aos='fade-down-left' className='row card-row border mt-4'>
        <div className='col-7 d-flex justify-content-center mt-3'>
          <p><strong>{props.name}</strong></p>


        </div>
        <div className='col-5 d-flex justify-content-center mt-3'>
          <a href={props.repoUrl} target='_blank' className='btn btn-primary h-100'>view repositary</a>

        </div>
        <div className='col-12 d-flex justify-content-center'>
          <p><strong>Owner:</strong>{props.owner}</p>
        </div>

      </div>


    )
  }

  const [apiData, setApiData] = useState([])
  const [searchValue, setSearchValue] = useState()
  const getData = async () => {
    const fetchData = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}{&page,per_page,sort,order}`)
    setApiData(fetchData.data.items)

  }

  return (

    <div className='container'>
      <div className='row my-row'>
        <div className='col-12 d-flex justify-content-center'>
          <input type='text' onChange={(e) => { setSearchValue(e.target.value); console.log(e.target.value) }} placeholder='search repositary' className='w-75 m-1 text-center border rounded' />
          <button onClick={() => { getData(); console.log(apiData); console.log(apiData); }} className='btn btn-outline-primary m-1'>Search</button>
        </div>
      </div>
      {
        apiData.map(val => {
          return <RepositoryCardComponent name={val.name} repoUrl={val.html_url} owner={val.owner.login} />


        })
      }
    </div>
  )
}
