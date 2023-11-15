import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import { Banner } from "./Banner";

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

        const { results } = await nowPlaying();
        setNowplayingData(results); // 실제 저장값 할당
        setLoading(false);
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>{nowPlayingData && <Banner data={nowPlayingData[0]} />}</div>
      )}
    </>
  );
};
