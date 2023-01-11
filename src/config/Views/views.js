import { defineMessages } from 'react-intl';

import PageView from 'design-comuni-plone-theme/components/ItaliaTheme/View/PageView/PageView';
import NewsItemView from 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemView';
import UOView from 'design-comuni-plone-theme/components/ItaliaTheme/View/UOView/UOView';
import PersonaView from 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaView';
import VenueView from 'design-comuni-plone-theme/components/ItaliaTheme/View/VenueView/VenueView';
import ServizioView from 'design-comuni-plone-theme/components/ItaliaTheme/View/ServizioView/ServizioView';
import EventoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoView';
import PaginaArgomentoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/PaginaArgomentoView/PaginaArgomentoView';
import CartellaModulisticaView from 'design-comuni-plone-theme/components/ItaliaTheme/View/CartellaModulisticaView/CartellaModulisticaView';
import DocumentoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoView';
import ModuloView from 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloView';
import BandoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/BandoView/BandoView';

import FaqFolderView from 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/FaqFolderView';
import FaqView from 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqView/FaqView';

import TrasparenzaView from 'design-comuni-plone-theme/components/ItaliaTheme/View/TrasparenzaView/TrasparenzaView';
import DettagliProcedimentiView from 'design-comuni-plone-theme/components/ItaliaTheme/View/TrasparenzaView/DettagliProcedimentiView';
import PuntoDiContattoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/PuntoDiContattoView/PuntoDiContattoView';
import IncaricoView from 'design-comuni-plone-theme/components/ItaliaTheme/View/IncaricoView/IncaricoView';

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
