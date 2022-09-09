import React from 'react'
import All from './all'
import Header from './header'
import Beforecourses from './beforecourses'
function Home() {
  return (
    <>
    <Header></Header>
    <section className='sec'>
    <Beforecourses></Beforecourses>
    <All></All>
    </section>
    </>
  )
}

export default Home