import { LiFiWidget } from '@lifi/widget';
import config from './lifiConfig';

const LifiWidget = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <LiFiWidget integrator="my-app-name" config={config} />
    </div>
  );
};

export default LifiWidget;
