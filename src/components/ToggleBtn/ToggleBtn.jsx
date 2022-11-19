import { useState } from 'react';
import css from './ToggleBtn.module.css';

export default function ToggleBtn() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // if (isShown === false) {
    //     setIsShown(true)
    //     return;
    // }
    // setIsShown(false);
    if (isShown === false) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
    // setIsShown(!isShown);
  };
  return (
    <div className={css.DivWrapper}>
      <button className={css.Btn} type="button" onClick={handleClick}>
        {isShown ? 'hide' : 'show'}{' '}
      </button>
      {isShown && (
        <p className={css.Description__text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          eaque qui at tempora itaque! Fuga temporibus beatae quas, suscipit est
          facilis iure adipisci corrupti excepturi, laborum, aliquid totam
          exercitationem similique.
        </p>
      )}
    </div>
  );
}
