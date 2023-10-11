import React from "react";
import "./Home.css";
import RowMovies from "../rowMovies/RowMovies";
import Requests from "../../api/request";
import Banner from "../../Components/banner/Banner.jsx";
import Navbar from "../../Components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="home-container">
        <div className="app">
          <RowMovies
            title="NETFLIX ORIGINALS"
            fetchUrl={Requests.fetchNetflixOriginals}
            islargeRow
          />
          <RowMovies title="Trending now" fetchUrl={Requests.fetchTrending} />
          <RowMovies title="Top Rated" fetchUrl={Requests.fetchTopRated} />
          <RowMovies
            title="Action Movies"
            fetchUrl={Requests.fetchActionMovies}
          />
          <RowMovies
            title="Comedy Movies"
            fetchUrl={Requests.fetchComedyMovies}
          />
          <RowMovies
            title="Horror Movies"
            fetchUrl={Requests.fetchHorrorMovies}
          />
          <RowMovies
            title="Romance Movies"
            fetchUrl={Requests.fetchRomanceMovies}
          />
          <RowMovies
            title="Documentaries"
            fetchUrl={Requests.fetchDocumentaries}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
