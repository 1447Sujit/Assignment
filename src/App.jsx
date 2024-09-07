import React from 'react';
import "./App.css"
import Top from './Component/Top';
import Bottom from './Component/Bottom';

function App() {
  return (
    // -----Main Container-----
    <div className="min-h-screen flex items-center justify-center p-6 background">
      {/* RIGHT CONTAINER */}
      <div className="w-[836px] h-[689px]"></div>

      {/* ----LEFT CONTAINER---- */}
      <div className="w-[836px] min-h-[689px] flex flex-col">

        <Top />

        <div className="w-[85%] mx-auto mt-7 h-1 rounded-xl bg-[#363c43]  shadow-lg shadow-custom"></div>

        <Bottom />

        <div className="w-[85%]  mx-auto mt-7 h-1 rounded-xl bg-[#363c43] shadow-lg shadow-custom"></div>
      </div>
    </div>
  );
}

export default App;
