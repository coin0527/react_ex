import styled from "styled-components";
import { IMG_URL } from "../constance";

const Wrap = styled.div`
  height: 80vh;
  padding: 400px 5%;
  position: relative;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    position: relative;
  }
  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    width: 100%;
    max-width: 650px;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;
const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Banner = ({ data }) => {
  return (
    <Wrap $bgUrl={data.backdrop_path}>
      <Gradient />
      <h3> {data.title} </h3>
      <p> {data.overview} </p>
    </Wrap>
  );
};
