import React, { Component } from 'react'

import News from './components/News'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<News key="general" category="general" pagesize={9}/>} />
          <Route path="/business" element={<News key="business" category="business" pagesize={5}/>} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" pagesize={5}/>} />
          <Route path="/general" element={<News key="general" category="general" pagesize={5} />} />
          <Route path="/health" element={<News key="health" category="health" pagesize={5}/>} />
          <Route path="/science" element={<News key="science" category="science" pagesize={5}/>} />
          <Route path="/sports" element={<News key="sports" category="sports" />} pagesize={5}/>
          <Route path="/technology" element={<News key="technology" category="technology" pagesize={5}/>} />
        </Routes>
      </div>
    )
  }
}
