import React from 'react'
import Searcher from "./Searcher";
import Recom from "./Recom";
import Categories from './Categories';


const Main = ({ props }) => {
  return (
      <main>
        <Searcher />
        <Categories />
        <Recom />
      </main>
  )
}

export default Main
