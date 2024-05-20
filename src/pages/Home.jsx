/* eslint-disable no-unused-vars */
import React from 'react'
import { useQuery } from 'react-query'

//https://jsonplaceholder.typicode.com/todos

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>{data.map(todo => <div key={todo.id}>{todo.title}</div>)}</div>
  )
}

export default Home