// App.js
import React, { useEffect } from 'react';
import './RotateBtn.css';

const RotateBtn = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map((char, i) => `<span style="transform:rotate(${i * 20}deg)">${char}</span>`)
      .join("");
  }, []);

  return (
    <div className='circle'>
      <div className='logo-btn'></div>
      <div className='text'>
        <p>Watch, video - now</p>
      </div>
    </div>
  );
};

export default RotateBtn;
