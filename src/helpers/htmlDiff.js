import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-intl-redux';
import { DefaultView } from '@plone/volto/components';
import { ConnectedRouter } from 'connected-react-router';

export const blockIsNotEmptyPlaceholder = (blockField) => {
  if (!!!blockField?.blocks) return true;
  return Object.values(blockField?.blocks)?.some((entry) => {
    const type = entry['@type'];
    if (entry[type]?.blocks?.length > 0) return true;
    else if (type === 'image' && entry[type]?.url) return true;
    else return false;
  });
};

export const SSRRenderHtml = (history, store, content, type) => {
  if (type === 'json' || type === 'blocks') {
    return ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <DefaultView content={content} />
        </ConnectedRouter>
      </Provider>,
    );
  }
  // Somehow not rendering correctly, defaulted to using filename
  // else if (type === 'image') {
  //   return content
  //     ? ReactDOMServer.renderToStaticMarkup(
  //         <Provider store={store}>
  //           <ConnectedRouter history={history}>
  //             <img
  //               // image={content}
  //               role="presentation"
  //               src={content.image?.download}
  //               key={content.image?.download}
  //               alt={content.filename}
  //             />
  //           </ConnectedRouter>
  //         </Provider>,
  //       )
  //     : '<p></p>';
  // }
  else if (type.includes('image')) {
    return `<p>${content?.filename ?? ''}</p>`;
  } else if (type === 'geolocation') {
    const toRender = content
      ? `Latitudine: ${content?.latitude ?? ''}, Longitudine: ${
          content?.longitude ?? ''
        }`
      : '';
    return `<p>${toRender}</p>`;
  } else return `<p>${content ?? ''}</p>`;
};
