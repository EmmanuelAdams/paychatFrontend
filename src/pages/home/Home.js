import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

import './home.css';

function Home() {
  return (
    <>
      <Topbar />
      <div className="homePageContainer">
        <Feed />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
