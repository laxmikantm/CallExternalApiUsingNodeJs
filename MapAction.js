import React, { Component } from 'react';
import axios from 'axios';

class MapAction extends Component {
  constructor(props) {
    super(props);
  }

  fetchData() {
    // const instance = axios.create({
    //   baseURL: 'http://localhost:3000/request',
    //   timeout: 1000,
    //   headers: { 'Access-Control-Allow-Origin': '*' }
    // });

    axios
      .get('http://localhost:3000/request', { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then((response) => {
        console.log('\n DEBUG output - ', expected);
        console.log('\n DEBUG result - ', response.data);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <div className='Base-map'>{}</div>;
  }
}
