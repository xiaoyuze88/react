import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const multiCounter = useMemo(() => counter * counter, [counter]);

  const [results, setResults] = useState<string>('');
  const [value, setValue] = useState('');

  // setCounter((counter) => counter + 1);

  const doFetch = async (value: string) => {
    console.log('call doFetch', value);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))

    setResults(`mocked results{${value}`);
  };

  useEffect(() => {
    setTimeout(() => {
      debugger
      setCounter(counter => counter + 1);
    }, 3000);
  }, [])

  return (
    <div>
      helloworld,
      <div>
        world. {'=>'}
        <a href="link">link</a>
      </div>
{/* <p>
        helloworld: <Counter counter={counter} />
      </p>
      <p>
        multi counter: {multiCounter}
      </p>
      <span>
        helloworld2
      </span>
      <button onClick={() => {
        debugger
        setCounter((counter) => counter + 1);
        setCounter((counter) => counter + 1);
        setCounter((counter) => counter + 1);
      }}>click me</button>
      <input value={value} onChange={(e) => {
        setValue(e.target.value);

        // startTransition(() => {
        //   doFetch(e.target.value);
        // });
      }}/>
      <div>
        result: {results}
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}
      </div>
      
  );
}

function Counter({ counter }: { counter: number }) {
  return <>{counter}</>;
}

export default App;
