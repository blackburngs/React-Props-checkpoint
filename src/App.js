import React from 'react';
import './App.css';
import Profil from './Profil/Profil';


const fullName = 'Blackburn';
const bio = 'Call of Duty';
const profession = 'soldiers';

const img = './cod.jpg'

const handleName = (e) => {
  return alert(e)
};

function App() {
  return (
    <>
      <Profil fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        {img}
      </Profil>
    </>
  );
}

export default App;