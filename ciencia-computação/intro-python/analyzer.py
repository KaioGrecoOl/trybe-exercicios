def analyze(text: str) -> str:
    count_words = len(text.split(" "))

    char_counter = dict()
    for char in text:
      if char in char_counter:
          char_counter[char] += 1
      else:
        char_counter[char] = 1

    return f"Número de palavras = {count_words}"


text_to_analyze = (
    "Seremos a primeira escolha para quem quer alcançar profissões "
    "digitais na América Latina. No Brasil e no mundo, milhares de vagas "
    "criadas anualmente no mercado de tecnologia deixam de ser "
    "preenchidas por falta de pessoas qualificadas. Nós trabalhamos duro "
    "todos os dias para que as pessoas tenham a oportunidade de trilhar "
    "essas carreiras."
)


print(analyze(text_to_analyze))
