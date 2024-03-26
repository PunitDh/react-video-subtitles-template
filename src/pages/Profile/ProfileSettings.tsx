import { Grid } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import ProfilePhoto from "../../assets/profilephoto.png";
import LongButton from "../../components/styled/LongButton";
import { useRef, useState } from "react";
import { handleImageChange } from "../../utils/input";

const ProfileSettings = () => {
  const changePhotoRef = useRef<HTMLInputElement>(null);
  const [profilePhoto, setProfilePhoto] = useState<string>(ProfilePhoto);

  return (
    <>
      <Grid item xs={3}>
        <strong>Profile Settings</strong>
      </Grid>
      <Grid item xs={9}>
        <FlexBox gap="2rem">
          <input
            type="file"
            hidden
            ref={changePhotoRef}
            onChange={handleImageChange(setProfilePhoto)}
          />
          <img src={profilePhoto} alt="Profile" width={128} height={128} />
          <FlexBox
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="0.5rem"
          >
            <LongButton onClick={() => changePhotoRef.current?.click()}>
              Change Photo
            </LongButton>
            <strong>Supported formats: png, jpg.</strong>
            <strong>Max file size: 100 MB.</strong>
          </FlexBox>
        </FlexBox>
      </Grid>
    </>
  );
};

export default ProfileSettings;
