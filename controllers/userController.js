const Users = require('../models/userModel');


const genKey = () => {
  //create a base-36 string that is always 30 chars long a-z0-9
  // 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
  return [...Array(30)]
    .map((e) => ((Math.random() * 36) | 0).toString(36))
    .join('');
};

exports.createUser = async (req, res) => {

  let _email = req.params.email;
  let today = new Date().toISOString().split('T')[0];
  let user = {
    email: _email,
    apikey: genKey(),
  };
 
  console.log('add user');
  try {
    const newuser = await Users.create(user);

    res.status(201).json({
      status: 'success',
      data: {
        User: newuser
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.validate = async (req, res, next) => {

  const user = await Users.find({ apikey: req.params.apikey});
  const users =  user;
  let apiikey = req.params.apikey
  let account = users.find(
    (users) => users.apikey == apiikey
  );
  if(account) {
    console.log('true');
    next();
  }
  else{
    console.log('ia');
    res.status(400).json({
      status: 'fail',
      message: 'failed'
    });

  }
};
