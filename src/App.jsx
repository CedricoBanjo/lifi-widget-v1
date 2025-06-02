import React from 'react';
import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  integrator: 'realtswap',
  containerStyle: {
    border: '1px solid #eee',
    borderRadius: '16px',
  },
  options: {
    fee: {
      recipient: '0xc64C27E0b7407b0ae6c87329aAf5bb0cAd76BF4f',
      amount: 0.001, // 0.1%
      feeType: 'percentage',
    },
  },
};

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '500px', height: '600px' }}>
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}

export default App;
