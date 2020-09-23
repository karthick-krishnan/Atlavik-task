import React, { Component } from 'react';
import { Table } from 'antd';
import columns from './columns';

class APIList extends Component {

  render() {
    return (
      <Table columns={columns} dataSource={this.props.data} />
    )
  }
}

export default APIList;
