import fontawesome from '@fortawesome/fontawesome';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM';

export const init = () => {
  fontawesome.library.add(faFacebookF, faTwitter, faInstagram, faMediumM);
};
