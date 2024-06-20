import './Sidebar.css';
import { useRecoilState } from 'recoil';
import { currentPageState } from '../stores/PageState';

const Sidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  return (
    <div className="sidebar">
      <ul>
        <li
          className={currentPage === 'about-erg' ? 'active' : ''}
          onClick={() => setCurrentPage('about-erg')}
        >
          About Erg
        </li>
        <li
          className={currentPage === 'simulator' ? 'active' : ''}
          onClick={() => setCurrentPage('simulator')}
        >
          Simulator
        </li>
        <li
          className={currentPage === 'materials' ? 'active' : ''}
          onClick={() => setCurrentPage('materials')}
        >
          Materials
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;