import React from 'react'

const Bands = props => {
  const renderBands = props.bands.map((band, id) => {
    return <li key={id}>{band.name}</li>
  })
  return (
    <div>{renderBands}</div>
  );
};

export default Bands; 