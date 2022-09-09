import { useIsTablet } from "../hooks/useIsTablet";
const NavBar = () => {
  if (useIsTablet()) {
    return (
      <>
        <h4>Foo</h4>
      </>
    );
  }
  return (
    <>
      <h2>Bar</h2>
    </>
  );
};

export default NavBar;
