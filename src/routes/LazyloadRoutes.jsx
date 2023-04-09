import React, { lazy, Suspense } from 'react';
import PreLoader from '../components/PreLoader';

export default function LazyloadRoutes(componentName) {
  const LazyElement = lazy(() => import(`../components/${componentName}`));
  return (
    <Suspense fallback={<PreLoader />}>
      <LazyElement />
    </Suspense>
  );
}
