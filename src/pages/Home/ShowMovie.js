import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constance";
import "swiper/css";

const Container = styled.section`
  a {
    color: white;
  }
  margin-bottom: 100px;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const CoverBackground = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.h4`
  font-size: 18px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

// 객체 params
const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};
export const ShowMovie = ({ TitleName, MovieData }) => {
  return (
    <Container>
      <Title> {TitleName} </Title>
      <Swiper {...params}>
        {MovieData &&
          MovieData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <CoverBackground $bgUrl={data.poster_path} />
                <MovieTitle> {data.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

// map 함수 오류가 뜨는 이유
// 리액트는 렌더링이 화면에 커밋이 된 후에야 효과를 실행하기 때문에
// return에서 .map을 반복 실행할때 첫턴에 데이터가 아직 안들어와도
// 렌더링이 실행되며 그 데이터가 undifinded로 정의되어 오류가 남

// 해결방법 { ~~~  && ~~~.map}
// 자바 스크립트에서 true && expression은 항상 expression으로 실행
// false && expression은 항상 false로 실행됨
// 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다.
