import { Stack, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const DatasetPage = () => {
  const { datasetId } = useParams();
  const navigate = useNavigate();

  return (
    <Stack>
      <Typography variant={"h4"} align={"center"}>
        This is Dataset Page
      </Typography>
      <Typography variant={"h6"} align={"center"}>
        Page ID: {datasetId}
      </Typography>

      <Button
        variant={"contained"}
        onClick={() => navigate(-1)}
        sx={{ alignSelf: "center", margin: "20px 0 0" }}
      >
        Go Back to tab list
      </Button>
    </Stack>
  );
};

export default DatasetPage;
