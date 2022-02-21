import cat from '../src/cat-2083492_1280.webp';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={cat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;