# Primeiros passos no Docker

# 1 - Caso Exista alguma versão do Docker instalada ou precise realizar a desinstalação

sudo apt-get remove docker* containerd runc

# 2 - Para realizar a instalação do Docker pelo terminal Mac

sudo hdiutil attach Docker.dmg
sudo /Volumes/Docker/Docker .app/Contents/MacOS/install
sudo hdiutil detach /Volumes/Docker

# 3 - Para verificar a versão instalada

docker --version

# 4 - Para verificar se a instalação foi feita corretamente

docker container run <nome-da-imagem>:<tag> 

docker run hello-world

# 5 - Comando para verificar os contêiners ativos

docker container linhas

# 6 - Comando para verificar os contêiners ativos e inativos

docker container ls -a

# 7 - Comando para verificar o útimo contêiner criando

docker container ls -l

# 8 - Formato da porta de acesso da aplicação Docker

<porta-do-host>:<porta-do-cliente>

# 9 - Comando adicional antes de terminar o contêiners. O Comando vai imprimir o texto na tela antes de encerrar o contêiner

docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>
docker container run ubuntu echo 'Hello Trybe'

# 10 - Comando para rodar o contêiner de forma interativa (da acesso ao Terminal)

docker container run -ti ubuntu 
/# cat /etc/lsb-release (retorna dados da distribuição)

# 11 - Principais comandos Docker
https://docs.docker.com/engine/reference/commandline/docker/

docker container run --help - lista os principais comandos

docker container run <parâmetros> <imagem>:<tag>  - cria um novo contêiner

docker container run --name <nome-da-sua-escolha> <imagem>:<tag>  - muda o nome do seu contêiner

docker container run --rm <imagem>:<tag> - modo cleanup, garante que ao final da execução ele seja removido

docker container run -d <imagem>:<tag> - o contêiner será executado em segundo plano
docker container run -dit ubuntu - também mantera o contêiner ativo em segundo plano

docker ps -a - serve para verificar se o comando esta executando em segundo plano

docker container create <parâmetros> <imagem>:<tag> - cria o contêiner mas não executa de imediato

docker container create -it <imagem>:<tag> - garante que ao iniciar o contêiner ele se mantenha ativo e disponha terminal 

# 12 - Comandos para iniciar, reiniciar, pausar e parar um contêiner

docker container start <CONTAINER ID || NAMES>

docker container restart <CONTAINER ID || NAMES>

docker container pause <CONTAINER ID || NAMES>

docker container unpause <CONTAINER ID || NAMES>

docker container stop <CONTAINER ID || NAMES>

# 13 - comando para acessar contêiner rodando em segundo plano

docker container attach <CONTAINER ID || NAMES>
docker attach <CONTAINER ID || NAMES>

# 14 - Comando para excluir contêiner não ativos

docker container rm <CONTAINER ID || NAMES>

# 15 - Comando para excluir contêiner ativos

docker container rm -f <CONTAINER ID || NAMES>

# 16 - Comando para limpar contêiners que não estão sendo utilizados

docker container prune

# 17 - Comando para obter informações sobre os processos que estão sendo rodados

docker container top <CONTAINER ID || NAMES>
