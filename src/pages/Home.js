import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import { Banner } from "./Banner";
import { Layout } from "../components/Layout";
import { ShowMovie } from "./ShowMovie";
import { LoadingEx } from "../components/LoadingEx";

export const Home = () => {
  //2. useState
  const [nowPlayingData, setNowplayingData] = useState();
  const [loading, setLoading] = useState();

  //1. api요청, 비동기통신, 예외처리
  useEffect(() => {
    (async () => {
      try {
        // const Data = await nowPlaying();
        // console.log(Data);

        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults);

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
          </Layout>
        </div>
      )}
    </>
  );
};
