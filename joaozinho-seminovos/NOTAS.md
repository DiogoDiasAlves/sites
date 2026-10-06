# Joãozinho Seminovos: notas do site demonstrativo

Loja: Joãozinho Seminovos (no site e no rodapé aparece como "Joãozinho Automóveis"; no Google Maps a ficha
é "Joãozinho Seminovos")
Endereço: Av. Imigrantes Poloneses, 250, São Luís, Criciúma/SC, 88803-480
Site atual: https://joaozinhoautomoveis.com.br/ (WordPress da Altimus / Autos 360, com pixel da Meta)
Dados coletados em 06/10/2026.

## Gancho para abordagem

Só o que o dono VÊ na tela. Tudo foi conferido no navegador (390 px e 1440 px). Os prints estão em
`preview/site-atual-mobile.jpg` e `preview/site-atual.jpg`.

Problemas visíveis do site atual:

1. **No celular, a página Estoque não mostra o filtro.** No computador tem filtro de marca, modelo, ano e
   preço na lateral. No celular ele some e sobra só "Ordenar por preço". O cliente tem que rolar os 14
   carros um por um, numa página de cerca de 9.600 px de altura. É justamente quem chega pelo anúncio
   do Instagram/Facebook (eles pagam tráfego), e quase todo mundo chega pelo celular.
2. **No celular, o banner do topo fica ilegível.** O banner de 2000x500 encolhe para uma faixa de
   uns 95 px de altura. "Seminovos Selecionados / Revisados / Procedência / Garantia" vira letra
   minúscula, e a palavra "Selecionados" (manuscrita, em vermelho) nem dá para ler.
3. **A frase da home termina pela metade.** "Carros novos e usados, confira os veículos mais recentes
   cadastrados em nosso" e para aí. A palavra "estoque." é um link **branco sobre fundo branco** e não
   aparece (cor medida: rgb(255,255,255), com fundo branco).
4. **A home mostra só 6 carros**, e nenhum lugar do site mostra a **nota 4,8 com 63 avaliações** do Google.
5. **A página Contato tem uma imagem quebrada.** Aparece o ícone de imagem quebrada com o texto
   "contato vendedor" (o arquivo `banner_400x400_whatsapp-300x300-1.jpg` dá 404). Também não tem
   endereço, mapa nem formulário, só um botão de WhatsApp.
6. **O WhatsApp chega sem o nome do carro.** O botão de cada carro abre o WhatsApp com "Olá, estou no
   site Joãozinho Automóveis e preciso de ajuda!" seguido de um link comprido. O vendedor tem que abrir o
   link para saber de qual carro se trata.
7. **Erro de digitação no rodapé de todas as páginas:** "Av. Imigrantes **Ploneses**".
8. No celular, o aviso de cookies fica por cima do primeiro carro até a pessoa tocar em "Fechar"
   (detalhe menor).
9. **Estoque diferente do portal.** No Kleber Carros a loja anuncia **16** carros. O site mostra 14:
   o **VW Golf Sportline 2012/2013** (R$ 61.000) e o **Nissan Kicks Advance 2021/2022** (R$ 93.000) não
   aparecem no site. (Confirmar se ainda estão à venda antes de usar isso na conversa.)

O que **não** é problema (conferi e descartei): o mapa da home carrega normalmente; os cards do estoque
já mostram km, câmbio, ano e combustível; os telefones dos botões estão certos.

### Antes x depois

| Site atual | Site novo |
|---|---|
| Celular: estoque sem filtro, só "Ordenar" | Busca + marca + faixa de preço + câmbio + ordenação, também no celular |
| Banner do topo ilegível no celular | Topo feito para o celular: frase, botões, nota do Google e carro em destaque |
| Home com 6 carros e frase cortada | Estoque completo (15 carros) na própria página, com "ver todos" |
| Sem nota do Google | Selo 4,8 (63 avaliações) no topo + seção de avaliações |
| WhatsApp genérico + link | "Tenho interesse" manda o nome do carro, ano, km e preço na mensagem |
| Contato com imagem quebrada e sem mapa | Endereço, horário, telefones, mapa e botão "Como chegar" |
| Sem simulação | Simulador de parcela que envia a simulação no WhatsApp |
| Foto do carro abre outra página | Galeria com 5 fotos, itens e observações do carro em uma janela, com link direto (`#carro-creta-2023`) |
| "Ploneses" no rodapé | Endereço certo |

### Mensagem sugerida (WhatsApp)

