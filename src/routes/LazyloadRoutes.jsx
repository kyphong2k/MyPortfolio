import React, { lazy, Suspense } from 'react';

export default function LazyloadRoutes(componentName) {
  const LazyElement = lazy(() => import(`../components/${componentName}`));
  return (
    <Suspense fallback='...Loading'>
      <LazyElement />
    </Suspense>
  );
}
