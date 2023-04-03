import logoPNRR from './logo-eu-inverted.svg';
import config from '@plone/volto/registry';

const FooterPNRRLogo = () => {
  return config.settings.siteProperties.showNextGenerationEU ? (
    <img
      src={logoPNRR}
      width="178"
      height="56"
      alt="NextGenerationEU"
      className="nextGenerationEULogo"
    />
  ) : null;
};

export default FooterPNRRLogo;
