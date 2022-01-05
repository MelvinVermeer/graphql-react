import { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./App.css";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchBarTop, setSearchResultTop] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const placeHolderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) {
      return;
    }

    if (showOverlay) {
      overlayRef.current.classList.remove("-top-full");
      overlayRef.current.classList.remove("opacity-0");

      setSearchResultTop(0);
    } else {
      overlayRef.current.classList.add("opacity-0");

      setSearchResultTop(placeHolderRef.current?.offsetTop ?? 0);
    }
  }, [showOverlay]);

  useLayoutEffect(() => {
    function updatePosition() {
      if (!showOverlay && placeHolderRef.current) {
        setSearchResultTop(placeHolderRef.current.offsetTop);
      }
    }

    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [placeHolderRef.current?.offsetTop, showOverlay]);

  return (
    <>
      <div
        onTransitionEnd={() => {
          if (!showOverlay && overlayRef.current) {
            overlayRef.current.classList.add("-top-full");
          }
        }}
        ref={overlayRef}
        className="bg-green-900 text-white opacity-0 transition-opacity duration-500 fixed w-screen -top-full h-screen text-right"
      >
        <button onClick={() => setShowOverlay(false)}>CLOSE</button>
      </div>
      <div className="z-10 bg-gray-200 min-h-screen p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          bibendum, dui sed auctor feugiat, dui mi auctor magna, vel suscipit
          velit orci vel metus. Pellentesque euismod sagittis lacus. Praesent
          vestibulum magna a neque condimentum, at varius lectus porttitor.
          Mauris nec tortor ut neque ornare varius. Sed ac orci eget dolor
          sagittis ultrices nec fermentum massa. Curabitur eget arcu ut leo
          tincidunt consectetur eget in ipsum. In hac habitasse platea dictumst.
          Quisque gravida nibh neque, ut posuere velit dapibus eu. Fusce id
          purus vel mauris posuere tempus. Morbi aliquam metus nec lectus
          finibus, quis iaculis diam iaculis. Aliquam pulvinar finibus diam in
          condimentum. Morbi fringilla pellentesque dictum. Etiam ut ligula
          enim.
        </p>

        {/* height place holder for absolute searchbar */}
        <div ref={placeHolderRef} className="bg-yellow-200 h-8">
          <div
            ref={searchBarRef}
            style={{ top: searchBarTop }}
            onClick={() => setShowOverlay(true)}
            className={classNames(
              "duration-500 transition-all border-2 text-center absolute z-30",
              showOverlay
                ? "w-5/6 text-white border-green-400 left-0"
                : "w-1/3 border-gray-700 left-1/3"
            )}
          >
            SEARCHBAR
          </div>
        </div>

        <p>
          Sed dignissim leo in mattis convallis. Ut feugiat convallis massa, id
          venenatis mauris rutrum quis. Suspendisse porta, metus et sollicitudin
          mollis, neque lorem feugiat urna, a pulvinar mauris ipsum vitae nunc.
          Cras leo nisl, ultrices non erat vitae, faucibus hendrerit quam. Sed
          faucibus nec eros non convallis. Donec in ultrices mauris. Maecenas
          viverra massa lacus, at condimentum tellus fermentum vel. Sed ut arcu
          a odio sodales posuere. Nam a lectus a elit varius molestie pharetra
          eget urna. Aliquam suscipit non nunc at tincidunt. Cras in facilisis
          mi, eu venenatis velit. Suspendisse gravida ac leo congue volutpat.
          Vestibulum ante urna, imperdiet eget lacinia vitae, euismod quis nisl.
          Donec egestas mi quam, sed mollis tellus commodo ac. Proin
          sollicitudin cursus ligula quis varius.
        </p>
      </div>
    </>
  );
}
