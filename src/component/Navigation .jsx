import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="p-4 bg-gray-200 rounded">
    <Link to="/" className="mr-4 text-purple-600 hover:underline">Dashboard UI</Link>
    <Link to="/biographical" className="text-purple-600 hover:underline">Biographical UI</Link>
  </div>
);

export default Navigation;
