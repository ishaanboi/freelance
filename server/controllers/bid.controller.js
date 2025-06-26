const Bid = require('../models/bid');

exports.placeBid = async (req, res) => {
  try {
    const { bidAmount, message, projectId } = req.body;

    const newBid = new Bid({
      freelancer: req.user.id,
      project: projectId,
      bidAmount,
      message
    });

    await newBid.save();
    res.status(201).json(newBid);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBidsForProject = async (req, res) => {
  try {
    const bids = await Bid.find({ project: req.params.projectId })
      .populate('freelancer', 'name email');
    res.json(bids);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
