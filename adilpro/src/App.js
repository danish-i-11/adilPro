import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";
import { Content } from "./components/content";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <Content />
      </div>
      <Footer />    
    </div>
  );
}
export default App;
