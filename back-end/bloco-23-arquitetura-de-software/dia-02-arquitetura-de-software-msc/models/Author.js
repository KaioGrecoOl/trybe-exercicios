const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
  };
  
  // Converte o nome dos campos de snake_case para camelCase
  const seriaLize = (authorData) => {
    return {
      id: authorData.id,
      firsName: authorData.first_name,
      middleName: authorData.middle_name,
      lastName: authorData.last_name
    }
  }
  
  // Busca todos os autores do banco.
  const getAll = async () => {
    const [authors] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    console.log(authors);
    return authors.map(seriaLize).map(getNewAuthor);
  };
  
  /*
  Busca uma pessoa autora específica, a partir do seu ID
  @param {String} id ID da pessoa autora a ser recuperado
  */
  const findById = async (id) => {
    const [authorData] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?;',
      [id]
    );
  
    if (authorData.length === 0) return null;
  
    const { firsName, middleName, lastName } = authorData.map(seriaLize)[0];
  
    return getNewAuthor({
      id,
      firsName,
      middleName,
      lastName
    });
  };
  
  
  const createAuthor = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
  );
  
  
  
  module.exports = {
    getAll,
    findById,
    createAuthor,
  };
