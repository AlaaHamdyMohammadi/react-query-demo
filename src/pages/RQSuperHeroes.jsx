/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const RQSuperHeroes = () => {
  const {isLoading, data} = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes')
  })
  if(isLoading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </div>
  );
}

export default RQSuperHeroes