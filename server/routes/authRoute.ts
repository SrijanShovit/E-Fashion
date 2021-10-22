import express, { Express } from 'express';
const router: Express = express();

import { login, signup } from '../controllers/authController';

router.route('/signup').post(signup);
router.route('/login').post(login);

export = router;
