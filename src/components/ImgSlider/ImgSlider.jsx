import { useState } from 'react';
import css from './ImgSlider.module.css';
import { FcLeft, FcRight } from 'react-icons/fc';
//   useEffect(() => {
//     // setInterval(() => {
//     //   handleClickIncremet();
//     // }, 2000);
//   }, []);

export default function ImgSlider() {
  const [index, setIndex] = useState(0);

  const images = [
    'https://zastavok.net/ts/zima/166724994979.jpg',
    'https://zastavok.net/ts/animals/166724814396.jpg',
    'https://zastavok.net/ts/minimalizm/166724982136.jpg',
    'https://zastavok.net/ts/sport/166724958674.jpg',
  ];

  const handleClickIncremet = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleClickDecrement = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={css.Wrapper}>
      <img className={css.Img} src={images[index]} alt="img" />

      <div className={css.Markers__wrapper}>
        {images.map((image, idx) => {
          // [div[0], div[1], div[2], div[3]]
          return (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: index === idx ? 'red' : 'teal',
              }}
            ></div>
          );
        })}
      </div>

      <button
        className={css.Button}
        type="button"
        onClick={handleClickDecrement}
        // disabled={0 === index}
      >
        <FcLeft />
      </button>

      <button
        className={css.Button}
        type="button"
        onClick={handleClickIncremet}

        // disabled={images.length - 1 === index}
      >
        <FcRight />
      </button>
    </div>
  );
}
