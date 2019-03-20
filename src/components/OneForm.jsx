import React from 'react';
import App from '../index.jsx';
import Form from './Form.jsx';

const OneForm = (props) => (
   <div className='oneForm'>
    1. Patient Name: {props.formResult.patientname }
    <div>
    {"\n"}
    </div>
    2. Preferred Name: {props.formResult.preferredname }
    <div>
    {"\n"}
    </div>
    3. Pronouns: {props.formResult.pronouns }
    <div>
    {"\n"}
    </div>
    4. In the past 2 months have you stayed in housing that you own, rent, or stay in as part of a household?: {props.formResult.pasttwomonths }
    <div>
    {"\n"}
    </div>
    5. Are you worried or concerned that in the next 2 months you may NOT have housing that you own, rent, or stay in as part of a household?: {props.formResult.nexttwomonths }
    <div>
    {"\n"}
    </div>
    6. Is there violence or conflict in a place where you have stayed in the past two months?: {props.formResult.conflict }
    <div>
    {"\n"}
    </div>
    7. If yes, do you have another place to go and how long could you potentially stay there?: {props.formResult.options }
    <div>
    {"\n"}
    </div>
    8. Would you like to be referred to talk more about your housing situation?:{props.formResult.refer }
    <div>
    {"\n"}
    </div>
    9. What is the best way to reach you? {props.formResult.contact }
    <div>
    {"\n"}
    </div>
    10. Notes: {props.formResult.notes }
    <div>
    {"\n"}
    </div>
    11. Time of submission: {props.formResult.createdAt }
    <div>
    {"\n"}
    </div>
  </div>
)

export default OneForm;



