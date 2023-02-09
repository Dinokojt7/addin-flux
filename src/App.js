import { useState, useEffect } from 'react';
import './App.css';
import Body from './Components/body';
import Footer from './Components/Footer';
import Header from './Components/Header/header';
import classNames from "classnames";

function App() {

  const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    
      useEffect(() => {
          addEventListeners();
          handleLinkHoverEvents();
          return () => removeEventListeners();
        }, []);
    
      const addEventListeners = () => {
          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseenter", onMouseEnter);
          document.addEventListener("mouseleave", onMouseLeave);
          document.addEventListener("mousedown", onMouseDown);
          document.addEventListener("mouseup", onMouseUp);
        };
    
      const removeEventListeners = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseenter", onMouseEnter);
          document.addEventListener("mouseleave", onMouseLeave);
          document.addEventListener("mousedown", onMouseDown);
          document.addEventListener("mouseup", onMouseUp);
        };
    
      const onMouseMove = (e) => {
          setPosition({x: e.clientX, y: e.clientY});
        };
       
      const onMouseLeave = () => {
          setHidden(true);
        };
        
      const onMouseEnter = () => {
          setHidden(false);
        };

      const onMouseDown = () => {
          setClicked(true);
      };

      const onMouseUp = () => {
        setClicked(false);
    };

      const handleLinkHoverEvents = () => {
          document.querySelectorAll("button").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
          });
      };

      const cursorClasses = classNames(
          'cursor',
          {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
          }
        );
        
      const isMobile = () => {
          const ua = navigator.userAgent;
          return /Android|Mobi/i.test(ua);
        };

      const Cursor = () => {
          if (typeof navigator !== 'undefined' && isMobile()) return null;
        }

       return( 
            <div className={cursorClasses}
               style={{
                   left: `${position.x}px`,
                   top: `${position.y}px`
               }}/>
        )
  }
  return (
    <div className="App w-full flex flex-col bg-red-50 bg-opacity-20 justify-between">
      <Cursor />
      <header className="z-50 App-header pr-5">
        <Header />       
      </header>
      <body className="relative">
        <Body />
      </body>
      <footer className="w-full bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
