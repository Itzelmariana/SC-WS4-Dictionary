import React from 'react';

export default function Synonyms(props) {
  if (props.meaning.synonyms) {
    return (
      <div className='Synonyms'>
        <div>{props.meaning.synonyms}</div>
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
