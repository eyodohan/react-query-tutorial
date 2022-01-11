import React from "react";
import { useParams } from "react-router";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  console.log(heroId);

  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>super hero details</h2>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
