import requests
from parsel import Selector

# Realizando requisição e exibindo o conteúdo
# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)


# Realizando requisição e retornar o nome de usuário e url
# response = requests.get("https://api.github.com/users")
# users = response.json()
# for user in users:
#   print(f"{user['login']} {user['url']}")

# Realizando requisição e extraindo título, preço, descrição e url contendo a imagem de capa do livro
# url = "http://books.toscrape.com/catalogue/"

# response = requests.get(url + "the-grand-design_405/index.html")
# selector = Selector(response.text)

# title = selector.css("h1::text").get()

# price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

# description = selector.css("#product_description ~ p::text").get()
# suffix = "...more"
# if description.endswith(suffix):
#     description = description[:-len(suffix)]

# cover = url + selector.css("#product_gallery img::attr(src)").get()

# availability = selector.css(".product_main .availability::text").re_first(r"\d")

# print(title, price, description, cover, availability, sep=",")

# Realizando extração de todas as citações do site
has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(f"http://quotes.toscrape.com/api/quotes?page={page}")
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
