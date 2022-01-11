import axios from "axios";
import { useQueries } from "react-query"; // useQuery almadık bu sefer

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(queryResults);
  return (
    <div>
      <h1>DynamicParallelPage</h1>
    </div>
  );
};
