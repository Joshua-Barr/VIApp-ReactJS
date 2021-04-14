import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from 'react-dom';
import '../styles.css';

export default function Footer (){

  const divStyleWaveTop = {
    backgroundImage: 'url(' + 'http://front-end-noobs.com/jecko/img/wave-top.png' + ')',
  };
  const divStyleWaveMiddle = {
    backgroundImage: 'url(' + 'http://front-end-noobs.com/jecko/img/wave-mid.png' + ')',
  };
  const divStyleWaveBottom = {
    backgroundImage: 'url(' + 'http://front-end-noobs.com/jecko/img/wave-bot.png' + ')',
  };

  return (
    <header>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style={divStyleWaveTop}></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style={divStyleWaveMiddle}></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style={divStyleWaveBottom}></div>
      </div>
    </div>
    </header>

  );

}