import React, { useState, useCallback } from 'react';
import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  variant: 'wide',
  integrator: 'realtswap',
  fee: 0.001, // 0.1%
  containerStyle: {
    border: '1px solid #eee',
    borderRadius: '16px',
  },
  appearance: 'light',
  walletConfig: {
    onConnect: () => {
      console.log('Wallet connected!');
    },
    usePartialWalletManagement: true,
  },
  // Ajout d'événements pour tracker les transactions
  events: {
    onRouteExecutionStarted: (route) => {
      console.log('Transaction started:', route);
      // Ici vous pourriez envoyer des analytics
    },
    onRouteExecutionCompleted: (route) => {
      console.log('Transaction completed:', route);
      // Tracking des transactions réussies
    },
    onRouteExecutionFailed: (route, error) => {
      console.error('Transaction failed:', route, error);
      // Gestion des erreurs
    },
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gestion du chargement du widget
  const handleWidgetLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Gestion des erreurs du widget
  const handleWidgetError = useCallback((error) => {
    console.error('Widget error:', error);
    setError('Erreur lors du chargement du widget');
    setIsLoading(false);
  }, []);

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
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
        }}
        aria-label="Aller sur MondialSwap"
      >
        <img
          src="logo-mondialswap.png"
          alt="MondialSwap Logo"
          style={{ 
            height: '60px', 
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
          onMouseOver={(e) => e.target.style.opacity = '0.8'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
          onError={(e) => {
            console.warn('Logo failed to load');
            e.target.style.display = 'none';
          }}
        />
      </a>

      {/* Indicateur de chargement */}
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #006Eff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            color: '#c33',
            textAlign: 'center',
            zIndex: 5,
          }}
        >
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#006Eff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Recharger
          </button>
        </div>
      )}
      
      {/* Widget container */}
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '500px', 
          height: '600px',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <LiFiWidget 
          config={{
            ...widgetConfig,
            onLoad: handleWidgetLoad,
            onError: handleWidgetError,
          }} 
        />
      </div>

      {/* Styles CSS pour l'animation de chargement */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Media queries pour la responsivité */
        @media (max-width: 768px) {
          .widget-container {
            max-width: 90% !important;
            height: 70vh !important;
          }
        }
        
        @media (max-width: 480px) {
          .logo {
            height: 40px !important;
            top: 10px !important;
            left: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
