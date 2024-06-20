import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/about-erg" className="full-link">테스트1</Link>
        </li>
        <li>
          <Link to="/" className="full-link">테스트2</Link>
        </li>
        <li>
          <Link to="/materials" className="full-link">테스트3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
