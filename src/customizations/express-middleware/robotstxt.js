import express from 'express';

import { generateRobots } from '@italia/helpers';

export const robots = function (req, res, next) {
  generateRobots(req).then((robots) => {
    res.set('Content-Type', 'text/plain');
    //res.set('Content-Disposition', 'attachment; filename="robots.txt"');
    res.send(robots);
  });
};

export default function () {
  const middleware = express.Router();
  if (process.env.VOLTO_ROBOTSTXT) {
    middleware.all('**/robots.txt', function (req, res) {
      res.type('text/plain');
      res.send(process.env.VOLTO_ROBOTSTXT);
    });
    middleware.id = 'robots.txt';
  } else {
    middleware.all('**/robots.txt', robots);
    middleware.id = 'robots.txt';
  }
  return middleware;
}
