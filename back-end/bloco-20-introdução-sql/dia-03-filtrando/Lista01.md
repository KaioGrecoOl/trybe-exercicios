# Exercícios para fizar os principais operadores booleanos e relacionais. Para realizar os exercícios utilizei o banco de dados sakila.

# 1 Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. 

SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

# 2 Gere um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado.

SELECT first_name FROM sakila.customer WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'ORDER BY first_name ASC;

# 3 Gere um relatório com título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título

SELECT title, description, release_year, replacement_cost FROM film WHERE rating <> 'NC-17' AND replacement_cost >= 18.00 ORDER BY replacement_cost DESC, title LIMIT 100;

# 4 Gere um relatório com informação de quantos clientes estão ativos na loja 1

SELECT COUNT(*) AS quantidade_de_cliente_ativos FROM customer WHERE active = 1 AND store_id = 1;

# 5 Gere um relatório com os detalhes dos clientes que não estão ativos na loja 1

SELECT * FROM customer WHERE active = 0 AND store_id = 1;

# 6 Gere um relatório com os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título

SELECT title FROM film WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50;