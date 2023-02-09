import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Logo from "./components/Logo";
import Information from "./components/Information";
import Introduce from "./components/Introduce";
import Footer from "./components/Footer";
// import { Sidebar, Logo, Information, Introduce } from './components'

function App() {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <div>
          <div className="main-content">
            <Logo />
            <Introduce />
            <Information />
          </div>
          <Footer />
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      // grid-template-columns: auto 1fr;
      grid-template-columns: 150px 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
  .main-content {
    text-align: center;
    padding: 0 75px;
  }
`;

export default App;
