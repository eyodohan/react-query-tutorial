import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    { staleTime: 0 } //sayfa 30 saniye boyunca (default olarak 0 ms) fetch işlemi yapmaz (eğer sayfada değişiklik ol madığını biliyorsak güzel bir özellik)
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroesPage </h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
