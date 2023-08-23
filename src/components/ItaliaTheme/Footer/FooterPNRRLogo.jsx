import logoPNRR from './logo-eu-inverted.svg';
import config from '@plone/volto/registry';

const FooterPNRRLogo = () => {
  return config.settings.siteProperties.showNextGenerationEU ? (
    <img
      src={logoPNRR}
      width="167"
      height="41"
      alt="NextGenerationEU"
      loading="lazy"
      decoding="async"
      className="nextGenerationEULogo"
    />
  ) : null;
};

export default FooterPNRRLogo;
