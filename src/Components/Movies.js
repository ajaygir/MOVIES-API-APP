import React, { useState } from 'react'
import styles from './Movies.module.css'
import axios from 'axios'

const Movies = () => {
  const [movie, setmovie] =useState(null)
  const [inputvalue, setinputvalue] =useState ('')
  const [loading, setloading] =useState (false)

  const handlesubmit = async (e) =>{
    e.preventDefault();


   try{
    setloading(true)
    const res = await axios.get
   (` http://www.omdbapi.com/?apikey=3ab37d4f&t=${inputvalue}`)
    
    console.log(res.data)
    setmovie(res.data)
    setloading(false)
  }
  catch (err){
    console.log('err')
    setloading(false)
    setmovie(null)
  }

  }
  const onChange= (e)=>{
    setinputvalue(e.target.value)
  }


  return (
    <div className={styles.container}>

       <form onSubmit={handlesubmit}>
        <input type='text' placeholder='Search'  onChange ={onChange}/>
       </form>

       {loading === true ? (
        <p>Loading</p>
       ):(
         
        <div className={styles.card}>

          {movie === null ? (
          <p>Some Error Happend</p>
          ) : ( <>

          <div className={styles.row}>
            <h2>{movie.Title}</h2>
            <h3>{movie.Year}</h3>
            <h3>{movie.Released}</h3>
          </div>

          <div className={styles.row}>
            <p>Watch time: {movie.Runtime}</p>
            <p>{movie.Language}</p>
            <p>{movie.Director}</p>
          </div>
          </>
          )}
        </div>

    )}
      
    </div>
   
  )
}

export default Movies