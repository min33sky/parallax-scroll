import './App.css';
import Image from './components/Image';

function App() {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Image key={i} id={i + 1} />
        ))}
      <div className="progress" />
    </>
  );
}

export default App;
