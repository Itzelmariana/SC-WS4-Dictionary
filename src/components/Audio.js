import React from 'react';
import play from './play.png';

export default function Audio(props) {
  if (props.phonetics) {
    const audio = new Audio(props.phonetics[0].audio);
    function start() {
      audio.play();
    }
    return (
      <button onClick={start}>
        <img src={play} alt='icon play' width={'40px'} />
      </button>
    );
  } else {
    return null;
  }
}
