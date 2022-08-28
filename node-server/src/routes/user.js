import express from 'express';
import { createUser } from '../controllers/user.Controller';

let User = express.Router();

User.post('/', async (req, res) => {
  let userData = req.body;
  let user = {
    full_name: userData.full_name,
    email: userData.email,
    password: userData.password,
    created_at: userData.created_at,
    updated_at: userData.updated_at
  };
  let response = await createUser(user);
  res.status(200).json(response);
});

export default User;
