import React from 'react';
import './App.css';
import faker from 'faker';

interface FakerUser {
  name: string,
  email: string,
  avatar: string
};

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

interface ListComponentType {
  data: Array<any>,
  renderItem: (params: any) => JSX.Element
  renderEmpty: JSX.Element
};

function List({data = [], renderItem, renderEmpty}: ListComponentType) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

function App() {
  const renderItem = (item: FakerUser) => (
    <div style={{display: "flex"}}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return (
    <div className="App">
      <List data={bigList} renderItem={renderItem} renderEmpty={<></>} />
    </div>
  );
}

export default App;
