import "./withLayout.scss";
import AppBarSearchField from "../components/AppBarSearchField/AppBarSearchField";
import { styled } from "@mui/material/styles";

const WallPaper = styled("div")(({ theme }) => ({
  zIndex: -999,
  position: "absolute",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background:
    theme.palette.mode === "dark"
      ? "rgb(180, 180, 180)"
      : "radial-gradient(rgb(250, 250, 250) 70%, rgb(250, 250, 250) 100%)",
}));

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;
  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppBarSearchField />
        <WrappedComponent {...props} />
        <WallPaper />
      </>
    );
  }
  return WrapperComponent;
}
export default withLayout;
