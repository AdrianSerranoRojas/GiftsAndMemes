import withLayout from "../../hoc/withLayout";
import Box from "@mui/material/Box";
import AddMemeForm from "../../components/AddMemeForm/AddMemeForm";
import SearchMemeListing from "../../components/SearchMemeListing/SearchMemeListing";

const UploadPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <AddMemeForm />
    </Box>
  );
};
export default withLayout(UploadPage);
