/*
Questo file consente di customizzare l'header dei CT per aggiungere dati o customizzare l'header dei CT creati ad hoc nel proprio progetto.
Sovrascrivere questo file nel progetto figlio ed implementare la propria logica per l'estensionde dell'header.*/

//import React from 'react';
import PropTypes from 'prop-types';

const PageHeaderExtend = ({ content }) => {
  return null;
};
export default PageHeaderExtend;

PageHeaderExtend.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
    readingtime: PropTypes.string,
    showreadingtime: PropTypes.bool,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    showdates: PropTypes.bool,
    showtassonomiaargomenti: PropTypes.bool,
  }),
};
