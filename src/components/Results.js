import React from 'react';
import Meaning from './Meaning';
import play from './play.png';

export default function Results(props) {
  if (props.results) {
    return (
      <div className='Results'>
        <h2 className='text-center'>
          <span>{props.results.word} </span>
          <span>
            {props.results.phonetics.map(function (phonetics, index) {
              const audio = phonetics.audio;
              if (audio !== '') {
                const audios = new Audio(audio);
                function start() {
                  audios.play();
                }
                return (
                  <span key={index} onClick={start}>
                    <img src={play} alt='icon play' width={'40px'} />
                  </span>
                );
              } else {
                return null;
              }
            })}
          </span>
          <span>{props.results.phonetic}</span>
        </h2>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
