import React from 'react';
import App from '../index.jsx';

const Home = ({ goToPage }) => (
  <div>
   <div className = 'title-banner'>
      <div className = 'title'>EAHS</div>
        <div className = 'subtitle'>A resource for health care providers</div>
        <div className = 'buttons'>
        <div className='new-screening' onClick={() => goToPage('form')}>Begin a New Screening</div>
      </div>
    </div>
  </div>
)

export default Home;
