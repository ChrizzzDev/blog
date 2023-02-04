import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting] = useState(randomMessage());

  return (
    <div> 
      <h3>{greeting}! Gracias por visitar!</h3>
    </div>
  );
}