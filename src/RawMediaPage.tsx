import { Box, Stack, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DatasetList from "./DatasetList";
import { DATASET_DATA } from "./mockData";

const RawMediaPage = () => {
  const { rawMediaId } = useParams();
  const navigate = useNavigate();

  return (
    <Stack>
      <Typography variant={"h4"} align={"center"}>
        This is RAW Media Page
      </Typography>
      <Typography variant={"h6"} align={"center"}>
        Page ID: {rawMediaId}
      </Typography>
      <Button
        variant={"contained"}
        onClick={() => navigate(-1)}
        sx={{ alignSelf: "center", margin: "20px 0 0" }}
      >
        Go Back to tab list
      </Button>

      <Stack
        gap={"40px"}
        mt={"50px"}
        sx={{ background: "tomato", padding: "20px" }}
      >
        <Typography variant={"h6"} align={"center"}>
          This is Dataset List on RAW Media Page
        </Typography>
        <DatasetList data={DATASET_DATA} />
      </Stack>
    </Stack>
  );
};

export default RawMediaPage;
