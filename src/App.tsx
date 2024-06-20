import './App.css';
import Sidebar from './layouts/Sidebar';
import AboutErg from './pages/AboutErg';
import Simulator from './pages/Simulator';
import Materials from './pages/Materials';
import { useRecoilValue } from 'recoil';
import { currentPageState } from './stores/PageState';
function App() {
  const currentPage = useRecoilValue(currentPageState);

  const renderPage = () => {
    switch (currentPage) {
      case 'simulator':
        return <Simulator />;
      case 'about-erg':
        return <AboutErg />;
      case 'materials':
        return <Materials />;
      default:
        return <Simulator />;
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App
