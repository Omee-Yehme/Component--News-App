import React, { Component } from 'react'

import NewsInfi from './components/NewsInfi'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"


export default class App extends Component {
  pageSize=6
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsInfi key="general" category="general" pagesize={this.pageSize}/>}/>
          <Route path="/business" element={<NewsInfi key="business" category="business" pagesize={this.pageSize}/>} />
          <Route path="/entertainment" element={<NewsInfi key="entertainment" category="entertainment" pagesize={this.pageSize}/>} />
          <Route path="/general" element={<NewsInfi key="general" category="general" pagesize={this.pageSize} />} />
          <Route path="/health" element={<NewsInfi key="health" category="health" pagesize={this.pageSize}/>} />
          <Route path="/science" element={<NewsInfi key="science" category="science" pagesize={this.pageSize}/>} />
          <Route path="/sports" element={<NewsInfi key="sports" category="sports" pagesize={this.pageSize}/>}/>
          <Route path="/technology" element={<NewsInfi key="technology" category="technology" pagesize={this.pageSize}/>} />
        </Routes>
      </div>
    )
  }
}
