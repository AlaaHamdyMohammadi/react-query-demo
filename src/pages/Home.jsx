/* eslint-disable no-unused-vars */
import React from 'react'
import { useQuery } from 'react-query'

//https://jsonplaceholder.typicode.com/todos

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
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
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <h1>ID: {todo.id}</h1>
          <h1>Title: {todo.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Home