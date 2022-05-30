import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MemeCard from "../../components/MemeCard/MemeCard";
import {
  useGetMemesFilteredQuery,
  useGetMemesQuery,
} from "../../services/memeApi";
import { memesSelector } from "../../features/memes/memesSlice";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

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
  const { data:dataAll, isSuccess:isSAll } = useGetMemesQuery();

  console.log(dataAll)

   return (
     <ImageList sx={{ width: 500, height: 450 }}>
       <ImageListItem key="Subheader" cols={2}>
         <ListSubheader component="div">MEMES</ListSubheader>
       </ImageListItem>
       {isSAll &&
       dataAll.data.map((item) => (
         <ImageListItem key={item.memeFile.url}>
           <img
             src={`${item.memeFile.url.slice(0, -3) + "gif"}`}

             alt={item.title}

           />
           <ImageListItemBar
             title={item.title}
             subtitle={item.author}
             actionIcon={
               <IconButton
                 sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                 aria-label={`info about ${item.title}`}
               >
                 <InfoIcon />
               </IconButton>
             }
           />
         </ImageListItem>
       ))}
     </ImageList>
   );

  // return (
  //   <>
  //     {isSAll && (
  //       <Box sx={{ pt: 0 }}>
  //         <Widget
  //           sx={{
  //             boxShadow: 0,
  //             p: 2,
  //             maxwidth: 750,
  //             maxheight: 200,
  //           }}
  //         >
  //           <Box>
  //             {isSAll &&
  //               dataAll.data.map((meme, index) => {
  //                 return <MemeCard key={index} meme={meme} />;
  //               })}
  //           </Box>
  //         </Widget>
  //       </Box>
  //     )}
  //   </>
  // );
}

export default SearchMemeListing;
