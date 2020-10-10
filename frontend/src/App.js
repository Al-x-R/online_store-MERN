import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
        <Header />
        <Container>
            <main className='py-5'>
                <HomeScreen />
            </main>

        </Container>

        <Footer />
    </>
  );
}

export default App;
