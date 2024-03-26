import { IconButton } from "@mui/material";
import FlexBox from "../styled/FlexBox";
import TextBox from "../styled/TextBox";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <FlexBox width="60%" position="relative" alignItems="center">
    <TextBox
      name="search"
      placeholder="Search"
      autoComplete="off"
      sx={{
        backgroundColor: "white",
        height: "2.5rem",
        boxShadow: "8px 8px 24px 0px rgba(209,209,209,1)",
      }}
    />
    <IconButton sx={{ position: "absolute", right: "0" }}>
      <Search />
    </IconButton>
  </FlexBox>
);

export default SearchBar;
