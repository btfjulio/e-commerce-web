import React from 'react';
import WithAuthAdmin from '../../components/WithAuthAdmin';
import AdminComponent from '../../components/shared/AdminComponent'

const Home: React.FC = () => {
  return (
    <AdminComponent>
      <h1>Parabéns, você acessou o painel! \o/</h1>
    </AdminComponent>
  )

}

export default WithAuthAdmin(Home);