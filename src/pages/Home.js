import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import { Banner } from "./Banner";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { Layout } from "../components/Layout";
import { ShowMovie } from "./ShowMovie";

const Load = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

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
        <Load>
          <ClipLoader color="#84B528" />
        </Load>
      ) : (
        <div>
          {nowPlayingData && <Banner data={nowPlayingData[0]} />}
          <Layout>
            <ShowMovie />
          </Layout>
        </div>
      )}
    </>
  );
};
