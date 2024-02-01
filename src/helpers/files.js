import faFileXml from 'design-comuni-plone-theme/icons/file-xml.svg';
import faFileXsd from 'design-comuni-plone-theme/icons/file-xsd.svg';
import faFileOdp from 'design-comuni-plone-theme/icons/file-odp.svg';
import faFileOds from 'design-comuni-plone-theme/icons/file-ods.svg';
import faFileOdt from 'design-comuni-plone-theme/icons/file-odt.svg';
import faFileCSV from 'design-comuni-plone-theme/icons/file-csv.svg';

export const FILE_FORMATS = {
  'text/rtf': { icon: { lib: 'far', name: 'file-alt' }, format_name: 'rtf' },
  'application/rtf': {
    icon: { lib: 'far', name: 'file-alt' },
    format_name: 'RTF',
  },
  'application/pdf': {
    icon: { lib: 'far', name: 'file-pdf' },
    format_name: 'PDF',
  },
  'application/zip': {
    icon: { lib: 'far', name: 'file-archive' },
    format_name: 'ZIP',
  },
  'application/x-zip-compressed': {
    icon: { lib: 'far', name: 'file-archive' },
    format_name: 'ZIP',
  },
  'application/gzip': {
    icon: { lib: 'far', name: 'file-archive' },
    format_name: 'GZIP',
  },
  'application/vnd.rar': {
    icon: { lib: 'far', name: 'file-archive' },
    format_name: 'RAR',
  },
  'application/x-tar': {
    icon: { lib: 'far', name: 'file-archive' },
    format_name: 'TAR',
  },
  'application/json': {
    icon: { lib: 'fas', name: 'code' },
    format_name: 'JSON',
  },
  'text/javascript': {
    icon: { lib: 'fas', name: 'code' },
    format_name: 'JS',
  },
  'text/html': { icon: { lib: 'fas', name: 'code' }, format_name: 'html' },
  'image/jpg': {
    icon: { lib: 'far', name: 'file-image' },
    format_name: 'JPG',
  },
  'image/jpeg': {
    icon: { lib: 'far', name: 'file-image' },
    format_name: 'JPEG',
  },
  'image/png': {
    icon: { lib: 'far', name: 'file-image' },
    format_name: 'PNG',
  },
  'image/svg': {
    icon: { lib: 'far', name: 'file-image' },
    format_name: 'SVG',
  },
  'application/msword': {
    icon: { lib: 'far', name: 'file-word' },
    format_name: 'Word',
  },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
    icon: { lib: 'far', name: 'file-word' },
    format_name: 'Word',
  },
  'application/vnd.ms-excel': {
    icon: { lib: 'far', name: 'file-excel' },
    format_name: 'Excel',
  },
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
    icon: { lib: 'far', name: 'file-excel' },
    format_name: 'Excel',
  },
  'application/vnd.ms-powerpoint': {
    icon: { lib: 'far', name: 'file-ppt' },
    format_name: 'PowerPoint',
  },
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': {
    icon: { lib: 'far', name: 'file-ppt' },
    format_name: 'PowerPoint',
  },
  'text/xml': {
    icon: { lib: '', name: faFileXml, svg_format: true },
    format_name: 'XML',
  },
  'text/csv': {
    icon: { lib: '', name: faFileCSV, svg_format: true },
    format_name: 'CSV',
  },
  'application/xml': {
    icon: { lib: '', name: faFileXml, svg_format: true },
    format_name: 'XML',
  },
  'text/plain': {
    icon: { lib: 'far', name: 'file-alt' },
    format_name: 'TXT',
  },
};

export const FILE_EXTENSIONS = {
  xsd: {
    icon: { lib: '', name: faFileXsd, svg_format: true },
    format_name: 'XSD',
  },
  odt: {
    icon: { lib: '', name: faFileOdt, svg_format: true },
    format_name: 'ODT',
  },
  ods: {
    icon: { lib: '', name: faFileOds, svg_format: true },
    format_name: 'ODS',
  },
  odp: {
    icon: { lib: '', name: faFileOdp, svg_format: true },
    format_name: 'ODP',
  },
};

export const getFileViewFormat = (file) => {
  const regexEx = /(?:\.([^.]+))?$/;
  const fileExtension = regexEx.exec(file.filename)[1];
  const typeOfContent = file['content-type'] ?? file['mime_type'];

  const viewFormat = {
    icon: null,
    label: null,
  };
  if (FILE_EXTENSIONS[fileExtension]) {
    viewFormat.icon = FILE_EXTENSIONS[fileExtension].icon;
    viewFormat.label = FILE_EXTENSIONS[fileExtension].format_name;
  } else if (FILE_FORMATS[typeOfContent]) {
    viewFormat.icon = FILE_FORMATS[typeOfContent]?.icon;
    viewFormat.label = FILE_FORMATS[typeOfContent].format_name;
  }
  return viewFormat;
};
