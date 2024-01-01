import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen  flex justify-between items-center mx-10">
        <h1 className="text-8xl font-bold text-white">Welcome to Store</h1>
        <img src="/store.png" alt="store" className="w-[500px]" />
      </div>
    </>
  );
}

export default App;
