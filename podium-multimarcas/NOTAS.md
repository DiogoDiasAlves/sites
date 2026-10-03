# Podium Multimarcas: notas do site demonstrativo

Loja: Podium Multimarcas - Semi Novos de Procedência
Endereço: Av. Centenário, 3952, Centro, Criciúma/SC, 88802-405
Site atual: https://www.podiummultimarcas.com.br/ (feito em 2015 pela Cayman Web Studio)
Dados coletados em 03/10/2026.

## Gancho para abordagem

> "Fiz uma versão nova do site da Podium, com o estoque de vocês de hoje. O site atual é de 2015:
> mostra só nome e preço, espalhados em 3 páginas, sem km nem câmbio, e o botão de ligar para a
> Mari no celular está com o número errado (tel:+55489677137, faltam dígitos). No novo, o cliente
> filtra por marca, preço e tipo (SUV, picape, híbrido...), vê ano, km, câmbio e combustível em cada
> card, abre as fotos e os itens do carro e toca em 'Tenho interesse': cai direto no WhatsApp com o
> nome e o preço do carro na mensagem. Também tem simulador de parcela, a nota 4,8 do Google em
> destaque, mapa e uma prévia bonita quando o link é mandado no WhatsApp."

Diferenças concretas (antes x depois), para usar com `preview/site-atual.jpg` x `preview/desktop.jpg`/`mobile.jpg`:

| Site atual (2015) | Site novo |
|---|---|
| Lista com foto, nome, ano e preço; 3 páginas de 20 carros | 41 carros com filtro instantâneo (busca, marca, faixa de preço, tipo) e ordenação |
| Sem km, câmbio e combustível na listagem | Ano, km, câmbio e combustível em todos os cards |
| WhatsApp só em botão flutuante genérico e dentro da página do carro | Botão "Tenho interesse" em cada card, com mensagem pronta citando carro, ano e preço |
| Link de telefone da Mari quebrado (`tel:+55489677137`) | Links de WhatsApp e telefone corretos |
| Mapa do "Fale conosco" carregado por um iframe `http://` de terceiro dentro de página `https` (navegadores costumam bloquear) | Mapa do Google embutido + botão "Como chegar" |
| Nenhuma menção à nota do Google | Selo 4,8 com 105 avaliações no topo e seção de avaliações |
| Sem simulação de financiamento | Simulador de parcela que já manda a simulação no WhatsApp |
| Widget "Curta a Podium" do Facebook antigo, copyright 2015 | Visual atual, rápido no celular, com a identidade amarela e preta da loja |
| Prévia no WhatsApp com miniatura de 245 px | Prévia grande (1200x630) com a foto da fachada e o pórtico da Podium |

## De onde veio cada coisa

### Real (tirado da própria loja)
- **Logo**: `imagens/logo.png` do site atual. Só recompus em versão horizontal (barrinhas amarelas +
  "PODIUM MULTIMARCAS" em branco), como aparece no pórtico inflável da loja. Não foi redesenhado.
- **Cores**: amarelo `#FCD106` amostrado das fotos da loja (pórtico, totem, placas) + preto.
- **Estoque**: os 43 anúncios do site atual (`/?p=home`, páginas 1 a 3, e cada `/ver-carro/<id>`).
  No site novo entraram **41**:
  - ID 1221 (RAM Rampage Laramie 2.2 diesel 2025, R$ 207.000) ficou de fora porque não tem foto.
  - IDs 1232 e 1280 são o mesmo anúncio (BYD Song Plus 2026/2027 cinza, 20 km, R$ 248.900).
    Mostramos só o 1280. Se forem duas unidades, é só avisar.
  - Preço, ano, km, câmbio, combustível, cor, portas e lista de itens vêm do anúncio. As etiquetas
    "Único dono", "Revisões em concessionária" e "Garantia de fábrica" são os itens que a própria loja
    marcou em cada anúncio.
  - Os nomes foram padronizados (marca + modelo + versão) e corrigi grafias: Freedon → Freedom,
    Rampege → Rampage, Eclipise → Eclipse, Endurence → Endurance. O "City EXL" é hatch pela foto.
- **Fotos dos carros**: originais do site atual (1600x900), 3 por carro: fachada com o pórtico (`-0`),
  frente 3/4 no pátio coberto (`-1`) e interior (`-2`). Convertidas para WebP 800x450 em
  `assets/img/carros/<id>-<n>.webp`.
