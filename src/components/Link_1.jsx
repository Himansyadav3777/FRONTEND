import React from 'react'
//  rfce ka use boilar plate ke liye use kiya jata hai.
import {Routes,Route,Link} from 'react-router-dom'

function Link_1() {
    function Home(){
        return <h1>this is my home page</h1>
    }
    function About(){
        return<h1>this is my about page</h1>
    }
  return (
    <div>
        <nav>
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default Link_1