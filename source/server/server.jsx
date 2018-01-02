import express from 'express';
import bodyParser from 'body-parser';

/* BD */
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

/* SSR */
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/* Api Express */
import users from './routes/users';
import clientRoute from './routes/client';


/* Components */
import store from '../client/store/store';
import Routes from '../routes/Routes';
import Html from '../client/components/Html';

const app = express();

app.use(express.static('built/statics'));
app.use(bodyParser.json());

/* Middlewares */
app.use('/api/users', users);
app.use('/api/client', clientRoute.client);
app.use('/api/clients', clientRoute.clients);

app.get('*', async (req, res, next) => {
  try {
    const context = {};
    const body = await renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>,
    );

    const html = renderToStaticMarkup(
      <Html body={body} />);

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      res.end();
    } else {
      res.send(`<!doctype ${html}`);
      res.end();
    }
  } catch (err) {
    next(err);
  }
});

mongoose.connect('mongodb://localhost:27017/rocha', { useMongoClient: true }, (err) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Open server on address: ${address} and port: ${port}`);
  });
  return console.log('connect BD');
});