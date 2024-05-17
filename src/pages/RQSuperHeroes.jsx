/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes1");
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroes;
