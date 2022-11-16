import requests

# Realizando requisição e exibindo o conteúdo
# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)


# Realizando requisição e retornar o nome de usuário e url

response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
  print(f"{user['login']} {user['url']}")
