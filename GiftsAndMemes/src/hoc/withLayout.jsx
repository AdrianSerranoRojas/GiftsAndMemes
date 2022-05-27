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
      ? "linear-gradient(#051328 0%, #142504 100%)"
      : "linear-gradient(rgb(149, 81, 114) 0%, rgb(174, 108, 97) 100%)",

  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(28, 34, 92) 0%, rgba(62, 78, 249, 0) 64%)",
  },
  "&:after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225,0.8) 0%, rgba(247, 237, 225, 0) 65%)",
    transform: "rotate(30deg)",
  },
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
