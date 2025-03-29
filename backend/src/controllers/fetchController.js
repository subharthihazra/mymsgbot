const slackService = require("../services/slackService");

exports.fetchChannels = async (req, res, next) => {
  try {
    const response = await slackService.fetchSlackChannels();

    if (response.data.ok === false) {
      throw new Error(response.data?.error);
    }
    const channelsList = response.data.channels.map((channel) => channel.name);
    res.status(200).json({ success: true, data: channelsList });
  } catch (error) {
    next(error);
  }
};
