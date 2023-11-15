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
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;
const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027); */
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
