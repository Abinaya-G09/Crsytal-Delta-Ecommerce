import express from 'express';
import accountList from '../sampleResponse/accountList';
import accountDetails from '../sampleResponse/accountDetails';

let Account = express.Router();

Account.get('/', async (req, res) => {
  res.status(200).json(accountList);
});

Account.get('/details', async (req, res) => {
  res.status(200).json(accountDetails);
});
export default Account;
