import { Stack, Typography, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

// type Tab = "raw-medias" | "datasets";

const FilesPage = () => {
  return (
    <Stack gap={"30px"}>
      <Typography variant="h4" align={"center"}>
        FilesPage
      </Typography>
      <Stack direction={"row"} gap={"10px"}>
        <NavLink className="tab-link" to="raw-medias">
          {({ isActive }: { isActive: boolean }) => (
            <Button
              variant="contained"
              sx={{ background: isActive ? undefined : "gray" }}
            >
              Raw Medias Tab
            </Button>
          )}
        </NavLink>
        <NavLink className="tab-link" to="datasets">
          {({ isActive }: { isActive: boolean }) => (
            <Button
              variant="contained"
              sx={{ background: isActive ? undefined : "gray" }}
            >
              Datasets Tab
            </Button>
          )}
        </NavLink>
      </Stack>

      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default FilesPage;
