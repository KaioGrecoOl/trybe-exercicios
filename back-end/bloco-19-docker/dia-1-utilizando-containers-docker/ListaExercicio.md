 # Realize a busca da imagem do Linux Debian e baixe para o seu computador

 docker pull debian:stable-slim

 # Crie e execute um contêiner no modo interativo

 docker container run -it debian:stable-slim
 
 # Retorne os dados da distribuição dentro do contêiner

 cat /etc/*-release
 PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
 NAME="Debian GNU/Linux"
 VERSION_ID="11"
 VERSION="11 (bullseye)"
 VERSION_CODENAME=bullseye
 ID=debian
 HOME_URL="https://www.debian.org/"
 SUPPORT_URL="https://www.debian.org/support"
 BUG_REPORT_URL="https://bugs.debian.org/"

 # Encerre o Terminal
 exit

 # Verificar o último container criando

 docker container ls -l

 CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS                          PORTS     NAMES
 4f8bef3358fb   debian:stable-slim   "bash"    2 minutes ago   Exited (0) About a minute ago             cool_ramanujan

 # Inicie o contêiner sem cria outro e verifique se ele esta ativos

 docker start 4f
 docker container ls -a

 CONTAINER ID   IMAGE                COMMAND                  CREATED             STATUS                    PORTS                NAMES
 4f8bef3358fb   debian:stable-slim   "bash"                   12 minutes ago   Up 12 seconds     

 #  Retome o contêiner criando

 docker attach 4f

 # Verifique a versão atual do contêiners

 cat /etc/debian_version
 11.3

 # Encerre o terminal

 exit

 # Remova o contêiner criado

 docker container rm 4f

 # Crie e rode de modo interativo em movo 'Cleanup' a imagem andrius/ascii-patrol

 docker run -it --rm andrius/ascii-patrol

 # Encerre o contêiner 

ctrl + c
