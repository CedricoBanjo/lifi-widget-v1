import React from 'react';
import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  variant: 'wide',
  integrator: 'realtswap', // Déplacé ici au lieu d'être dans les props du composant
  fee: 0.001, // 0.1% - Format correct selon la documentation
  containerStyle: {
    border: '1px solid #eee',
    borderRadius: '16px',
  },
  appearance: 'light',
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
    <div
      style={{
        backgroundColor: '#ffffff',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Logo en haut à gauche */}
      <a
        href="https://mondialswap.com"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
        }}
      >
        <img
          src="logo-mondialswap.png"
          alt="MondialSwap Logo"
          style={{ height: '60px', cursor: 'pointer' }}
        />
      </a>
      
      {/* Widget */}
      <div style={{ width: '100%', maxWidth: '500px', height: '600px' }}>
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}

export default App;
