import logoPNRR from './logo-eu-inverted.svg';
import config from '@plone/volto/registry';

const FooterPNRRLogo = () => {
  return config.settings.siteProperties.showNextGenerationEU ? (
    <img
      src={logoPNRR}
      width="167"
      height="41"
      alt="Finanziato dall'Unione Europea - Next Generation EU"
      loading="lazy"
      decoding="async"
      className="nextGenerationEULogo"
    />
  ) : null;
};

export default FooterPNRRLogo;
