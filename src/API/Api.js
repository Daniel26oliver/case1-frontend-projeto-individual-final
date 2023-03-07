const Api = () => {
  const url = 'https://lista-livros.onrender.com';

  return {
    FILMES_GET() {
      return fetch(`${url}/livro`);
    },
    FILME_POST(titulo, genero, categoria) {
      return fetch(`${url}/livro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo,
          genero,
          categoria,
        }),
      }).then((res) => console.log(res.status));
    },
    FILME_PUT(titulo, genero, categoria, id) {
      return fetch(`${url}/livro`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo,
          genero,
          categoria,
          id,
        }),
      }).then((res) => console.log(res.status));
    },
    FILME_DELETE(id) {
      return fetch(`${url}/livro`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      }).then((res) => console.log(res.status));
    },
  };
};

export default Api;
