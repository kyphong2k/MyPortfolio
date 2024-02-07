import React, {useEffect, useRef} from 'react';
import Navbar from './components/Navbar/Navbar';
import { RouterElement } from './routes';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import MyTimeline from './components/MyTimeline';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const timelineRef = useRef(null);

  // const refs = [homeRef, aboutRef, projectRef, timelineRef];

  // useEffect(() => {
  //   const isElementVisible = (element) => {
  //     if (element) {
  //       const rect = element.getBoundingClientRect();
  //       const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  //       // Check if the element is within the viewport
  //       return rect.top <= windowHeight && rect.bottom >= 0;
  //     }

  //     // If element is not available, consider it not visible
  //     return false;
  //   };

  //   const handleScroll = () => {
  //     refs.forEach((ref, index) => {
  //       const element = ref?.current;
  //       if (isElementVisible(element)) {
  //         switch (index) {
  //           case 0:
  //             console.log('homeRef', index)
  //             break;
  //           case 1:
  //             console.log('aboutRef', index)

  //             break;
  //           case 2:
  //             console.log('projectRef', index)

  //             break;
  //           case 3:
  //             console.log('timeline ref', index)

  //             break;
  //           default:
  //             break;
  //         }
  //       }
  //     });
  //   };

  //   // Attach the scroll event listener
  //  document.querySelector('.app').addEventListener('scroll', handleScroll);

  //   // Call the initial check when the component mounts

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //    document.querySelector('.app').removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className='app'>
      <Navbar />
      {/* <RouterElement /> */}
      <Home ref={homeRef}/>
      <AboutMe ref={aboutRef}/>
      <Projects ref={projectRef}/>
      <MyTimeline ref={timelineRef}/>
    </div>
  );
}

export default App;