> Aqui é o Diogo, fundador do Studio Avance. A gente é especialista em posicionamento digital para vendas.
>
> Abri o site da Joãozinho no celular, que é por onde chega quem clica nos anúncios de vocês no Instagram. Na página de estoque o filtro de marca e preço não aparece no celular, e o cliente tem que rolar os 14 carros um por um. Muita gente desiste antes de chegar no carro que queria.
>
> Montei uma versão nova do site com o estoque de vocês: filtro que funciona no celular, todos os carros com foto, km e preço, e o botão "Tenho interesse" já manda o nome do carro no WhatsApp da loja:
> https://joaozinho-seminovos.pages.dev/
>
> Abre no celular e compara com o atual. Me diz o que achou?

## De onde veio cada coisa

### Real (tirado da própria loja)
- **Logo**: recortado do banner de boas-vindas do site atual (`wp-content/uploads/2024/11/b8462b8405063e9c141b.jpg`),
  onde o logo branco (o "J" na elipse + "Joãozinho seminovos") aparece em alta resolução. Separei o
  logo do fundo e gerei versões em vermelho (topo) e branco (rodapé), na horizontal (o "J" ao lado do nome).
  Não redesenhei nada. Favicon: o "J" branco sobre o vermelho da marca.
- **Cores**: vermelho `#CC0000` (cabeçalho do site atual `#dd0202`, fachada e camisetas da equipe) + branco
  e grafite.
- **Estoque (15 carros)**: os 14 anúncios do site atual (`/estoque/` e cada `/veiculos/...`), com preço, ano
  modelo, km, câmbio, combustível, cor, itens e a observação que a loja escreveu. Mais o **VW Golf
  Sportline 2012/2013** (142.600 km, R$ 61.000), que está no Kleber Carros e não está no site.
  - Ficou de fora o **Nissan Kicks Advance 1.6 Aut. 2021/2022** (73.000 km, R$ 93.000, branco), que está no
    Kleber Carros mas **sem nenhuma foto**. Se ainda estiver à venda, mandar fotos e eu incluo.
  - Os nomes foram padronizados (marca, modelo, versão) e as observações, que estão em CAIXA ALTA no site,
    foram reescritas em frase normal, sem acrescentar nada. Tirei o "IPVA 2025 pago" da Cayenne, porque já está
    desatualizado.
  - Etiquetas: "Único dono", "Revisado em concessionária" e "Garantia de fábrica" são itens que a própria loja
    marcou no anúncio. "Baixo km" é automático (2019 ou mais novo e até 60 mil km).
  - Câmbio "CVT" (Kicks SV, Captur) aparece como "Automático CVT"; o "automatizado" da T-Cross virou
    "Automático" (é automático de 6 marchas).
  - Golf: câmbio **manual** pela versão no anúncio e pela foto do painel. "Bancos de couro e rodas de liga
    leve" eu escrevi olhando as fotos.
- **Fotos dos carros**: originais do site atual (1080x1080, já com o "J" da loja no chão), 5 por carro: capa
  4:3 de 800x600 (`assets/img/carros/<id>-0.webp`) e mais 4 quadradas de 720 px para a galeria. As fotos do
  Golf vêm do Kleber Carros; cortei a marca d'água "KleberCarros.com" que fica no canto de baixo.
- **Hero e prévia do WhatsApp (og-image)**: Porsche Cayenne 2019 do estoque.
- **Fachada** (seção "A loja"): parte esquerda do banner de boas-vindas do site atual, com a fachada de
  tijolo e o letreiro "Joãozinho seminovos". É a mesma foto da ficha do Google Maps no endereço atual.
- **Fotos do João e da equipe**: `Joaozinho.png` e `Equipe.png` da home atual. Nomes e funções (Vânio,
  consultor de vendas; Carol, consultora de vendas; Carol, administrativo) vêm do texto "Nossa Equipe" do site.
- **Texto "A loja"**: adaptado da página "Empresa" e do bloco "João Marcos Mariot" da home: inaugurada em
  1995 por João Marcos Mariot, conhecido como Joãozinho; mais de 40 anos negociando veículos; empresa familiar;
  #vemprojoaozinho.
