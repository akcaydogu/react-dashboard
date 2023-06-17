import React, { useLayoutEffect } from 'react'
import '../assets/css/home.css'
import Anasayfa from '../components/Anasayfa'

const Home = () => {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#171825"
  });
  
  return (
    <>
        <Anasayfa prop={"Test"}/>
    </>
    )
}

export default Home