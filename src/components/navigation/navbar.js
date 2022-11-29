import "../../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="top">
        <div className="top-logo">
          <p>LOGO</p>
        </div>
        <div className="btnWrapper">
          <div className="btn">
            <p>BUTTON</p>
          </div>
          <div className="btn">
            <p>BUTTON</p>
          </div>
          <div className="btn">
            <p>BUTTON</p>
          </div>
          <div className="btn">
            <p>BUTTON</p>
          </div>
        </div>
        <div className="btmLogo">
          <p>LOGO</p>
        </div>
      </div>
      <div className="space-filler"></div>
    </div>
  );
};

export default Navbar;
