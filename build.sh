#!/usr/bin/env bash
# Monta a pasta dist/ com a versão publicável de um site (ou de todos).
#
#   bash build.sh <pasta-do-lead>   -> dist/ com só aquele site na raiz (um projeto por loja)
#   bash build.sh                   -> dist/<pasta-do-lead>/ para todos os sites
#
# O que muda em relação ao repositório:
#   - NOTAS.md e preview/ ficam de fora (são internos, não podem ir para o ar);
#   - og:image, canonical e imagens do JSON-LD viram endereço completo, senão o
#     WhatsApp não mostra a prévia do link;
#   - entra noindex (meta, cabeçalho e robots.txt): é uma demonstração, não pode
#     aparecer no Google no lugar do site real da loja. Tirar quando o cliente fechar.
#
# Endereço base: variável SITE_URL; senão, deduzido de CF_PAGES_URL (que a Cloudflare
# Pages define no build, ex.: https://ab12cd34.bestcar-multimarcas.pages.dev).
set -euo pipefail
cd "$(dirname "$0")"

base="${SITE_URL:-}"
if [ -z "$base" ] && [ -n "${CF_PAGES_URL:-}" ]; then
  host="${CF_PAGES_URL#https://}"
  host="${host%%/*}"
  # tira o prefixo da implantação (hash ou branch) e fica com <projeto>.pages.dev
  [ "$(tr -cd . <<<"$host" | wc -c)" -ge 3 ] && host="${host#*.}"
  base="https://$host"
fi
base="${base%/}"
[ -z "$base" ] && echo "aviso: sem SITE_URL nem CF_PAGES_URL; og:image fica relativo" >&2

# Domínios atuais das lojas que aparecem como endereço absoluto no HTML
old_domains='https://seminovosvipcar\.com\.br'

build_one() {
  local slug="$1" out="$2" url="$3"
  [ -f "$slug/index.html" ] || { echo "não achei $slug/index.html" >&2; exit 1; }
  mkdir -p "$out"
  tar -C "$slug" --exclude=./NOTAS.md --exclude=./preview -cf - . | tar -C "$out" -xf -

  local html="$out/index.html"
  sed -i -E 's#<head>#<head>\n<meta name="robots" content="noindex, nofollow">#' "$html"
  if [ -n "$url" ]; then
    sed -i -E \
      -e "s#${old_domains}/?#${url}/#g" \
      -e "s#(property=\"og:image\" content=\")(assets/)#\1${url}/\2#" \
      -e "s#(name=\"twitter:image\" content=\")(assets/)#\1${url}/\2#" \
      -e "s#(\"(image|logo)\": ?\")(assets/)#\1${url}/\3#g" \
      "$html"
  fi
  echo "ok: $slug -> $out ${url:+($url)}"
}

rm -rf dist
if [ $# -gt 0 ]; then
  build_one "$1" dist "$base"
else
  for d in */; do
    d="${d%/}"
    [ -f "$d/index.html" ] && [ "$d" != dist ] || continue
    build_one "$d" "dist/$d" "${base:+$base/$d}"
  done
fi

printf 'User-agent: *\nDisallow: /\n' > dist/robots.txt
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > dist/_headers
