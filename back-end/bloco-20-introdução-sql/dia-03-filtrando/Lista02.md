# Exercícios para fizar o comando LIKE. Para realizar os exercícios utilizei o banco de dados sakila.

# 1 Gere um relatório que mostre todos os detalhes dos filmes que contêm a palavra ace no nome.

SELECT * FROM sakila.film WHERE title LIKE '%ace%';

# 2 Gere um relatório que mostre todos os detalhes dos filmes cujas descrições finalizam com china

SELECT * from sakila.film WHERE description LIKE '%china';

# 3 Gere um relatório que mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord

SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';

# 4 Gere um relatório que mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon

SELECT * FROM sakila.film WHERE title LIKE '---gon%';

# 5 Gere um relatório que mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.

SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

# 6 Gere um relatório que mostre  os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito

SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

# 7 Gere um relatório que mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.

SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%'; 