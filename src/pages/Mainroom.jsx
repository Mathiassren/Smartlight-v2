import GlobalButton from "../components/globalButton";
//Rooms
import Rooms from "../components/Rooms";
//Nav
import Nav from "../components/Nav";

const Mainroom = () => {
  return (
    <>
      <main className="h-screen">
        <header>
          <GlobalButton />
        </header>
        <p className="text-white pl-4 pt-4">rum</p>
        <div className="my-2 h-[70%] flex-auto overflow-y-auto">
          <Rooms />
        </div>
        <div className="bottom-0">
          <Nav />
        </div>
      </main>
    </>
  );
};

export default Mainroom;
