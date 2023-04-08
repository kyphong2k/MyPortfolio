import { useRoutes } from 'react-router-dom';
import LazyloadRoutes from './LazyloadRoutes';
export function RouterElement() {
  const routes = [
    { path: '/', name: 'Home', element: LazyloadRoutes('Home') },
    { path: '/about', name: 'About', element: LazyloadRoutes('AboutMe') },
    { path: '/projects', name: 'Projects', element: LazyloadRoutes('Projects') },
    { path: '/timeline', name: 'Timeline', element: LazyloadRoutes('MyTimeline') },
    { path: '/contact', name: 'Contact', element: LazyloadRoutes('Contact') },
  ];
  return useRoutes(routes);
}
