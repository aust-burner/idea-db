import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Welcome to IOTD</h1>
    <div>
      IOTD
    </div>
    <h2>What are you thinking today?</h2>
    <div>
      addIdea Modal
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
