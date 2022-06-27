const connection = require('./connection');

const getNewAuthor = ({ id, firsName, middleName, lastName }) => {
  const fullName = [firsName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firsName,
    middleName, 
    lastName,
    fullName
  }
}

// Converte o nome dos campos de snake_case para camelCase
const seriaLize = (authorData) => {
  return {
    id: authorData.id,
    firsName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

// Busca todas as pessoas autoras do banco.

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
  console.log(authors);
	return authors.map(seriaLize).map(getNewAuthor);
};

module.exports = {
	getAll,
};