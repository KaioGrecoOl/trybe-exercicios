import requests
from parsel import Selector


def fetch_content(url: str, wait: int = 1) -> str:
    try:
        response = requests.get(url, timeout=wait)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""
    else:
        return response.text

def extract_quotes(content: str) -> list:
    selector = Selector(content)
    quotes = []
    for quote in selector.css('div.quote'):
        text = quote.css('span.text::text').get()
        author = quote.css('small.author::text').get()
        tags = quote.css('a.tag::text').getall()
        quotes.append(
        {
          'text': text,
          'author': author,
          'tags': tags,
        })

    return quotes

def get_all_quotes() -> list:
  ...

if __name__ == "__main__":
    page_content = fetch_content("https://quotes.toscrape.com/")
    quotes = extract_quotes(page_content)
    # print(quotes)
    # print(page_content)
