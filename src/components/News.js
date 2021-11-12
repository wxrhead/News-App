import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"

export class News extends Component {

  constructor() {
    super();
    this.state = {
          articles : [],
          loading : false,
          page :1
    }
  }

  async componentDidMount(){
    this.setState({loading : true})
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=57f315a3218d4cdb94a940d1feeb389d&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles , 
      totalResults : parsedData.totalResults,
      loading : false
    })
  }

  handlePreButton = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=57f315a3218d4cdb94a940d1feeb389d&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page : this.state.page -1,
      articles : parsedData.articles,
      loading : false
    })
  }

  handleNextButton = async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=57f315a3218d4cdb94a940d1feeb389d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page : this.state.page +1,
        articles : parsedData.articles,
        loading : false
      })
    }
  }
   

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="row my-3">    
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl ={element.url}/>
                    </div>
          })}
        {this.state.loading && <Spinner/>}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick ={this.handlePreButton}> &larr; Next</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextButton}>  Previous &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
