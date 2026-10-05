# Sites de demonstração

Sites feitos para os leads **antes** do contato: cada loja recebe o site dela pronto, mais bonito e
moderno do que o que tem hoje. Uma pasta por lead. Todos seguem o [PADRAO.md](PADRAO.md).

Cada pasta tem:

- `index.html`, `css/`, `js/`, `assets/`: o site, que abre direto pelo `index.html` ou em qualquer
  hospedagem estática.
- `preview/`: prints do site novo (desktop e celular) e, quando deu para tirar, do site atual da
  loja, para o "antes e depois".
- `NOTAS.md`: de onde veio cada informação, o que é real e o que é mock, o que confirmar com o dono
  e o gancho para a abordagem.

## Leads

| Lead | Responsável | Situação de hoje | Pasta |
|---|---|---|---|
| BestCar Multimarcas | Diogo | Site antigo que não aparece na busca por modelo | [bestcar-multimarcas](bestcar-multimarcas/) |
| Excellency Motors | Diogo | Link do site no Google dá erro 404 | [excellency-motors](excellency-motors/) |
| Vip Car Veículos | Diogo | Site inacabado, sem estoque | [vipcar-veiculos](vipcar-veiculos/) |
| Diamond Motors | Diogo | Portal Kleber Carros + site com texto de modelo | [diamond-motors](diamond-motors/) |
| Podium Multimarcas | Diogo | Site de 2015, sem km nem câmbio nos anúncios | [podium-multimarcas](podium-multimarcas/) |

## Publicar na Cloudflare Pages

Cada loja vira um projeto separado, com link próprio (ex.: `bestcar-multimarcas.pages.dev`).
O `build.sh` monta a versão publicável em `dist/`:

- deixa de fora `NOTAS.md` e `preview/`, que são internos;
- troca a imagem de prévia do link (`og:image`) e as imagens do JSON-LD por endereço completo,
  para o WhatsApp mostrar a foto;
- marca o site como `noindex`, para a demonstração não aparecer no Google no lugar do site real da
  loja. **Quando o cliente fechar, tire o noindex** e publique no domínio dele.

No painel da Cloudflare: **Workers e Pages → Criar → Pages → Conectar ao Git**, escolha este
repositório e crie um projeto por loja com:

| Nome do projeto | Comando de build | Pasta de saída |
|---|---|---|
| `bestcar-multimarcas` | `bash build.sh bestcar-multimarcas` | `dist` |
| `excellency-motors` | `bash build.sh excellency-motors` | `dist` |
| `vipcar-veiculos` | `bash build.sh vipcar-veiculos` | `dist` |
| `diamond-motors` | `bash build.sh diamond-motors` | `dist` |
| `podium-multimarcas` | `bash build.sh podium-multimarcas` | `dist` |

Predefinição de framework: **Nenhuma**. Branch de produção: `main`. Diretório raiz: vazio.
Todo push no `main` publica de novo.

Para testar no computador: `bash build.sh bestcar-multimarcas` e abra `dist/index.html`.
