import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "abc-news-au",
        name: "ABC News (AU)",
      },
      author: "Camron Slessor",
      title:
        "Indigenous culture to be celebrated as WBBL launches inaugural First Nations Round",
      description:
        "The WBBL will hold its first league-wide First Nations Round this season, celebrating the hundreds of traditional custodians of the land that cricket is played on.",
      url: "http://www.abc.net.au/news/2021-11-08/womens-big-bash-league-launches-inaugural-first-nations-round/100602428",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/6e326aa35142f780cf30a3aac2faa356?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=428&width=862&height=485",
      publishedAt: "2021-11-08T02:48:11Z",
      content:
        "Ella Hayward is one of just five Indigenous players currently playing in the Women's Big Bash League. Key points: <ul><li>The First Nations Round will be played from November 19-21</li><li>Each clu… [+4007 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hey this is my constructor");
    this.state = {
          articles : this.articles 
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem
              title="This Title"
              description="ThisDes"
              imageUrl="https://live-production.wcms.abc-cdn.net.au/6e326aa35142f780cf30a3aac2faa356?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=428&width=862&height=485"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="This Title" description="ThisDes" />
          </div>
          <div className="col-md-4">
            <NewsItem title="This Title" description="ThisDes" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
