import React from 'react';
import Image from '../Assets/play-store.png';

export default function Info(){

  return(
    <div
      style={{
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <button 
        onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.andre.paiva","__blank")}
        style={{
        position: 'relative',
        width: '200px',
        height: '80px',
        backgroundImage: `url(${Image})`,
        backgroundColor: 'transparent',
        backgroundSize: '200px',
        backgroundRepeat: 'no-repeat',
        borderWidth: '0px',
        borderRadius: '0px',
        cursor: 'pointer',
        zIndex: 20
      }}>
      </button>
    </div>
  )
}