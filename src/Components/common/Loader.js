import React from 'react';
import {Space, Spin } from 'antd';
export const Loader = () => {
  return (
    <div className='loader'>
    <Space size="middle">
       <p> Loading... Please wait </p>
      <Spin tip="Loading" size="small"></Spin>
        </Space></div>
  
   
  )
}
