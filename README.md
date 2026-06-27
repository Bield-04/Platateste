Platateste

Versão: 1.0
Motor: HTML5 + CSS3 + JavaScript (Canvas)
Plataforma: Navegadores para celular e computador

1. Visão Geral

Platform Adventure é um jogo de plataforma 2D onde o jogador controla um aventureiro que deve atravessar plataformas, coletar moedas e evitar inimigos.

O jogo foi desenvolvido utilizando apenas tecnologias da web, sem bibliotecas externas.

2. Objetivos
Coletar todas as moedas.
Desviar dos inimigos.
Chegar ao final da fase.
Fazer a maior pontuação possível.
3. Mecânicas
Movimento
Andar para a esquerda
Andar para a direita
Pular
Física

O jogo possui:

Gravidade
Colisão com plataformas
Pulo
Queda
Câmera

A câmera acompanha o personagem conforme ele anda.

Moedas

As moedas:

aumentam a pontuação
desaparecem ao serem coletadas
reproduzem um efeito sonoro
Inimigos

Quando o jogador toca um inimigo:

volta para o início da fase
perde o progresso da posição
4. Interface

A tela possui:

+---------------------------+

Moedas: 5

          JOGO

        Personagem

___________________________

◀          ▲          ▶

+---------------------------+
5. Controles
Celular

◀ = esquerda

▶ = direita

▲ = pular

Computador (caso adicione)

A = esquerda

D = direita

Espaço = pular

6. Estrutura de Pastas
PlatformAdventure/

│

├── index.html

├── style.css

├── game.js

│

├── sprites/

│   ├── player.png
│   ├── enemy.png
│   ├── coin.png
│   ├── grass.png
│   ├── background.png
│   └── tiles.png

│

├── audio/

│   ├── music.mp3
│   ├── jump.wav
│   ├── coin.wav
│   ├── hurt.wav
│   └── victory.wav

│

└── README.md
7. Sistema de Arquivos
index.html

Responsável por:

criar o Canvas
carregar os arquivos
criar os botões do celular
carregar os sons
style.css

Responsável por:

layout
responsividade
botões
cores
game.js

Responsável por:

física
movimentação
colisões
câmera
inimigos
moedas
desenho da fase
8. Variáveis Principais
Player
posição

velocidade

gravidade

largura

altura

quantidade de moedas

estado (no chão ou no ar)
Enemy
posição

direção

velocidade

patrulha
Platform
posição

largura

altura
Coin
posição

coletada (true/false)
9. Sons
Som	Quando toca
music.mp3	Música da fase
jump.wav	Pulo
coin.wav	Coleta moeda
hurt.wav	Encosta no inimigo
victory.wav	Final da fase
10. Artes

O estilo gráfico será:

Pixel Art
32x32 pixels
cores vivas
animações suaves
11. Resolução

O jogo ocupa toda a tela do dispositivo.

Responsivo para:

celulares
tablets
computadores
12. Objetos do Jogo
Objeto	Função
Jogador	Personagem principal
Plataforma	Piso
Moeda	Pontuação
Inimigo	Obstáculo
Câmera	Segue o jogador
13. Fluxo do Jogo
Menu

↓

Selecionar Fase

↓

Carregamento

↓

Jogar

↓

Coletar moedas

↓

Desviar dos inimigos

↓

Chegar ao final

↓

Tela de Vitória

↓

Próxima fase
14. Melhorias Futuras
50 fases
Sistema de salvamento
Checkpoints
Vida do jogador
Barra de energia
Bosses
NPCs
Itens secretos
Power-ups
Parede escalável
Pulo duplo
Dash
Sistema de partículas
Nuvens animadas
Chuva
Ciclo dia/noite
Loja
Conquistas
Ranking online
Editor de fases
Configurações de áudio e controles
Suporte a gamepad
Localização em vários idiomas
15. Créditos

Desenvolvedor: Gabriel

Programação: HTML5, CSS3 e JavaScript

Arte: Pixel Art (sprites próprios ou licenciados)

Áudio: Músicas e efeitos sonoros livres para uso

Engine: Canvas API do HTML5

Objetivo do Projeto

Criar um jogo de plataforma 2D simples, divertido e expansível, servindo como base para futuras versões com mais fases, novos personagens, habilidades, inimigos e recursos avançados.
