import ErrorBoundary from "./ErrorBoundary";
import { UserList } from "./UserList";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
