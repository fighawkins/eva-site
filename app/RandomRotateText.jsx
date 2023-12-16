import React from 'react';

const RandomRotateText = ({ text }) => {
  const letters = text.split('').map((char, index) => {
    if (char === ' ') {
      // Inserting a non-breaking space for the whitespace
      return <span key={index} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />;
    } else {
      const randomRotation = Math.random() * 10 - 5; // Random rotation between -5deg and 5deg
      return (
        <span key={index} style={{ display: 'inline-block', transform: `rotate(${randomRotation}deg)` }}>
          {char}
        </span>
      );
    }
  });

  return (
    <div className="diagonal-slant" style={{ display: 'inline-block' }}>
      {letters}
    </div>
  );
};

export default RandomRotateText;