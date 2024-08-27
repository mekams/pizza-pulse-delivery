import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loader from './components/Loader.jsx';

// Lazy load the Layout component
const Layout = lazy(() => import('./components/Layout.jsx'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or any async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);  // Adjust the timeout as needed
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      )}
    </div>
  );
}

export default App;
