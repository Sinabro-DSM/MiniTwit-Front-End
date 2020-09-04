import React from "react";
import TImeLineView from './TimeLineView'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../header/Header'

const MainTimeLine = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <TImeLineView></TImeLineView>
    </div>
  );
};

export default MainTimeLine;
