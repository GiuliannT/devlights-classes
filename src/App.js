import { useState } from 'react';
import { GreetingClass } from './components/GreetingClass/GreetingClass';
import { GreetingFunction } from './components/GreetingFunction/GreetingFunction';

export const App = () => {

  const [name, setName] = useState('test Function')
  const changeName = () => {
    name === 'test Function' && setName('Giulian');
    name === 'Giulian' && setName('test Function')
  }

  return (
    <div className="App">
      <GreetingClass name='test Class' />
      <GreetingFunction name={name} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
