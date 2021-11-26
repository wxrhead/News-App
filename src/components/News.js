import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitaliseHeading = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  // useEffect(() => {
  //   document.title = `${this.capitaliseHeading( props.category)} - NewsMonkey`;
  //   }
  // )

  const updateNews = async ()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57f315a3218d4cdb94a940d1feeb389d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

 
  useEffect(() => {
    updateNews()
  }, [])



  const fetchMoreData = async ()=> {
    setPage(page +1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57f315a3218d4cdb94a940d1feeb389d&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }

 
    return (
      <div className="container my-4">
        <h1
          className="text-center"
          style={{ marginTop: "84px", fontSize: "35px" }}
        >
          NewsMonkey - Top Headlines on{" "}
          {capitaliseHeading(props.category)}{" "}
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description? element.description.slice(0, 80): ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  
}


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.efaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};