import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'
import ThemeSection from './Theme/theme.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: '#FFFFFF' }}>
      <ThemeSection />
      <Comitte />
    </div>
  );
}

export default App;
