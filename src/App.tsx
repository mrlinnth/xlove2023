import NavMenu from './components/menus/NavMenu';
import DefaultBanner from './components/banners/DefaultBanner';
import FeaturedSection from './components/sections/FeaturedSection';
import StatsSection from './components/sections/StatsSection';
import TextImageBanner from './components/banners/TextImageBanner';
import FooterMenu from './components/menus/FooterMenu';

function App() {
  const firstLine =
    'Understand User Flow. <strong className="font-extrabold text-red-700 sm:block">Increase Conversion.</strong>';
  const secondLine =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!';
  return (
    <div className="App">
      <NavMenu />
      <DefaultBanner firstLine={firstLine} secondLine={secondLine} />
      <FeaturedSection />
      <StatsSection />
      <TextImageBanner />
      <FooterMenu />
    </div>
  );
}

export default App;
