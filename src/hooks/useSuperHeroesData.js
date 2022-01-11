import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError, enabled = true) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    enabled,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

//   const dbLengthChangeOrError = (data) => {
//     if (data?.data.length !== 4) {
//       return false;
//     }
//     return 3000;
//   };

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     "super-heroes", // unique key olmak zorunda burası
//     fetchSuperHeroes, // fonksiyon vermeliyiz ikinci parametre olarak
//     // { staleTime: 0 } sayfa 30 saniye boyunca (default olarak 0 ms) fetch işlemi yapmaz (eğer sayfada değişiklik ol madığını biliyorsak güzel bir özellik)
//     {
//       // refetchOnMount: true, default olarak true , false seçildiğinde tekrar sayfaya gelindiğinde fetch işlemini yenilemez
//       // refetchOnWindowFocus: true, db de değişiklik olursa, sayfaya gelindiğinde otomatik bilgi güncellenir. refresh e gerek kalmaz.
//       // refetchInterval: 2000, // zaman değeri verilerek tekrar tekrar fetch işlemi yaptırılır
//       // refetchIntervalInBackground: true, // sayfaya focus olmadan da fetch işlemi devam ediyor
//       // enabled: false, // sayfaya geldiğimizde fetch işlemi yapılmaz Bunun amacı bir butona basıldığında fetch işlemini yaptırmak olabilir
//       //onSuccess: onSuccess, es6 ya göre property ismi aynı olduğu için aşağıdaki gibi yazabiliriz
//       onSuccess,
//       onError, // 3 kere dener olmazsa onErrror fonksiyonunu çalıştırır
//       //   refetchInterval: dbLengthChangeOrError,
//       select: (data) => {
//         // select ile data yı  superHeroNames olarak değiştirdik burada dataTransformation  yapmış veya data nın belli bir kısmını seçmiş olduk da diyebiliriz
//         const superHeroNames = data.data.map((hero) => hero.name);
//         return superHeroNames;
//       },
//     }
//   );
