import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spin from './Spin';
// import PropTypes from 'prop-types'


export default class News extends Component {

    // static defaultProps = {
    //     pagesize:12,

    // }
    // static propTypes = {
    //     pagesize : PropTypes.number,

    // }

    // articles = [
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    constructor() {

        
        super();
        console.log("helllo omya from News");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }


    async componentDidMount() {
        console.log("COmponnnnn");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f83fe4c2a87c42e4a4e93a5d8be932d8&page=1&pageSize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url);
        
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults,loading:false })


    }

    hpre = async () => {
        console.log("Previous CLicked");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f83fe4c2a87c42e4a4e93a5d8be932d8&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url);
        
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ 
            articles: parseData.articles,
            page: this.state.page - 1,loading:false
        })
    }
    hnex = async () => {
        console.log("Next Clicked");
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pagesize)) {

            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f83fe4c2a87c42e4a4e93a5d8be932d8&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
            this.setState({loading:true})
            let data = await fetch(url);
            
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                    articles: parseData.articles,
                    page: this.state.page + 1,loading:false
                })
        }
    }

    render() {
        return (
            <div>
                
                <div className="container my-3 text-center">
                    <h2 className=' my-3'>NewsMonkey - Top Headlines</h2>
                    {this.state.loading && <Spin/>}
                    <div className='row '>
                        {!this.state.loading && this.state.articles.map((ele) => {
                            return <div key={ele.url} className="col-md-4">
                                <NewsItems title={ele.title ? ele.title : " "} description={ele.description ? ele.description.slice(0, 110) : " "} imgurl={ele.urlToImage} newsurl={ele.url} pub={ele.publishedAt} aut={ele.author ? ele.author : ele.source.name} sou={ele.source.id ? ele.source.id : ele.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} onClick={this.hpre} type="button" className="btn btn-secondary">&larr; Previos</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)}  type="button" className="btn btn-secondary" onClick={this.hnex}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
