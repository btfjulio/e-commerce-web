import React from 'react';
import MainComponent from '../components/shared/MainComponent'
import { useRouter } from 'next/router';

const router = useRouter();

const Home: React.FC = () => {
  return (
    <MainComponent>
      <button onClick={() => router.push('/Auth/Login') }></button>
    </MainComponent>
  )
}

export default Home;