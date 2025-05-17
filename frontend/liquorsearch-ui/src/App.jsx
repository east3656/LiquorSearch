import Header from './components/Header.jsx';
import LiquorList from './components/LiquorList.jsx';

export default function App() {
  return (
    <>
      <Header title="Tabagie Belvedere" buttonLabel="My Button" />
      <main className="main-content">
        <LiquorList />
      </main>
    </>
  );
}
