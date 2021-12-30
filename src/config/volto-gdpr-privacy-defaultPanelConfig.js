const defaultPanelConfig = {
  last_updated: '2021-12-30T17:33:28+00:00', //it is used to know whether to resubmit the banner to the user if the choices have changed.

  text: {
    //Text that is shown when the banner appears
    it: {
      title: 'Usiamo i cookies',
      description:
        "Questo sito utilizza i cookie tecnici di navigazione e di sessione per garantire un miglior servizio di navigazione del sito, e cookies analitici per raccogliere informazioni sull'uso del sito da parte degli utenti.  Utilizza anche cookies di profilazione dell'utente per fini statistici e di remarketing. Per i cookie di profilazione puoi decidere se abilitarli o meno cliccando sul pulsante 'Impostazioni'. Per saperne di più, su come disabilitare i cookies oppure abilitarne solo alcuni, consulta la nostra Cookie Policy.",
    },
    en: {
      title: 'We use cookies',
      description:
        "This site uses technical navigation and session cookies to ensure a better site navigation service, and analytical cookies to collect information on the use of the site by users. It also uses user profiling cookies for statistical and remarketing purposes. For profiling cookies you can decide whether to enable them or not by clicking on the 'Settings' button. To find out more, on how to disable cookies or enable only some of them, consult our Cookie Policy.",
    },
  },

  //technical cookies configurations
  technical: {
    //main title and text for the technical cookies column in banner-cookies-settings
    text: {
      it: {
        title: 'Cookie tecnici',
        description:
          'Il sito utilizza cookie tecnici per analizzare il traffico da e verso il sito. I cookies tecnici consento anche di fornire un migliore servizio di navigazione sul sito, e raccolgono informazioni di navigazione a questo scopo.',
      },
      en: {
        title: 'Technical cookies',
        description:
          'The site uses technical cookies to analyze traffic to and from the site. Technical cookies also allow us to provide a better navigation service on the site, and collect navigation information for this purpose.',
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
    },

    choices: [
      {
        config_key: 'YOUTUBE',
        text: {
          it: {
            title: 'Youtube',
            description: 'Cookie correlati a Youtube... ',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'Per vedere il video, accetta i cookies di Youtube.',
          },
          en: {
            title: 'Youtube',
            description: 'Related youtube cookies... ',
            //text to show in conditional embed if that cookies are not enabled
            conditional_embed_text:
              'To view the video, please accept Youtube cookies.',
          },
        },
      },
    ],
  },
};

export default defaultPanelConfig;
