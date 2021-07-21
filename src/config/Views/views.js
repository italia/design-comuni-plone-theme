import PageView from '@italia/components/ItaliaTheme/View/PageView/PageView';
import NewsItemView from '@italia/components/ItaliaTheme/View/NewsItemView/NewsItemView';
import UOView from '@italia/components/ItaliaTheme/View/UOView/UOView';
import PersonaView from '@italia/components/ItaliaTheme/View/PersonaView/PersonaView';
import VenueView from '@italia/components/ItaliaTheme/View/VenueView/VenueView';
import ServizioView from '@italia/components/ItaliaTheme/View/ServizioView/ServizioView';
import EventoView from '@italia/components/ItaliaTheme/View/EventoView/EventoView';
import PaginaArgomentoView from '@italia/components/ItaliaTheme/View/PaginaArgomentoView/PaginaArgomentoView';
import CartellaModulisticaView from '@italia/components/ItaliaTheme/View/CartellaModulisticaView/CartellaModulisticaView';
import DocumentoView from '@italia/components/ItaliaTheme/View/DocumentoView/DocumentoView';
import ModuloView from '@italia/components/ItaliaTheme/View/ModuloView/ModuloView';
import BandoView from '@italia/components/ItaliaTheme/View/BandoView/BandoView';

import FaqFolderView from '@italia/components/ItaliaTheme/View/FAQ/FaqFolder/FaqFolderView';
import FaqView from '@italia/components/ItaliaTheme/View/FAQ/FaqView/FaqView';

import TrasparenzaView from '@italia/components/ItaliaTheme/View/TrasparenzaView/TrasparenzaView';
import DettagliProcedimentiView from '@italia/components/ItaliaTheme/View/TrasparenzaView/DettagliProcedimentiView';

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
};

/* LAYOUT VIEWS */
const italiaLayoutViews = {
  document_view: PageView,
  trasparenza_view: TrasparenzaView,
  dettagli_procedimenti_view: DettagliProcedimentiView,
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
  };
};

export default getItaliaViews;
