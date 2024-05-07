import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Carousel.module.css";

function Carousel({ imageList }) {
  const [list, setList] = useState(imageList);
  const [firstIndex, setIndex] = useState(0);

  const [finalDisplayList, setFinalDisplayList] = useState([]);

  const nextButtonRef = useRef();
  const prevButtonRef = useRef();

  useEffect(() => {
    let flag = 0;
    let displayImages = [];

    for (let i = 0; i <= list.length; i++) {
      if (flag < 4) {
        flag++;
        displayImages.push(list[i]);
      } else {
        break;
      }
    }
    setFinalDisplayList([...displayImages]);
    setIndex(0);
    prevButtonRef.current.style.display = "none";
  }, []);

  const handlePrev = () => {
    let flag = 0;
    let displayImages = [];
    for (let i = firstIndex - 1; i < list.length; i--) {
      if (list[i] !== undefined) {
        if (flag < 4) {
          flag++;
          displayImages.unshift(list[i]);
        } else {
          break;
        }
        nextButtonRef.current.style.display = "block";
      } else {
        prevButtonRef.current.style.display = "none";
        break;
      }
    }
    setFinalDisplayList([...displayImages]);
    setIndex((prev) => prev - 4);
  };

  const handleNext = () => {
    setFinalDisplayList([]);
    let flag = 0;
    let displayImages = [];

    for (let i = firstIndex + 4; i <= list.length; i++) {
      if (list[i] !== undefined) {
        if (flag < 4) {
          flag++;
          displayImages.push(list[i]);
          nextButtonRef.current.style.display = "block";
          prevButtonRef.current.style.display = "block";
        } else {
          break;
        }
      } else {
        nextButtonRef.current.style.display = "none";
        prevButtonRef.current.style.display = "block";
        break;
      }
    }
    setFinalDisplayList([...displayImages]);
    setIndex((prev) => prev + 4);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={styles.prevButton}
        onClick={handlePrev}
        ref={prevButtonRef}
      >
        Prev
      </button>
      <div className={styles.listImg}>
        {finalDisplayList &&
          finalDisplayList.map((item, index) => {
            return (
              <div key={index} className={styles.carouselImageContainer}>
                <img className={styles.carouselImage} src={item.src} />
              </div>
            );
          })}
      </div>
      <button
        className={styles.nextButton}
        onClick={handleNext}
        ref={nextButtonRef}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