- **Diferenciais**: baseados nos banners da própria loja ("Seminovos selecionados: Revisados, Procedência,
  Garantia" e "Atendimento especializado: Documentação, Financiamento, Consultas") e na equipe administrativa.
- **Contatos**: fixos (48) 3442-0655 e (48) 3442-8917, WhatsApp (48) 99962-0523 e
  contato@joaozinhoautomoveis.com.br, todos do rodapé do site atual. Instagram e Facebook também vêm do
  rodapé do site.
- **WhatsApp usado em todos os botões**: **(48) 99962-0523** (`wa.me/5548999620523`), que é o número do site
  atual e da fachada.
- **Nota do Google**: 4,8 com 63 avaliações (planilha; a ficha "Joãozinho Seminovos" no Google Maps mostra 4,8).
- **Horário**: a ficha do Google mostra segunda das 8h30 às 18h (a visualização limitada só mostrou esse dia).
  Coloquei "Segunda a sexta, 8h30 às 18h" e "Sábado: confirme pelo WhatsApp".
- **Mapa**: Google Maps com busca pelo nome e endereço. Cai no pino "Joãozinho Seminovos" certo.

### Mock / estimado
- **Depoimentos** (Marcelo R., Fernanda S., Paulo T.) são **exemplos**. As avaliações do Google não
  carregaram na visualização limitada do Maps. **Trocar por avaliações reais** antes de publicar.
- **Simulador**: taxa de referência de 1,99% ao mês (Tabela Price), escrita no próprio aviso. Ajustar se a
  loja quiser mostrar outra taxa.

## Confirmar com o dono
1. **Qual WhatsApp recebe os leads.** Usei o **(48) 99962-0523** (site e fachada). O Kleber Carros (e,
   pela busca, o Instagram @joaozinho_seminovos) mostra **(48) 99931-0068**.
2. **Instagram**: o site atual linka **@joaozinho_automoveis**, mas existe também **@joaozinho_seminovos**
   (nome igual ao da ficha do Google). Perguntar qual é o oficial. O Instagram bloqueou a consulta (erro 429),
   então nada do Instagram foi usado.
3. **Horário de sábado** e se o horário de segunda vale para a semana inteira.
4. **Garantia**: o banner da loja diz "Garantia". No site escrevi "pergunte as condições de garantia de cada
   veículo". Confirmar o que a loja oferece.
5. **Troca**: o diferencial "Seu usado na troca" é um padrão do mercado, mas não está escrito no site atual.
   Confirmar.
6. **Endereço no Kleber Carros está antigo**: lá aparece "Rua José Piazza, 123, Jardim Maristela". Também tem
   uma foto de uma **fachada vermelha nova** (letreiro "Joãozinho seminovos") que não é a fachada de tijolo do
   Google. É loja nova ou reforma? Se for a fachada atual, ela fica ótima no topo do site.
7. **Divergências de km entre o site e o Kleber Carros** (usei a do site): Creta 54.000 x 51.000; Kicks Exclusive
   39.000 x 39.800; Tracker LT 61.500 x 60.000; T-Cross 61.000 x 62.000; Tracker LTZ 110.000 x 111.000.
8. **Dados que parecem errados no anúncio atual** (copiei como está):
   - Porsche Cayenne: o título diz "3.0 V6 340cv - 2019", mas o endereço da página diz "S 2.9 bi-turbo V6 440cv
     2018/2019". Confirmar versão e motor.
   - Nissan Tiida 2012: título "1.8 Flex", ficha "Gasolina" (usei Gasolina).
   - Grand Siena: no endereço da página está "Siena Attractive 1.4 Fire"; no título, "Grand Siena Attrac. 1.4 Evo".
9. **Golf Sportline e Kicks Advance**: confirmar se ainda estão à venda.
10. **Atualização do estoque**: o estoque está no array `ESTOQUE`, no começo do `js/main.js`. Combinar como a
    loja vai mandar os carros novos e vendidos (ou ligar no sistema Altimus / Autos 360 que eles já usam).

## Técnico
- HTML + CSS + JS puro, caminhos relativos, sem build. Fontes: Archivo (títulos) e Inter (texto).
- Cada carro abre por link direto: `index.html#carro-<id>` (ex.: `#carro-cayenne-2019`, `#carro-golf-2013`).
- `og:image` e as imagens do JSON-LD estão relativas (`assets/img/...`). O `build.sh` troca por URL absoluta
  na publicação. Não há canonical.
- Pasta com cerca de 7 MB: fotos dos carros 4,1 MB (a galeria só carrega quando se abre um carro) e prints
  cerca de 2,4 MB. A página inicial carrega só as capas (~60 KB cada) e o hero (60 a 125 KB).
- Verificado com Playwright em 1440x900 e 390x844: nenhum erro no console, nenhuma imagem quebrada, sem rolagem
  horizontal. Testei busca, marca, preço, câmbio, "ver todos", janela do carro com galeria, link direto,
  Esc, simulador (inclusive "Simular parcela" a partir do carro), menu do celular, links de WhatsApp com
  mensagem pronta e o mapa carregando no endereço certo.
- Prints: `preview/desktop.jpg`, `preview/mobile.jpg`, `preview/site-atual.jpg` e `preview/site-atual-mobile.jpg`.
  Nos prints de página inteira o Chromium deixa o mapa do Google em branco, então colei por cima um print do
  mapa já carregado (nos dois sites). Ao vivo, o mapa carrega normalmente.
