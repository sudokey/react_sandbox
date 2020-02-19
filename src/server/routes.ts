import { renderToNodeStream } from 'react-dom/server';
import { Router } from 'express';
import * as store from '../store';
import Template from './template';

const router = Router();
const staticVersion = (new Date()).getTime();

router.get('/*', (req, res) => {
  res.write('<!DOCTYPE html>');

  renderToNodeStream(Template({
    staticVersion,
    location: req.url,
    store: store.createStore(),
  })).pipe(res);
});

export default router;
