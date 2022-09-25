import React from 'react';

export default function Meaning(props) {
  return (
    <div className='Meaning'>
      <div className='row synonyms'>
        <div className='col-sm-12 col-md-12 text-center mb-3'>
          {props.meaning.synonyms.map(function (synonym, index) {
            if (index < 5) {
              return (
                <span className='p-4' key={index}>
                  {synonym}
                </span>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <section>
        <h4 className='partOfSpeech'>{props.meaning.partOfSpeech}</h4>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div> ◦ {definition.definition}</div>
              <div>
                <em className='example'>{definition.example}</em>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
