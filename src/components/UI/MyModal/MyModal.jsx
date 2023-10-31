import React from "react";
import classes from './MyModal.module.css';

function MyModal({ children, visible, setVisible }) {

  const rootClasses = [classes.MyModal]

  if(visible === true){
    rootClasses.push(classes.active)

  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.MyModalContent} onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export default MyModal;
