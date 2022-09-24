import React from 'react';

export default function Meaning(props) {
  return (
    <div className='Meaning container-fluid'>
      <div className='row'>
        <div className='col-sm-12 col-md-2'>
          <h3>{props.meaning.partOfSpeech}</h3>
        </div>
        <div className='col-sm-12 col-md-10'>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div>- {definition.definition}</div>

                <div>
                  <em>{definition.example}</em>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
