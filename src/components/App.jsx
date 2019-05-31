import React from 'react';
import $ from 'jquery';
import Form from './Form.jsx';
import Home from './Home.jsx';
import Provider from './Provider.jsx';
import OneForm from './OneForm.jsx';
// import CenterMap from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
      allFormResults: []
    }

    this.goToPage = this.goToPage.bind(this);
    this.getForms = this.getForms.bind(this);
  }

  componentDidMount() {
    this.getForms();
  }

  getForms() {
    var that = this;
    $.ajax({
      url: '/api/forms',
      type: 'GET',
      success: function (results) {
        console.log(results);
        var providerArray = [];
        var providerResults = function (results) {
          for (var i = 0; i < results.length; i++) {
            var formInfo = {};
            formInfo.patientname = results[i].patientname;
            formInfo.preferredname = results[i].preferredname;
            formInfo.pronouns = results[i].pronouns;
            formInfo.pasttwomonths = results[i].pasttwomonths;
            formInfo.nexttwomonths = results[i].nexttwomonths;
            formInfo.conflict = results[i].conflict;
            formInfo.options = results[i].options;
            formInfo.refer = results[i].refer;
            formInfo.contact = results[i].contact;
            formInfo.notes = results[i].notes;
            formInfo.createdAt = results[i].createdAt;
            providerArray.push(formInfo);
          }
        }
        providerResults(results);
        console.log(providerArray)
        that.setState({
          allFormResults: providerArray,
        });
      },
      error: function (err) {
        console.log('Error in client-side AJAX get request')
      }
    });
  }

  handleSubmit(formData) {
    console.log(formData);
    var that = this;
    $.ajax({
      url: '/api/forms',
      type: 'POST',
      data: JSON.stringify({
        formData
      }),
      contentType: 'application/json',
      success: function (results) {
        that.getForms();
      },
      error: function (err) {
        console.log('Error in client-side AJAX POST request')
      }
    });
  }

  goToPage(page) {
    this.setState({
      view: page
    });
  }

  renderPage() {
    const {
      view
    } = this.state;
    if (view === 'home') {
      return <Home goToPage = {
        this.goToPage
      }
      />
    }
    if (view === 'form') {
      return <Form handleSubmit = {
        this.handleSubmit.bind(this)
      }
      />
    }
    if (view === 'provider') {
      return <Provider goToPage = {
        this.goToPage
      }
      allFormResults = {
        this.state.allFormResults
      }
      />
    }
    // if (view === 'map') {
    //   return <CenterMap goToPage = {
    //     this.goToPage
    //   }
    //   />
    // }
  }


  render() {
    return ( 
      <div>
      <div className="page-title">ENSURING ACCURATE HOMELESSNESS SCREENING</div>
        <div className = 'nav-buttons'>
            <div className = 'home-button' onClick = {() => this.goToPage('home')} > Home </div> 
            <div className = 'provider-button' onClick = {() => this.goToPage('provider')} > Form Responses </div> 
         </div>
        <div className ='main'> {this.renderPage()} </div>
        <footer className='footer'>Copyright 2019 - All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;