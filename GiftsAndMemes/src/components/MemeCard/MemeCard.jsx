import React from "react";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

export default function MemeCard({ meme }) {
  console.log(meme);
  const memeUrl = meme?.memeFile?.url;
  const memeUrlGif = meme?.memeFile?.url.slice(0, -3) + "gif";

  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: 0,
        my: 0.5,
        display: "flex",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Grid container spacing={12}>
        <Grid item xs={0.5}>
          <img
            variant="square"
            src={memeUrlGif}
            sx={{ width: 56, height: 56 }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
