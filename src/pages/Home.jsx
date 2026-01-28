import React from 'react'
import Header from '../components/navigation/Header'
import '../App.css'
import ImageSlider from '../components/slider/ImageSlider'
import Welcome from '../components/services/Welcome'
import Packages from '../components/Packages'
import Procedures from '../components/Procedures'
import Layout from '../layout/Layout'
export const Home = () => {
  return (
    <>
        <Layout>
        <ImageSlider />
        {/* <Welcome /> */}
        <Welcome />
        <Packages />
        <Procedures />
        </Layout>
    </>
  )
}
