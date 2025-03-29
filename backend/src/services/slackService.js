const axios = require("axios");
require("dotenv").config();

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_API_URL = "https://slack.com/api";

exports.sendSlackMessage = async (channel, text) => {
  return axios.post(
    `${SLACK_API_URL}/chat.postMessage`,
    {
      channel,
      text,
    },
    {
      headers: {
        Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};

exports.fetchSlackChannels = async (channel, text) => {
  return axios.get(`${SLACK_API_URL}/conversations.list`, {
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};
