import logo from './logo.svg';
import './App.css';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
        <Header />
        <Content />
        <Footer />
    </GlobalStyles>
  );
}

export default App;
