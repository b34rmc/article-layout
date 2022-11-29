import "../../styles/article.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        IMG PLACEHOLDER
        <img src="" alt="" />
      </div>
      <div className="top-header">
        <p>HEADER</p>
      </div>
      <div className="subHeader">
        <p>SUBHEADER</p>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="mainContainer">
      <div className="topArticle">
        <p>Main Content</p>
      </div>
      <div className="boxes">
        <div className="row">
          <div className="content">
            <p>Main Content</p>
          </div>
          <div className="img">
            <p>img</p>
          </div>
        </div>
        <div className="row">
          <div className="content">
            <p>Main Content</p>
          </div>
          <div className="img">
            <p>img</p>
          </div>
        </div>
      </div>
      <div className="btmArticle">
        <p>MAIN CONTENT</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="myWrapper">
      <div className="btn">
        <p>BUTTON</p>
      </div>
      <div className="socialIcons">
        <p>Social Icons</p>
      </div>
      <div className="cpyright">
        <p>copyright</p>
      </div>
    </div>
  );
};

function articles() {
  return (
    <div className="wrapper">
      <div className="main-header">
        <Header />
      </div>
      <div className="main-articles">
        <MainContent />
      </div>
      <div className="weirdBtmStuff">
        <Footer />
      </div>
    </div>
  );
}

export default articles;
