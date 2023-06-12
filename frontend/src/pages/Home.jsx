import React, { useState, useEffect } from 'react'
import CarCard from '../component/CarCard'
import axios from 'axios'

const Home = () => {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/car/allcardetails', {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
        setAllCars(response.data.allCar);
      } catch (error) {
        console.log(error);
        window.alert("Some error from backend");
      }
    }
    getData();
  }, [])


  return (
    <div className='homeContainer'>
      <div className='allCars'>
        <CarCard allCars={allCars} />
      </div>
    </div>
  )
}

export default Home;