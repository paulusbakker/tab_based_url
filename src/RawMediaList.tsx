import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const RawMediaList = ({ data }: { data: { id: number; name: string }[] }) => {
  return (
    <Stack gap={"10px"}>
      {data.map((item) => {
        return (
          <Box
            key={item.id}
            component={Link}
            to={`${item.id}`}
            sx={{
              color: "black",
              padding: "10px 20px",
              background: "lightgray",
              textDecoration: "none"
            }}
          >
            {item.name}
          </Box>
        );
      })}
    </Stack>
  );
};

export default RawMediaList;
