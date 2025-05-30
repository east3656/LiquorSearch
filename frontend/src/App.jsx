import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Bottles from './components/Bottles.jsx';
import Cans    from './components/Cans.jsx';
import Packs   from './components/Packs.jsx';
import LiquorList from './components/LiquorList.jsx';
import './App.css';

export default function App() {
  const sections = ["Bottles","Cans","Packs"];
  const [selected, setSelected] = useState(sections[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true); //sidebar is open and bottle section is selected by default on boot. 


  

  // pick which panel to render
  let Content;
  switch (selected) {
    case 'Bottles': Content = Bottles; break;
    case 'Cans':    Content = Cans;    break;
    case 'Packs':   Content = Packs;   break;
  }

  return (
    <>
      <Header
        title="Tabagie Belvedere"
        onToggleSidebar={() => setSidebarOpen(o => !o)}
      />

      

      <Sidebar
        open={sidebarOpen}
        sections={sections}
        selected={selected}
        onSelect={setSelected}
      />

      {/* push the content over when sidebar is open */}
      <div className={`main-area ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <h2>{selected}</h2>
        <Content />
      </div>

    </>
  );
}
