import { Avatar } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import ProfilePhoto from "../../assets/profilephoto.png";
import { useRef, useState } from "react";
import EditButton from "../../components/styled/EditButton";
import { handleImageChange } from "../../utils/input";

const AvatarSelect = () => {
  const editPhotoRef = useRef<HTMLInputElement | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string>(ProfilePhoto);

  return (
    <FlexBox position="relative" width="40%" aspectRatio="1/1">
      <Avatar sx={{ width: "100%", height: "100%" }}>
        <img src={profilePhoto} alt="Profile" width="100%" height="100%" />
      </Avatar>
      <FlexBox position="absolute" right="0" top="0">
        <input
          type="file"
          ref={editPhotoRef}
          hidden
          accept="image/png, image/jpeg"
          onChange={handleImageChange(setProfilePhoto)}
        />
        <EditButton onClick={() => editPhotoRef.current?.click()} />
      </FlexBox>
    </FlexBox>
  );
};

export default AvatarSelect;
