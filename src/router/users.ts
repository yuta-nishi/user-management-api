import express from 'express';

import { getAllUsers } from '../handlers/users';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
};
