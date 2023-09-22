import Lottie from 'lottie-react';
import './App.css';
import Flower from './assets/flower.json';

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const name = queryParameters.get("name")
  return (
    <div className='w-screen h-screen'>
          <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">¡Feliz día, mi amor!</h1>
        <p className="text-lg mb-4">
          Espero que disfrutes estas flores amarillas como regalo especial para ti.
        </p>

        <Lottie animationData={Flower} />
        {name &&         <p className="text-sm mt-4">Con todo mi amor, {name}</p>}
      </div>
    </div>
    </div>
  );
}

export default App;
