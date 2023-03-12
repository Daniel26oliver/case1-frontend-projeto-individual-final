import React from 'react';
import Api from '../API/Api';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import styles from './NovoLivro.module.css';

const NovoFilme = ({ reload, setReload }) => {
  const [titulo, setTitulo] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [Categoria, setCategoria] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (titulo && genero && categoria) {
      try {
        await Api().LIVRO_POST(titulo, genero, categoria);
        setReload(!reload);
        toast.success('Livro cadastrado com sucesso!');
      } catch (err) {
        console.log(err.message);
        toast.error('Um erro ocorreu, tente novamente');
        throw new Error(err);
      } finally {
        setTitulo('');
        setGenero('');
        setCategoria('');
      }
    } else {
      toast.warn('Complete todos os dados para cadastrar um livro');
    }
  };

  return (
    <Form className={styles.formFilme} onSubmit={handleSubmit}>
      <Form.Group controlId="titulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="duracao">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          type="text"
          value={duracao}
          onChange={({ target }) => setDuracao(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="genero">
        <Form.Label>Gênero</Form.Label>
        <Form.Control
          type="text"
          value={genero}
          onChange={({ target }) => setGenero(target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="dark">
        Adicionar
      </Button>
    </Form>
  );
};

export default NovoLivro;
