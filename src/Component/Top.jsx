import React, { useState } from 'react';
import "../App.css";
import question from "../assets/question.svg";
import dash from "../assets/dash.svg";
import About from './About';
import Experience from './Experience';
import Recommended from './Recommended';

const Top = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="h-[276px] w-[720px] bg-[#363c43] ps-8 pe-3 py-4 relative rounded-xl shadow-custom">

      <img src={question} alt="question-icon" className="absolute top-4 left-3" />
      <img src={dash} alt="dash-icon" className="absolute left-3 top-1/2" />

      <div className="mx-2">
        <div className=" bg-[#171717] mx-4 p-1 rounded-2xl w-[614px] h-[62px] grid grid-cols-3 gap-9  ">

          {/* --ABOUT BUTTON-- */}
          <button
            onClick={() => setActiveSection('about')}
            className={`text-[#a3adb2] mt-[1px] mx-[7px] h-[50px] w-[170px] rounded-2xl font-bold transition-all duration-500 ease-out ${activeSection === 'about' ? 'bg-[#1f2025] focus:scale-[1.1] btnShadow ' : ''}`}
          >
            About
          </button>

          {/* --EXPERIENCE BUTTON-- */}
          <button
            onClick={() => setActiveSection('experience')}
            className={`text-[#a3adb2] mt-[1px] h-[50px] w-[170px] rounded-2xl font-bold transition-all duration-500 ease-out ${activeSection === 'experience' ? 'bg-[#1f2025] focus:scale-[1.1] btnShadow' : ''}`}
          >
            Experience
          </button>

          {/* --RECOMMENDED BUTTON-- */}
          <button
            onClick={() => setActiveSection('recommended')}
            className={`text-[#a3adb2] mt-[1px] h-[50px] w-[170px]  rounded-2xl font-bold transition-all duration-500 ease-out ${activeSection === 'recommended' ? 'bg-[#1f2025] focus:scale-[1.1] btnShadow' : ''}`}
          >
            Recommended
          </button>



        </div>

        <div className="w-[650px] h-[135px] text-[#969696] mx-5 mt-6  overflow-auto pe-4">
          {activeSection === 'about' && <About />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'recommended' && <Recommended />}
        </div>
      </div>
    </div>
  );
};

export default Top;
