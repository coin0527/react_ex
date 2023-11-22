//https://developer.themoviedb.org/reference/movie-now-playing-list 에서 따옴
// npm install node-fetch@2 --save 인스톨 해줘야 패치가 돌아감.

const fetch = require("node-fetch");

const Baseurl = "https://api.themoviedb.org/3/";
const nowPLayingUrl = Baseurl + "movie/now_playing" + "?language=ko-KR";

const url = (urlName) => {
  return Baseurl + `${urlName}?language=ko-KR`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTI3ZThmNDU5N2M5ZDRkZDVmYmM3NDMyMjk3ZTIyYyIsInN1YiI6IjY1NGIzYTBjMjg2NmZhMDBlMWYwZjE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yJ38HDq7Gff1MSfoFYs5tgQjxnzRxCjiI4G7jyAnM4A",
  },
};

export const nowPlaying = () =>
  fetch(nowPLayingUrl, options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const toplated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcomming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
