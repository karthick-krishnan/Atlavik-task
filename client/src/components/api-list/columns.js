import React from 'react';

export default [
  {
    title: 'API Name',
    dataIndex: 'API',
    sorter: (a, b) => a.API.length - b.API.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    sorter: (a, b) => a.Description.length - b.Description.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Category',
    dataIndex: 'Category',
    sorter: (a, b) => a.Category.length - b.Category.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Auth',
    dataIndex: 'Auth',
    render: authType => <span>{!authType ? 'No Auth' : authType}</span>,
    filters: [
      {
        text: 'API Key',
        value: 'apiKey',
      },
      {
        text: 'O-Auth',
        value: 'OAuth',
      }
    ],
    onFilter: (value, record) => record.Auth.indexOf(value) === 0,
    sorter: (a, b) => a.Auth.length - b.Auth.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Cors',
    dataIndex: 'Cors',
    filters: [
      {
        text: 'Yes',
        value: 'yes',
      },
      {
        text: 'No',
        value: 'no',
      },
      {
        text: 'Unknown',
        value: 'unknown',
      }
    ],
    onFilter: (value, record) => record.Cors.indexOf(value) === 0,
    sorter: (a, b) => a.Cors.length - b.Cors.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'HTTPS',
    dataIndex: 'HTTPS',
    render: https => <span>{https ? 'yes' : 'no'}</span>,
    filters: [
      {
        text: 'Yes',
        value: true,
      },
      {
        text: 'No',
        value: false,
      }
    ],
    onFilter: (value, record) => record.HTTPS === value,
    sorter: (a, b) => a.HTTPS.length - b.HTTPS.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    title: 'Link',
    dataIndex: 'Link',
    render: link => <a>{link}</a>,
  }
];
