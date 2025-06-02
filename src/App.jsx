import React from 'react';
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
      amount: 0.001, // 0.1%
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
    colorSchemes: {
      light: {
        palette: {
          primary: { main: '#006Eff' },
          secondary: { main: '#FFC800' },
          background: {
            default: '#ffffff',
            paper: '#f8f8fa',
          },
          text: {
            primary: '#00070F',
            secondary: '#6A7481',
          },
          grey: {
            200: '#EEEFF2',
            300: '#D5DAE1',
            700: '#555B62',
            800: '#373F48',
          },
          playground: { main: '#f3f5f8' },
        },
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    container: {
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
    },
    shape: {
      borderRadius: 12,
      borderRadiusSecondary: 12,
      borderRadiusTertiary: 24,
    },
    components: {
      MuiCard: {
        defaultProps: {
          variant: 'filled',
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            backgroundColor: '#f8f8fa',
          },
          indicator: {
            backgroundColor: '#ffffff',
          },
        },
      },
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
