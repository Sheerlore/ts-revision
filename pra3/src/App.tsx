import React from 'react';
import './App.css';

type Peak = {
  name: string,
  elevation: number
};

const tahoe_peaks: Peak[] = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067},
  { name: "Pyramid Peak", elevation: 9983},
  { name: "Mt. Tallac", elevation: 9735},
];

function List({data = [],renderItem, renderEmpty}: 
    {data?: Object[],renderItem(params: Object): JSX.Element, renderEmpty: JSX.Element}): JSX.Element
{
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <List
       data={tahoe_peaks}
       renderItem={(item: Peak) => (
         <>
          {item.name} - {item.elevation.toLocaleString()} ft
         </>
       )}
       renderEmpty={<p>This lsit is empty</p>}
      />
    </div>
  );
}

export default App;