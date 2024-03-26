import { Avatar, IconButton } from "@mui/material";
import Layout from "../../components/common/Layout";
import SearchBar from "../../components/common/SearchBar";
import FlexBox from "../../components/styled/FlexBox";
import ThinLine from "../../components/styled/ThinLine";
import LongButton from "../../components/styled/LongButton";
import CardButton from "../../components/styled/CardButton";
import { Upload } from "./types";
import UploadUser from "./UploadUser";

type SubtitleTrack = {
  language: string;
  length: string;
};

const uploads: Upload[] = [
  {
    name: "John Doe",
    avatar: "JD",
    color: "purple",
  },
  {
    name: "Emily Chen",
    avatar: "EC",
    color: "indigo",
  },
  {
    name: "Alex Brown",
    avatar: "AB",
    color: "orangered",
  },
  {
    name: "Sophie Nielson",
    avatar: "SN",
    color: "darkgreen",
  },
  {
    name: "Maxwell Kim",
    avatar: "MK",
    color: "brown",
  },
  {
    name: "Olivia White",
    avatar: "OW",
    color: "green",
  },
  {
    name: "Ryan Ng",
    avatar: "RN",
    color: "darkblue",
  },
  {
    name: "Ella Stone",
    avatar: "ES",
    color: "red",
  },
];

const subtitleTracks: SubtitleTrack[] = [
  {
    language: "English, United",
    length: "09:30",
  },
  {
    language: "French, France",
    length: "12:45",
  },
  {
    language: "Spanish, Spain",
    length: "10:15",
  },
  {
    language: "German, Germany",
    length: "10:15",
  },
];

export default function Search() {
  return (
    <Layout>
      <FlexBox flexDirection="column" gap="2rem" width="100%">
        <FlexBox
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <SearchBar />
          <IconButton>
            <Avatar sx={{ bgcolor: "purple" }}>AM</Avatar>
          </IconButton>
        </FlexBox>
        <FlexBox height="80%" width="100%" flexDirection="column" gap="2rem">
          <strong>Videos Uploads</strong>
          <FlexBox gap="2rem">
            {uploads.map((upload) => (
              <UploadUser upload={upload} />
            ))}
          </FlexBox>
          <ThinLine />
          <strong>Videos</strong>
          <FlexBox gap="2rem">
            <LongButton>Manage Videos</LongButton>
            <LongButton>Language Preferences</LongButton>
            <LongButton>Generate Subtitles</LongButton>
          </FlexBox>
          <ThinLine />
          <strong>Language Selection</strong>
          <FlexBox gap="2rem">
            {subtitleTracks.map((track) => (
              <CardButton>
                <strong>{track.language}</strong>
                {track.length}
              </CardButton>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
}
