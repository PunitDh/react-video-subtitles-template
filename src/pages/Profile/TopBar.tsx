import { Avatar, IconButton } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import { VideoLibrary } from "@mui/icons-material";
import LongButton from "../../components/styled/LongButton";
import SearchBar from "../../components/common/SearchBar";

const TopBar = () => (
  <>
    <SearchBar />
    <FlexBox gap="1rem" alignItems="center">
      <LongButton>Add Video</LongButton>
      <IconButton>
        <Avatar>
          <VideoLibrary />
        </Avatar>
      </IconButton>
      <IconButton>
        <Avatar>A</Avatar>
      </IconButton>
    </FlexBox>
  </>
);

export default TopBar;
