import { useEffect, useState } from "react";
import "./App.css";
import ChannelDropdown from "./components/ChannelDropdown";
import { fetchChannels, sendMessage } from "./api/slackApi";
import { toast } from "sonner";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("-");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const data = await fetchChannels();
        setChannels(data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    loadChannels();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      
      if (!selectedChannel || !message)
        throw new Error("Please select a channel!");
      const data = await sendMessage(selectedChannel, message);
      
      if (data?.success === true) {
        toast("Message Sent!");
      }
      setSelectedChannel("-");
      setMessage("");
    } catch (e) {
      toast("Error Occurred", {
        description: e,
      });
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="my-6 mx-auto">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-4 w-max 2xl:w-2xl"
          >
            <div className="text-center text-2xl">MyMsgBot | Slack</div>
            <div className=" border-b border-black"></div>
            <div>
              <h3>Select a Channel</h3>
              <ChannelDropdown
                channels={channels}
                setSelectedChannel={setSelectedChannel}
                selectedChannel={selectedChannel}
              />
            </div>
            <div>
              <h3>Enter a message to send</h3>
              <Input
                type="text"
                placeholder="Enter Message ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="ml-auto"
              disabled={
                selectedChannel?.trim() === "" || message?.trim() === ""
              }
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
