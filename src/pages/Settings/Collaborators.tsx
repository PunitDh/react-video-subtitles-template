import { Avatar, Typography } from "@mui/material";
import FlexBox from "../../components/styled/FlexBox";
import { Person3, TranslateSharp, Wallpaper } from "@mui/icons-material";
import TextBox from "../../components/styled/TextBox";
import LongButton from "../../components/styled/LongButton";
import ElevatedCard from "../../components/styled/ElevatedCard";
import { MuiIcon } from "../../utils/types";

type Collaborator = {
  id: number;
  name: string;
  role: "Owner" | "Editor";
  icon: MuiIcon;
};

const Collaborators = () => {
  const collaborators: Collaborator[] = [
    {
      id: 1,
      name: "Your Name",
      role: "Owner",
      icon: Person3,
    },
    {
      id: 2,
      name: "Collaborator",
      role: "Editor",
      icon: TranslateSharp,
    },
    {
      id: 3,
      name: "Collaborator",
      role: "Editor",
      icon: Wallpaper,
    },
  ];

  return (
    <>
      <Typography variant="h6">
        <strong>Manage Collaborators</strong>
      </Typography>
      <ElevatedCard height="16rem">
        <FlexBox
          gap="0.5rem"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <FlexBox flexDirection="column">
            {collaborators.map((collaborator) => (
              <FlexBox
                gap="2rem"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                key={collaborator.id}
              >
                <FlexBox gap="1.5rem" alignItems="center">
                  <Avatar sx={{ bgcolor: "white" }}>
                    <collaborator.icon sx={{ color: "#666" }} />
                  </Avatar>
                  <Typography variant="subtitle1">
                    <strong>{collaborator.name}</strong>
                  </Typography>
                </FlexBox>
                <FlexBox flexDirection="column" gap="0.25rem">
                  <FlexBox
                    gap="2rem"
                    justifyContent="space-between"
                    width="100%"
                  >
                    {collaborator.role}
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            ))}
          </FlexBox>
          <FlexBox gap="2rem" alignItems="center">
            <TextBox
              placeholder="Enter email address to invite"
              sx={{ height: "2.5rem" }}
            />
            <LongButton>Invite</LongButton>
          </FlexBox>
        </FlexBox>
      </ElevatedCard>
    </>
  );
};

export default Collaborators;
