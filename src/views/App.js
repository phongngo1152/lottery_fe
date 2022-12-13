import logo from './logo.svg';
import './App.scss'
import Header from '../views/Example/Header';
import Banner from './Example/baner';
import Footer from './Example/footer'
import Main from './Example/main'

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
