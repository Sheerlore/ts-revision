import React, { useState } from 'react';
import faker from 'faker';
import './App.css';
import GitHubUser from './GitHubUser';
import SearchForm from './SearchForm';
import { FixedSizeList } from 'react-window';

interface FakerUser {
  name: string,
  email: string,
  avatar: string
};

const bigList: FakerUser[] = [...Array(5000)].map(() => ({
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
  const [login, setLogin] = useState("Sheerlore");
  const renderItem = (item: FakerUser) => (
    <div style={{display: "flex"}}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  const renderRow = ({ index, style }: {index: number, style?: Object}) => (
    <div style={{...style, ...{display: "flex"}}}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <div className="App">
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      {/* <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList> */}

    </div>
  );
}

export default App;
