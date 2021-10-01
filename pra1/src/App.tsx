import React, { useState, memo, useCallback } from 'react';
import './App.css';


const Cat = ({name, meow}: {name?: string; meow(param: string | undefined): void}) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};


const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);
// const RenderCat = memo(Cat, () => true)
// const AlwaysRenderCat = memo(Cat, () => false);

function App() {
  const [cats, setCats] = useState<(string | null)[]>(["Biscuit", "Jungle", "Outlaw"]);
  const meow = useCallback(name => console.log(`${name} has meowed`), []);
  return (
    <div className="App">
      {cats.map((name: string, i: number) => (
        <PureCat key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add Cat
      </button>
      
    </div>
  )
}

export default App;
