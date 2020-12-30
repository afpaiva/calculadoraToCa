import React from 'react';
import Image from '../Assets/play-store.png';

export default function Info(){
  return(
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        position: 'relative',
        marginTop: '50px',
        width: '200px',
        height: '80px',
        backgroundImage: `url(${Image})`,
        backgroundSize: '200px',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
    </div>
  )
}