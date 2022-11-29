import Navbar from "./components/navigation/navbar.js";
import Articles from "./components/articleLayout/article.js";

import "./styles/App.scss";

function App() {
  return (
    <div className="page-wrapper">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="main-content">
        <Articles />
      </div>
    </div>
  );
}

export default App;
