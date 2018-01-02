import React from 'react';
import PropTypes from 'prop-types';

function Html(props) {
  return (
    <html className="no-js" lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>LEL</title>
        <meta name="description" content="LEL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src="/app.js" />
      </body>
    </html>
  );
}

Html.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Html;
