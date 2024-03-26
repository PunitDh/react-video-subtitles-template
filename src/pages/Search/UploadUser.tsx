import { Avatar, Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import { Upload } from "./types";

type Props = {
  upload: Upload;
};

const UploadUser = ({ upload }: Props) => (
  <FlexBox flexDirection="column" gap="0.5rem" alignItems="center">
    <Avatar
      sx={{
        bgcolor: upload.color,
        width: "4rem",
        height: "4rem",
      }}
    >
      {upload.avatar}
    </Avatar>
    <Typography variant="caption">
      <strong>{upload.name}</strong>
    </Typography>
  </FlexBox>
);

export default UploadUser;
