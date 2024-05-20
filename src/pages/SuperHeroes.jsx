/* eslint-disable no-unused-vars */
import React from 'react'
import { useMutation } from 'react-query'

const SuperHeroes = () => {
  const {mutate} = useMutation({mutationFn: (newPost) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    bode: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json())});
  return (
    <div>
      <button
        onClick={() =>
          mutate({ userId: 101, id: 200, title: "hello", body: "world" })
        }
      >
        Add post
      </button>
      <h1>ID: </h1>
      <h1>Title: </h1>
    </div>
  );
}

export default SuperHeroes