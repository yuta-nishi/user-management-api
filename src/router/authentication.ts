import express from 'express';

import { register } from '../handlers/authentication';

export default (router: express.Router) => {
  router.post('/auth/register', register);
};
