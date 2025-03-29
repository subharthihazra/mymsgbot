const slackService = require('../services/slackService');

exports.sendMessage = async (req, res, next) => {
    try {
        const { channel, text } = req.body;
        if (!channel || !text) {
            return res.status(400).json({ error: 'Channel and message text are required' });
        }
        const response = await slackService.sendSlackMessage(channel, text);
        
        if(response.data.ok === false){
          throw new Error(response.data?.error);
        }
        
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        next(error);
    }
};
