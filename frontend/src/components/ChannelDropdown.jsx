import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ChannelDropdown = ({ channels, setSelectedChannel, selectedChannel }) => {
  return (
    <Select
      onValueChange={(e) => setSelectedChannel(e)}
      value={selectedChannel}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Channel" />
      </SelectTrigger>
      <SelectContent>
        {channels.map((channel, i) => (
          <SelectItem key={i} value={channel}>
            #{channel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ChannelDropdown;
