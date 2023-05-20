import React from 'react';

const Tablerow = ({ coin }) => {
  return (
    <tr className='bord'>
      <td><img src={coin.image}  alt={coin.name} style={{width:100}} /></td>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>${coin.current_price}</td>
      <td>{coin.total_volume}</td>
      <td>Mkt Cap : ${coin.market_cap}</td>
    </tr>
  );
};

export default Tablerow;
