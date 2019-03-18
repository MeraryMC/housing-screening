import React from 'react';
import Popup from "reactjs-popup";
import $ from 'jquery';
import App from './App.jsx';

class Form extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
      patientname: '',
      preferredname: '',
      pronouns: '',
      pasttwomonths: '',
      nexttwomonths: '',
      conflict: '',
      options: '',
      refer: '',
      contact: '',
      notes: '',
      createdAt: Date.now()
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendToApp = this.sendToApp.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  sendToApp(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState ({
      patientname: '',
      preferredname: '',
      pronouns: '',
      pasttwomonths: '',
      nexttwomonths: '',
      conflict: '',
      options: '',
      refer: '',
      contact: '',
      notes: '',
      createdAt: Date.now()
    })
  }

render() {
    return (
      <div>
         <div className="form">
          <h2 className='form-title'>Screening Questions</h2>
            <form className='form-body' onSubmit={this.sendToApp}>
            <div className='reminder'>
            A note to providers: due to the sensitive nature of these questions, please remind patients their answers are protected by confidentiality.
            </div>
            <div className='fields'>
            1. Patient Name: <input name='patientname' type="text" value={this.state.patientname} onChange={this.handleInputChange}/>
            </div>
             <div className='fields'>
            2. Preferred Name: <input name='preferredname' type="text" value={this.state.preferredname} onChange={this.handleInputChange}/>
            </div>
             <div className='fields'>
            3. Pronouns: <input name='pronouns' type="text" value={this.state.pronouns} onChange={this.handleInputChange}/>
            </div>
             <div className='fields'>
            4. In the past 2 months have you stayed in housing that you own, rent, or stay in as part of a household? <input name='pasttwomonths' type="text" value={this.state.pasttwomonths} onChange={this.handleInputChange}/>
            </div>
             <div className='fields'>
            5. Are you worried or concerned that in the next 2 months you may NOT have housing that you own, rent, or stay in as part of a household? <input name='nexttwomonths' type="text" value={this.state.nexttwomonths} onChange={this.handleInputChange}/>
            </div>
            <div className='fields'>
            6. Is there violence or conflict in a place where you have stayed in the past two months?<input name='conflict' type="text" value={this.state.conflict} onChange={this.handleInputChange}/>
            </div>
            <div className='fields'>
             7. If yes, do you have another place to go and how long could you potentially stay there?<input name='options' type="text" value={this.state.options} onChange={this.handleInputChange}/>
            </div>
            <div className='fields'>
             8. Would you like to be referred to talk more about your housing situation?<input name='refer' type="text" value={this.state.refer} onChange={this.handleInputChange}/>
            </div>
             <div className='fields'>
             9. What is the best way to reach you?<input name='contact' type="text" value={this.state.contact} onChange={this.handleInputChange}/>
            </div>
            <div className='fields'>
             10. Notes: <input name='notes' type='text' value={this.state.notes} onChange={this.handleInputChange}/>
            </div>
            <div className='fields'>
            <Popup trigger={<button type="submit" className="save-button"> Save Response </button>} modal>
            {close => (
              <div className="modal">
              <a className="close" onClick={close}>
              &times;
              </a>
                <div className="header"> Your Response Has Been Submitted </div>
                <div className="content">
                 {' '}
                 Patient responses are viewable in the provider page.
                </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                  console.log('modal closed ')
                  close() }}> Close </button>
              </div>
                </div>)}
              </Popup>
            </div>
            </form>
          </div>
      </div>
    );
  }
}

export default Form;



 // <Popup trigger={<button type="submit"> Save Response </button>} position="center">
 //                <div> Response Submitted </div>
 //              </Popup>