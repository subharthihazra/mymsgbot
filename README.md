# MyMsgBot | Slack

A simple web application that allows users to send messages to a Slack channel.

## Tech Stack
- **Frontend:** Vite, React, TailwindCSS, ShadCN, SlackAPI
- **Backend:** Node.js, Express
- **Slack API:** Used for fetching channels and sending messages

## Implementation
1. **Backend (Node.js + Express)**
   - Created API endpoints to fetch public Slack channels and send messages.
   - Used Slack API for authentication and communication.
   - Handled environment variables securely using `.env`.

2. **Frontend (Vite + React)**
   - Built a simple UI with a text input and dropdown for selecting a channel.
   - Used `fetch` to retrieve available channels dynamically.
   - Styled using TailwindCSS and ShadCN components.

3. **Integration**
   - Connected frontend with backend via API calls.
   - Implemented error handling and form validation.

---
🚀 **Built for quick and easy Slack messaging!**

