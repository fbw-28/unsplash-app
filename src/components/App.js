import '../scss/App.scss';
import Nav from './Nav';
import Gallery from './Gallery';
import { useState } from 'react';

const App = () => {
  const [image, setImage] = useState();

  const getTheImage = async () => {
    let url = `https://api.unsplash.com/photos/random/?client_id=RtkytSQr9sF6UkcWvzYMW2bkHHSfLDyrQYep3tNkGBs`;
    console.log('I am getting an image');
    let res = await (await fetch(url)).json();
    setImage(res.urls.regular);
  };

  return (
    <div className="App">
      <Nav handleClick={getTheImage}></Nav>
      <Gallery image={image}></Gallery>
    </div>
  );
};

export default App;
