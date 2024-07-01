const User = require('../Models/user');

exports.getDetails = async (req, res, next) => {
  try {
    // Fetch the user's location and greeting (assuming you want the first user's details for this example)
    const users = await User.find().select('location greeting').exec();
    const userLocation = users.length > 0 ? users[0].location : 'Unknown';
    const userGreeting = users.length > 0 ? users[0].greeting : 'No greeting available';

    const clientIp = req.headers['x-real-ip'] ||
                     req.connection.remoteAddress ||
                     req.socket.remoteAddress ||
                     (req.connection.socket ? req.connection.socket.remoteAddress : null);

    res.status(200).send({
      clientIp: `Your IP address is ${clientIp}`,
      location: userLocation,
      greeting: userGreeting
    });
  } catch (error) {
    next(error); // Pass the error to the next middleware or error handler
  }
};
