import withLayout from "../../hoc/withLayout";
import Box from "@mui/material/Box";
import AddMemeForm from "../../components/AddMemeForm/AddMemeForm";
import SearchMemeListing from "../../components/SearchMemeListing/SearchMemeListing";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SearchMemeListing />
    </Box>
  );
};
export default withLayout(Home);
