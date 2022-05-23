import "./withLayout.scss";
import AppBarSearchField from "../components/AppBarSearchField/AppBarSearchField";

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
      </>
    );
  }
  return WrapperComponent;
}
export default withLayout;
