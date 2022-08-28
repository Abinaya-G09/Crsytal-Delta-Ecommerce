import db from '../database/models';
import logger from '../database/config/logger';

const User = db.User;

let createUser = async (user) => {
  try {
    let response = await User.create({
      full_name: user.full_name,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
      updated_at: user.updated_at
    });
    return response;
  }
  catch(err) {
    logger.error(`An error occured ${err}`);
  }
};

export {createUser};
