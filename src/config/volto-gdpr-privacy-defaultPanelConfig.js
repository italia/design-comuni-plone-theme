const defaultPanelConfig = {
  last_updated: '2022-03-03T11:25:00+00:00', //it is used to know whether to resubmit the banner to the user if the choices have changed.
  focusTrapEnabled: true,

  text: {
    //Text that is shown when the banner appears
    it: {
      title: 'Usiamo i cookie',
      description:
        "Questo sito utilizza i cookie tecnici di navigazione e di sessione per garantire un miglior servizio di navigazione del sito, e cookie analitici per raccogliere informazioni sull'uso del sito da parte degli utenti.  Utilizza anche cookie di profilazione dell'utente per fini statistici. Per i cookie di profilazione puoi decidere se abilitarli o meno cliccando sul pulsante 'Impostazioni'. Per saperne di più, su come disabilitare i cookie oppure abilitarne solo alcuni, consulta la nostra <a href='/privacy-policy'>Cookie Policy</a>.",
    },
    en: {
      title: 'We use cookies',
      description:
        "This site uses technical navigation and session cookies to ensure a better site navigation service, and analytical cookies to collect information on the use of the site by users. It also uses user profiling cookies for statistical. For profiling cookies you can decide whether to enable them or not by clicking on the 'Settings' button. To find out more, on how to disable cookies or enable only some of them, consult our <a href='/en/privacy-policy'>Cookie Policy</a>.",
    },
    es: {
      title: 'Nosotros usamos cookies',
      description:
        'Este sitio utiliza cookies técnicas de navegación y sesión para garantizar un mejor servicio de navegación en el sitio, y cookies analíticas para recopilar información sobre el uso del sitio por parte de los usuarios. También utiliza cookies de perfil de usuario con fines estadísticos. Para las cookies de creación de perfiles, puede decidir habilitarlas o no haciendo clic en el botón "Configuración". Para obtener más información sobre cómo deshabilitar las cookies o habilitar solo ciertas cookies, consulte nuestra <a href=\'/es/privacy-policy\'>Política de Cookies</a>.',
    },
    fr: {
      title: 'We use cookies',
      description:
        "Ce site utilise des cookies techniques de navigation et de session pour assurer un meilleur service de navigation sur le site, et des cookies analytiques pour collecter des informations sur l'utilisation du site par les utilisateurs. Il utilise également des cookies de profilage des utilisateurs à des fins statistiques. Pour les cookies de profilage, vous pouvez décider de les activer ou non en cliquant sur le bouton « Paramètres ». Pour en savoir plus, sur la façon de désactiver les cookies ou d'en activer seulement certains, consultez notre <a href='/fr/privacy-policy'>Politique relative aux cookies</a>.",
    },
  },

  //technical cookies configurations
  technical: {
    //main title and text for the technical cookies column in banner-cookies-settings
    text: {
      it: {
        title: 'Cookie tecnici',
        description:
          'Il sito utilizza cookie tecnici per analizzare il traffico da e verso il sito. I cookie tecnici consento anche di fornire un migliore servizio di navigazione sul sito, e raccolgono informazioni di navigazione a questo scopo.',
      },
      en: {
        title: 'Technical cookies',
        description:
          'The site uses technical cookies to analyze traffic to and from the site. Technical cookies also allow us to provide a better navigation service on the site, and collect navigation information for this purpose.',
      },
      es: {
        title: 'Cookies técnicas',
        description:
          'El sitio utiliza cookies técnicas para analizar el tráfico hacia y desde el sitio. Las cookies técnicas también nos permiten brindar un mejor servicio de navegación en el sitio y recopilar información de navegación para este propósito.',
      },
      fr: {
        title: 'Cookies techniques',
        description:
          'Le site utilise des cookies techniques pour analyser le trafic vers et depuis le site. Les cookies techniques nous permettent également de fournir un meilleur service de navigation sur le site, et de collecter des informations de navigation à cette fin.',
      },
    },

    //technical cookies
    choices: [
      {
        config_key: 'GANALYTICS', //reference to config.gdprPrivacyConfig keys
        text: {
          it: {
            title: 'Google Analytics',
            description:
              "I cookie di Google Analytics sono usati per analizzare la navigazione sul sito al fine di migliorarla e fornire all'utente un'esperienza di navigazione migliore possibile.",
          },
          en: {
            title: 'Google Analytics',
            description:
              'Google Analytics cookies are used to analyze navigation on the site in order to improve it and provide the user with the best possible browsing experience.',
          },
          es: {
            title: 'Google Analytics',
            description:
              'Las cookies de Google Analytics se utilizan para analizar la navegación en el sitio con el fin de mejorarlo y proporcionar al usuario la mejor experiencia de navegación posible.',
          },
          fr: {
            title: 'Google Analytics',
            description:
              "Les cookies de Google Analytics sont utilisés pour analyser la navigation sur le site afin de l'améliorer et offrir à l'utilisateur la meilleure expérience de navigation possible.",
          },
        },
      },
      {
        config_key: 'GRECAPTCHA',
        text: {
          it: {
            title: 'Google Re-Captcha',
            description:
              "I cookie di Google Re-Captcha sono usati per analizzare la navigazione sul sito al fine di migliorarla e fornire all'utente un'esperienza di navigazione migliore possibile.",
          },
          en: {
            title: 'Google Re-Captcha',
            description:
              'Google Re-Captcha cookies are used to analyze navigation on the site in order to improve it and provide the user with the best possible browsing experience.',
          },
          es: {
            title: 'Google Re-Captcha',
            description:
              'Las cookies de Google Recaptcha se utilizan para analizar la navegación en el sitio con el fin de mejorarlo y proporcionar al usuario la mejor experiencia de navegación posible.',
          },
          fr: {
            title: 'Google Re-Captcha',
            description:
              "Les cookies de Google Re-Captcha sont utilisés pour analyser la navigation sur le site afin de l'améliorer et offrir à l'utilisateur la meilleure expérience de navigation possible.",
          },
        },
      },
    ],
  },

  //profiling cookies configuration
  profiling: {
    text: {
      it: {
        title: 'Cookie di profilazione',
        description:
          "Il sito utilizza cookie di profilazione per analizzare il comportamento e le scelte degli utenti al fine di proporre contenuti mirati corrispondenti al profilo dell'utente",
      },
      en: {
        title: 'Profiling cookies',
        description:
          "The site uses profiling cookies to analyze user behavior and choices in order to propose targeted content corresponding to the user's profile",
      },
      es: {
        title: 'Cookies de perfil',
        description:
          'El sitio utiliza cookies de perfil para analizar el comportamiento y las elecciones del usuario con el fin de proponer contenido específico que se corresponda con el perfil del usuario.',
      },
      fr: {
        title: 'Cookies de profilage',
        description:
          "Le site utilise des cookies de profilage pour analyser le comportement et les choix de l'utilisateur afin de proposer un contenu ciblé correspondant au profil de l'utilisateur",
      },
    },

    choices: [
      {
        config_key: 'YOUTUBE',
        referenceUrls: ['youtube.com', 'youtube-nocookie.com', 'youtu.be'],
        text: {
          it: {
            title: 'Youtube',
            description:
              "I cookie di profilazione di Youtube permettono di mostrarti le pubblicità che potrebbero interessarti di più, fare analisi di accesso alla pagina e sul comportamento dell'utente, facilitare l'accesso ai servizi di Google.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Per vedere il video, accetta i cookies di Youtube.',
          },
          en: {
            title: 'Youtube',
            description:
              'Youtube profiling cookies allow you to show advertisements that may interest you the most, analyze page access and user behavior, facilitate access to Google services. ',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'To view the video, please accept Youtube cookies.',
          },
          es: {
            title: 'Youtube',
            description:
              'Las cookies de perfil de Youtube le permiten mostrar los anuncios que más le pueden interesar, analizar el acceso a la página y el comportamiento del usuario, facilitar el acceso a los servicios de Google.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Para ver el video, acepte las cookies de Youtube.',
          },
          fr: {
            title: 'Youtube',
            description:
              "Les cookies de profilage Youtube vous permettent d'afficher les publicités susceptibles de vous intéresser le plus, d'analyser l'accès aux pages et le comportement des utilisateurs, de faciliter l'accès aux services Google.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Pour voir la vidéo, veuillez accepter les cookies Youtube.',
          },
        },
      },
      {
        config_key: 'VIMEO',
        referenceUrls: ['vimeo.com'],
        text: {
          it: {
            title: 'Vimeo',
            description:
              "I cookie di profilazione di Vimeo permettono di fare analisi di accesso alla pagina e sul comportamento dell'utente, e di mostrarti le pubblicità che potrebbero interessarti di più.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Per vedere il video, accetta i cookies di Vimeo.',
          },
          en: {
            title: 'Vimeo',
            description:
              'Vimeo profiling cookies allow you to analyze page access and user behavior, and to show you the advertisements that may interest you the most.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'To view the video, please accept Vimeo cookies.',
          },
          es: {
            title: 'Vimeo',
            description:
              'Las cookies de creación de perfiles de Vimeo le permiten analizar el acceso a la página y el comportamiento del usuario, y mostrarle los anuncios que más le pueden interesar.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Para ver el video, acepte las cookies de Vimeo.',
          },
          fr: {
            title: 'Vimeo',
            description:
              "Les cookies de profilage Vimeo vous permettent d'analyser l'accès aux pages et le comportement des utilisateurs, et de vous montrer les publicités qui pourraient vous intéresser le plus.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Pour voir la vidéo, veuillez accepter les cookies Vimeo.',
          },
        },
      },
      /*       {
        config_key: 'GOOGLEMAPS',
        referenceUrls: ['google.com/maps'],
        text: {
          it: {
            title: 'Google Maps',
            description:
              "I cookie di profilazione di Google permettono di fare analisi di accesso alla pagina e sul comportamento dell'utente, e di mostrarti le pubblicità che potrebbero interessarti di più.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Per vedere la mappa, accetta i cookies di Google Maps.',
          },
          en: {
            title: 'Google Maps',
            description:
              'Google profiling cookies allow you to analyze page access and user behavior, and to show you the advertisements that may interest you the most.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'To view map, please accept Google Maps cookies.',
          },
          es: {
            title: 'Google Maps',
            description:
              'Las cookies de creación de perfiles de Google le permiten analizar el acceso a la página y el comportamiento del usuario, y mostrarle los anuncios que más le pueden interesar.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Para ver el mapa, acepte las cookies de Google Maps.',
          },
          fr: {
            title: 'Google Maps',
            description:
              "Les cookies de profilage Google vous permettent d'analyser l'accès aux pages et le comportement des utilisateurs, et de vous montrer les publicités qui pourraient vous intéresser le plus.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Pour afficher la carte, veuillez accepter les cookies de Google Maps.',
          },
        },
      }, */
      {
        config_key: 'META',
        referenceUrls: ['facebook.com', 'instagram.com'],
        text: {
          it: {
            title: 'Facebook e Instagram (prodotti Meta)',
            description:
              "I cookie di profilazione di Meta permettono di fare analisi di accesso alla pagina e sul comportamento dell'utente, e di mostrarti le pubblicità che potrebbero interessarti di più, solo se sei iscritto a Facebook o Instagram o ad uno dei prodotti di Meta.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Per vedere i contenuti di Meta (Facebook, Instagram), accetta i cookies di Meta.',
          },
          en: {
            title: 'Facebook and Instagram (Meta products)',
            description:
              'Meta profiling cookies allow you to analyze page access and user behavior, and to show you the advertisements that may interest you the most, only if you are subscribed into Facebook or Instagram or in one of Meta products.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'To view Meta contents, please accept Meta cookies.',
          },
          es: {
            title: 'Facebook e Instagram (productos Meta)',
            description:
              'Las cookies de metaperfilado le permiten analizar el acceso a la página y el comportamiento del usuario, y mostrarle los anuncios que más le pueden interesar, solo si está suscrito a Facebook o Instagram o en uno de los productos de Meta.',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Para ver el contenido de Meta, acepte las cookies de Meta.',
          },
          fr: {
            title: 'Facebook et Instagram (produits Meta)',
            description:
              "Les cookies de méta profilage vous permettent d'analyser l'accès aux pages et le comportement des utilisateurs, et de vous montrer les publicités susceptibles de vous intéresser le plus, uniquement si vous êtes abonné à Facebook ou Instagram ou à l'un des produits Meta.",
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Pour afficher le contenu Meta, veuillez accepter les cookies Meta.',
          },
        },
      },
    ],
  },
};

export default defaultPanelConfig;
