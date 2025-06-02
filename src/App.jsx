import React, { useEffect } from 'react';
import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  integrator: 'realtswap',
  variant: 'wide',
  containerStyle: {
    border: '1px solid #eee',
    borderRadius: '16px',
  },
  options: {
    fee: {
      recipient: '0xc64C27E0b7407b0ae6c87329aAf5bb0cAd76BF4f',
      amount: 0.001,
      feeType: 'percentage',
    },
  },
  appearance: 'light',
  walletConfig: {
    onConnect: () => {
      console.log('Wallet connected!');
    },
    usePartialWalletManagement: true,
  },
  theme: {
    // Ton thème personnalisé...
  },
};

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff';
    document.documentElement.style.backgroundColor = '#ffffff';
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      backgroundColor: '#ffffff', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '500px', width: '100%', height: '600px' }}>
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}

export default App;
