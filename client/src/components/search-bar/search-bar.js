import React, { Component } from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default (props) => {
  return (
    <Search
      placeholder="Category Search"
      enterButton="Search"
      size="large"
      onSearch={props.onSearch}
    />
  )
}
