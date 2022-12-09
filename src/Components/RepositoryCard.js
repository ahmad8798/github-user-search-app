import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function RepositoryCard() {
  const [apiData, setApiData] = useState([])
  const [searchValue, setSearchValue] = useState('react')
  const getData = async () => {
    const fetchData = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}{&page,per_page,sort,order}`)
    setApiData(fetchData.data.items)

  }
  useEffect(() => {
  
    getData()
  },[])
  

  function RepositoryCardComponent(props) {
    return (
      <div class="col-md-4 mt-3 mb-3">
      <div className="card mb-3 h-100 ">
        <div  className="card-header">
          {props.fullName}
        </div>
        <div  className="card-body">
          <h5  className="card-title">{props.name}</h5>
          <p  className="card-text">{props.description}</p>
          <a href={props.repoUrl} target='_blank' className="btn btn-primary">View Repositary</a>
        </div>
      </div>
    </div>

   


    )
  }



  return (

    <div className='container'>
      <div className='row my-row'>
        <div className='col-12 d-flex justify-content-center'>
          <input type='text' onChange={(e) => { setSearchValue(e.target.value); console.log(e.target.value) }} placeholder='search repositary' className='w-75 m-1 text-center border rounded'/>
          <button onClick={() => { getData(); console.log(apiData); console.log(apiData); }} className='btn btn-outline-primary m-1'>Search</button>
        </div>
        {
          apiData.map(val => {
            return <RepositoryCardComponent  fullName = {val.full_name} name={val.name} repoUrl={val.html_url} description={val.description} />
  
  
          })
        }
      </div>
     
    </div>
  )
}
