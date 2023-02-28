import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Stack gap={"30px"}>
      <Box
        sx={{ background: "lightblue", padding: "20px", borderRadius: "20px" }}
      >
        <Typography variant="h4" align={"center"}>
          HomePage
        </Typography>

        <Button
          variant={"contained"}
          onClick={() => navigate("/")}
          sx={{ margin: "0 20px", background: "green" }}
        >
          Go to HomePage
        </Button>

        <Button
          variant={"contained"}
          onClick={() => navigate("/files")}
          sx={{ background: "green" }}
        >
          Go to files page
        </Button>
      </Box>

      <Outlet />
    </Stack>
  );
};

export default HomePage;
