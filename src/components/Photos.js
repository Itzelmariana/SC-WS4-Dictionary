import React from 'react';

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className='Phothos'>
        <section className='mt-3  mb-3'>
          <div className='row pt-3 pb-3'>
            {props.photos.map(function (photo, index) {
              if (index < 6) {
                return (
                  <div className='col-sm-6 col-md-4  mb-3' key={index}>
                    <a
                      href={photo.src.original}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        src={photo.src.landscape}
                        key={index}
                        alt='multiple imagenes'
                        className='img-fluid'
                      />
                    </a>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
