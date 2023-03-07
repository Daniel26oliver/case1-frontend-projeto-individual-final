const Api = () => {
 
    LIVRO_GET() {
      return fetch(`${url}/livro`);
    },
    LIVRO_POST(titulo, genero, categoria) {
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
    LIVRO_PUT(titulo, genero, categoria, id) {
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
    LIVRO_DELETE(id) {
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

export default Api;
