import React from 'react';
import '../AppStyles/AppStyles.css';
import BgImage from '../Assets/1.jpg';

export default function About() {
  // return <div>This is about component</div>;
  return (
    <div style={{ minHeight: '87.8vh' }}>
      <img
        src={BgImage}
        style={{
          height: '645.5px',
          width: '100%',
        }}
      />
    </div>
  );
}
