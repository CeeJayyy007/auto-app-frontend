import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import Authentication from './pages/Authentication';
import Playground from './pages/playground';

function App() {
  return (
    <div>
      {/* <Playground />; */}
      {/* <Authentication /> */}
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}
export default App;
