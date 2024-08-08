import { defineMessages } from 'react-intl';

import {
  PageView,
  NewsItemView,
  UOView,
  PersonaView,
  VenueView,
  ServizioView,
  EventoView,
  PaginaArgomentoView,
  CartellaModulisticaView,
  DocumentoView,
  ModuloView,
  BandoView,
  FaqFolderView,
  FaqView,
  TrasparenzaView,
  DettagliProcedimentiView,
  PuntoDiContattoView,
  IncaricoView,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

defineMessages({
  modulistica_view: {
    id: 'Cartella modulistica',
    defaultMessage: 'Cartella modulistica',
  },
  trasparenza_view: {
    id: 'Trasparenza',
    defaultMessage: 'Trasparenza',
  },
  dettagli_procedimenti_view: {
    id: 'Dettagli procedimento',
    defaultMessage: 'Dettagli procedimento',
  },
  venue_view: {
    id: 'Luogo',
    defaultMessage: 'Luogo',
  },
});

/*  CONTENT TYPES VIEWS */
const italiaContentTypesViews = {
  Document: PageView,
  'News Item': NewsItemView,
  ComunicatoStampa: NewsItemView, // ct opzionale da volto-rer-ufficiostampa
  UnitaOrganizzativa: UOView,
  Persona: PersonaView,
  Venue: VenueView,
  Servizio: ServizioView,
  Event: EventoView,
  'Pagina Argomento': PaginaArgomentoView,
  CartellaModulistica: CartellaModulisticaView,
  Documento: DocumentoView,
  Modulo: ModuloView,
  Bando: BandoView,
  FaqFolder: FaqFolderView,
  Faq: FaqView,
  PuntoDiContatto: PuntoDiContattoView,
  Incarico: IncaricoView,
};

/* LAYOUT VIEWS */
const italiaLayoutViews = {
  document_view: PageView,
  trasparenza_view: TrasparenzaView,
  dettagli_procedimenti_view: DettagliProcedimentiView,
};

const layoutViewsNamesMapping = {
  modulistica_view: 'Cartella modulistica',
  trasparenza_view: 'Trasparenza',
  dettagli_procedimenti_view: 'Dettagli procedimento',
  venue_view: 'Luogo',
};

const getItaliaViews = (config) => {
  return {
    contentTypesViews: {
      ...config.views.contentTypesViews,
      ...italiaContentTypesViews,
    },
    layoutViews: {
      ...config.views.layoutViews,
      ...italiaLayoutViews,
    },
    layoutViewsNamesMapping: {
      ...config.views.layoutViewsNamesMapping,
      ...layoutViewsNamesMapping,
    },
  };
};

export default getItaliaViews;
