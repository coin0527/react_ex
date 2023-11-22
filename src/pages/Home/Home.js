import { useEffect, useState } from "react";
import { nowPlaying, popular, toplated, upcomming } from "../../api";
import { Banner } from "./Banner";
import { Layout } from "../../components/Layout";
import { ShowMovie } from "./ShowMovie";
import { LoadingEx } from "../../components/LoadingEx";

export const Home = () => {
  //2. useState
  const [nowPlayingData, setNowplayingData] = useState();
  const [popularData, setPopularData] = useState();
  const [toplatedData, setToplatedData] = useState();
  const [upcommingData, setUpcommingData] = useState();
  const [loading, setLoading] = useState(true);

  //1. api요청, 비동기통신, 예외처리
  useEffect(() => {
    (async () => {
      try {
        // const Data = await nowPlaying();
        // console.log(Data);

        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults);

        const { results: populars } = await popular();
        setPopularData(populars);

        const { results: latings } = await toplated();
        setToplatedData(latings);

        const { results: upcommings } = await upcomming();
        setUpcommingData(upcommings);

        setLoading(false);
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingEx />
      ) : (
        <div>
          {nowPlayingData && <Banner data={nowPlayingData[0]} />}
          <Layout>
            <ShowMovie MovieData={nowPlayingData} TitleName={"상영중인 영화"} />
            <ShowMovie MovieData={popularData} TitleName={"인기있는 영화"} />
            <ShowMovie MovieData={toplatedData} TitleName={"랭킹"} />
            <ShowMovie MovieData={upcommingData} TitleName={"업 커밍"} />
          </Layout>
        </div>
      )}
    </>
  );
};
