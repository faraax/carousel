import Carousel from "./components/Carousel";

const imgSrc = [
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  'https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg',
]

function App() {
  return (
    <div className="h-screen bg-red-200 flex justify-center items-center flex-col">
      <div className="max-w-lg">
        <Carousel
          autoSlide={true}
          autoSlideIntervel={3}
          images={imgSrc}
        />
      </div>
    </div>
  );
}

export default App;
