import CanvasWithLines from '../components/canvas';

const App = () => {
  const imageUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.3dwallpaperarts.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fsatanic-wallpaper-0021.jpg&f=1&nofb=1&ipt=fd669678930fc4655e6a2ea8e0bd43014d6db947225d38f14f5c07876d7867b4&ipo=images';
  return (
    <div>
      <CanvasWithLines imageUrl={imageUrl}/>
    </div>
  );
};

export default App;
