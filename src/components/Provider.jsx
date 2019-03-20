import React from 'react';
import App from './App.jsx';
import Form from './Form.jsx';
import Home from './Home.jsx';
import OneForm from './OneForm.jsx';


const Provider = (props) => {
  console.log(props);
  return (
    <div className='providerView'>
        {
          props.allFormResults.map(formResult => {
            return (
              <OneForm formResult={formResult}/>
            );
          })
        }
    </div>
  );
}

export default Provider;
