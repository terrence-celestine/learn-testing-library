import ErrorBoundary from "./ErrorBoundary";
import NavBar from "./Navbar";
import { UserList } from "./UserList";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar />
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
