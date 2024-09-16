import { useAuth } from '../context/AuthContext';
const Dashboard = () => {
  const { name } = useAuth();

  return (
    <div>Dashboard
        {name ? <p>Hello, {name}!</p> : <p>Please sign up</p>}
    </div>
  )
}

export default Dashboard