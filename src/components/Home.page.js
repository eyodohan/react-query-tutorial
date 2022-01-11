import React from "react";
// import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const HomePage = () => {
  // const onSuccess = (data) => {
  //   console.log(data);
  // };

  // const onError = (error) => {
  //   console.log(error);
  // };

  // const { refetch, data, isError, error, isLoading, isFetching } =
  //   useSuperHeroesData(onSuccess, onError, false);

  // if (isLoading || isFetching) {
  //   return <h2>Loading...</h2>;
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>;
  // }

  return (
    <div>
      <h1>home page</h1>
      {/* <button onClick={refetch}>fetch Heroes</button>
      {data?.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </div>
  );
};

export default HomePage;
