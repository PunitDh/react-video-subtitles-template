import LongButton from "../../components/styled/LongButton";
import ElevatedCard from "../../components/styled/ElevatedCard";

const DeleteVideos = () => {
  return (
    <ElevatedCard
      height="6rem"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      Keep your videos secure. Delete if needed.{" "}
      <LongButton>Delete Videos</LongButton>
    </ElevatedCard>
  );
};

export default DeleteVideos;
