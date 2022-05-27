import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MemeCard from "../../components/MemeCard/MemeCard";
import { useGetMemesFilteredQuery } from "../../services/memeApi";
import { memesSelector } from "../../features/memes/memesSlice";

const Widget = styled("div")(({ theme }) => ({
  overflowY: "scroll",
  padding: 0,
  height: "70.5vh",
  borderRadius: 0,
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: theme.palette.mode === "dark" ? "#0000000" : "#0000000",
  // backdropFilter: "blur(40px)",
}));

function SearchMemeListing() {
  const { filterMeme } = useSelector(memesSelector);
  const { data, isLoading, isSuccess } = useGetMemesFilteredQuery(filterMeme);

  return (
    <>
      {isSuccess && (
        <Box sx={{ pt: 0 }}>
          <Widget
            sx={{
              boxShadow: 0,
              p: 2,
              maxwidth: 750,
              maxheight: 200,
            }}
          >
            <Box>
              {isSuccess &&
                data.data.map((meme, index) => {
                  return <MemeCard key={index} meme={meme} />;
                })}
            </Box>
          </Widget>
        </Box>
      )}
    </>
  );
}

export default SearchMemeListing;
