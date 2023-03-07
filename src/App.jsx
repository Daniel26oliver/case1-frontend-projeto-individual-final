import React from 'react';
import Api from './API/Api.js';
import NovoLivro from './Components/NovoLivro.jsx';
import Tabela from './Components/Tabela.jsx';
import Loading from './Components/Loading.jsx';
import { Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [livros, setLivros] = React.useState(null);
  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const getLivros = async () => {
    setLoading(true);
    try {
      await Api()
        .LIVROS_GET()
        .then((res) => res.json())
        .then((data) => setLivros(data));
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    getLivros();
  }, [reload]);

  return (
    <>
      <Container>
        <h1 align="center">Lista de Livros</h1>
        <NovoLivro reload={reload} setReload={setReload} />
        <Tabela itens={filmes} reload={reload} setReload={setReload} />
        {loading && <Loading />}
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
