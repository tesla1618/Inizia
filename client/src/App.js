import logo from './logo.svg';
import './css/style.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AppRouter from './AppRouter';
<<<<<<< HEAD
import LoginPage from './components/LoginPage';

const events = [
  {"id":1,"name":"BUBT IUPC","description":"Intra University Programming Contest","link":"bubtiupc2023","date":"2023-12-31T15:00:00Z","location":"BUBT Permanent Campus, Mirpur, Dhaka","city":"Dhaka","capacity":200,"isPrivate":true,"pkey":"bubtiupc","hasFee":true,"entry_fee":400,"host":"BUBT"}
];
=======
import Layout from './components/Layout';
import EventCard from './components/EventCard';
import EventList from './components/EventList';
import axios from 'axios';
>>>>>>> upstream/main

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
    };
  }

  componentDidMount() {
    axios.get('http://192.168.0.106:8000/api/events/')
      .then(response => {
        this.setState({ eventData: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  render() {
    const { eventData } = this.state;
    return (
      <main className='context'>
<<<<<<< HEAD
        <NavBar />
        <SearchBar />
        <LoginPage/>
=======
        {/* <NavBar />
        <SearchBar /> */}
        <Layout>
          <SearchBar />
          <div className="app container mt-3 mb-3">
            <EventList events={this.state.eventData} />
          </div>
        </Layout>
        
>>>>>>> upstream/main
      </main>
    );
  }
}

export default App;