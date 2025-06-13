import React, { Suspense } from 'react';
import AppRouter from './router';
import { LoadingSpinner } from './components/ui/feedback';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;