- **Hero**: Citroën C3 Aircross vermelho na fachada (anúncio 1215). **OG image**: RAM Rampage Rebel
  na fachada (anúncio 1205). **Seção "A loja"**: fotos do pátio coberto (anúncios 1264 e 1205).
- **Texto "A loja"**: adaptado da página `/loja` do site atual.
- **Diferenciais**: baseados no texto padrão que a loja põe em todo anúncio ("Super avaliação do seu
  usado", "Financiamento sujeito a análise de crédito com as melhores taxas do mercado", "Compra com
  cartão de crédito sujeito aos juros da operadora", "Empresa consolidada no ramo de veículos
  semi-novos") e nos contatos da Mari e do Diego.
- **Horário**: rodapé do site atual (seg. a sex. 8h às 18h, sáb. 8h às 13h).
- **Contatos**: site atual e Kleber Carros. E-mail financeiro@podiummultimarcas.com.br.
- **Nota do Google**: 4,8 com 105 avaliações (planilha). O mapa do Google mostra a ficha
  "Podium Multimarcas - Semi Novos de Procedência" com 4,8 (105).
- **Facebook**: https://www.facebook.com/p/Podium-Multimarcas-100063710302144/

### Mock / estimado
- **Depoimentos** (Rafael M., Juliana S., Carlos E.): são **exemplos**. Trocar por avaliações reais do
  Google antes de publicar.
- **Simulador**: taxa de referência de 1,89% ao mês (Tabela Price), escrita no próprio aviso. Ajustar
  se a loja tiver uma taxa média melhor para mostrar.

## Confirmar com o dono
1. **Telefone fixo**: a planilha/Google diz **(48) 3413-7873**, mas o site atual, o totem da fachada
   (visível nas fotos) e o Kleber Carros dizem **(48) 3413-7883**. Usei **3413-7883**. Se for isso,
   a ficha do Google está errada (bom argumento extra para a conversa).
2. **WhatsApp principal**: usei o da **Mari, (48) 98867-7137**, que é o número do botão de WhatsApp e
   dos anúncios do site atual (confirmado no site). O do **Diego, (48) 98433-1297**, aparece no
   contato e no rodapé. Perguntar quem deve receber os leads do site.
3. **"Desde 2015 / vendendo em Criciúma desde 2015"**: tirado da data de abertura do CNPJ
   (22.166.707/0001-05, 31/03/2015) e do copyright do site. Confirmar.
4. **Instagram**: não encontrei perfil da loja de Criciúma (os "Podium Multimarcas" do Instagram são
   de outras cidades). O rodapé só tem o Facebook. Pedir o @, se houver.
5. **Dados do estoque que parecem errados no site atual** (copiei como está):
   - Hyundai Creta N Line 2025 com **110.000 km** (talvez 11.000).
   - Jeep Commander Overland e Jeep Compass T350 com a **mesma km (54.587)**.
   - Chevrolet Onix LS 1.0 2015/2016 marcado como **automático**.
   - RAM Rampage Rebel 2.0 marcada como **Flex**.
   - Mitsubishi ASX 2015: título diz Flex e ficha diz Gasolina (usei Flex).
6. **Bairro**: o Google diz Centro; o Kleber Carros diz Comerciário. Usei Centro.
7. **Atualização do estoque**: o estoque está fixo no `js/main.js` (array `ESTOQUE`). Para manter
   atualizado, combinar como a loja vai mandar os carros novos/vendidos (ou ligar num painel/planilha).

## Técnico
- HTML + CSS + JS puro, caminhos relativos, sem build. Fontes: Sora (títulos) e Inter (texto).
- Cada carro abre por link direto: `index.html#carro-<id>` (ex.: `#carro-1205`).
- `og:image` está relativo (`assets/img/og-image.jpg`). **Depois de publicar, trocar por URL absoluta**
  (ex.: `https://dominio/assets/img/og-image.jpg`) para a prévia do WhatsApp aparecer. Idem `image` e
  `logo` no JSON-LD.
- Pasta com ~6,8 MB (fotos ~4,4 MB, prints ~2,3 MB).
- Verificado com Playwright em 1440x900 e 390x844 (também 360, 768, 1024 e 1280): sem erro no
  console, sem imagem quebrada, sem rolagem horizontal, filtros, "ver mais", modal com fotos,
  simulador e links de WhatsApp funcionando. Mapa do Google carregando na ficha certa.
- Prints: `preview/desktop.jpg`, `preview/mobile.jpg` e `preview/site-atual.jpg` (site antigo,
  para o "antes e depois").
