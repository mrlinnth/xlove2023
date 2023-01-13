import Navmenu from './components/menus/Navmenu';
import DefaultBanner from './components/banners/DefaultBanner';
import FeaturedSection from './components/sections/FeaturedSection';

function App() {
  const firstLine = 'Understand User Flow. <strong className="font-extrabold text-red-700 sm:block">Increase Conversion.</strong>';
  return (
    <div className="App">
      <Navmenu />
      <DefaultBanner firstLine={firstLine} secondLine="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!" />
      <FeaturedSection />
    </div>
  );
}

export default App;
