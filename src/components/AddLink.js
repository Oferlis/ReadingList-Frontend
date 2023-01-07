import React, { useRef } from 'react';

import classes from './AddLink.module.css';

function AddLink(props) {
  const linkRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const link = {
      link: linkRef.current.value,
    };

    props.onAddLink(link);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={linkRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddLink;