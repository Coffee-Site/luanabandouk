# Guia de edição — Luana Bandouk Atelier

Edite com o Bloco de Notas, VS Code ou o editor do GitHub. Mantenha sempre as **aspas** `" "` e a **vírgula** no fim das linhas.
Se a página ficar em branco depois de uma edição, falta uma aspa ou vírgula: desfaça a última alteração.

## 1. Trocar o telefone / WhatsApp (o mais comum)
Arquivo `js/content.js`, no começo:
```js
whatsappNumero: "5511960207771",    // só números: 55 + DDD + número
whatsappExibicao: "(11) 96020-7771",
```
Isso atualiza sozinho: botão flutuante, todos os botões "Agendar", mensagem com os vestidos favoritos, rodapé e dados do Google.

## 2. Adicionar um vestido novo ao catálogo
1. Foto vertical (ideal **800 × 1200 px**, até ~150 KB; `.webp`, `.jpg` ou `.png`) em `assets/img/catalogo/`.
2. Em `js/catalogo.js`, copie uma linha e cole **no topo da lista** (os mais novos aparecem primeiro):
   ```js
   { cod: "41", nome: "Nome do Vestido", imagem: "assets/img/catalogo/41-nome-do-vestido.webp", tags: ["Renda"], novo: true },
   ```
   - `cod` = código (pode usar o do Weblocação; aparece no site e na mensagem do WhatsApp). Use códigos **diferentes** para vestidos de mesmo nome.
   - `tags` = filtros (opcional). Os botões de filtro são criados sozinhos.
   - `novo: true` = selo "Novo" (opcional; remova depois de um tempo).
3. Para remover, apague a linha. Para trocar a foto, substitua o arquivo ou o caminho.
Dica: squoosh.app reduz e converte imagens grátis. Para muitos vestidos, o site mostra 12 por vez e carrega as fotos só quando aparecem.

## 3. Mensagens do WhatsApp
`js/content.js` → bloco `mensagens`: `padrao` (botões gerais), `selecao` (lista de favoritos; `{lista}` é preenchida sozinha) e `vestido` (botão "Quero provar este vestido"; `{vestido}` é preenchido sozinho).

## 4. Textos, galeria, depoimentos, FAQ, horários
Tudo em `js/content.js`. Em títulos, o trecho entre `*asteriscos*` fica em itálico azul.
- **Galeria "Noivas reais":** uma linha por foto em `galeria.fotos`. Troque, adicione ou remova.
- **Depoimentos:** bloco `depoimentos.lista` (nome + texto).
- **Horários e endereço:** bloco `atelie`. O mapa e o botão "Traçar rota" usam o campo `endereco`.
- **Foto do hero (arco):** `inicio.imagens` (use qualquer vestido do catálogo).
- **Link do catálogo completo:** `atelie.catalogoCompleto`.

## 5. Logotipo, cores e fontes
Logos em `assets/img/marca/` (PNG transparente: `logo-azul.png` e `logo-branco.png`). Cores e fontes: topo de `css/style.css` (`:root`).

## 6. Publicar a alteração
`git add . && git commit -m "Atualiza site" && git push` (ou edite direto no GitHub). O Cloudflare publica sozinho em ~1 minuto.

## 7. Regras de ouro para imagens (evitam fotos quebradas no ar)
- **Maiúsculas e minúsculas importam.** No Windows `Foto.JPG` e `foto.jpg` são iguais, mas no GitHub e na Cloudflare **não são**. O nome no `content.js`/`catalogo.js` deve ser **idêntico** ao do arquivo. Use sempre minúsculas, sem espaços e sem acentos (ex.: `noiva-01.webp`).
- **Não suba fotos pesadas.** Uma foto de 2K em `.jpg` pesa ~2,5 MB e deixa o site lento. Converta para `.webp` com ~1200 px de largura (≈150 KB) em squoosh.app antes de colocar na pasta. Galeria e foto da Luana: 1200 px de largura já ficam nítidas, inclusive em telas retina. Vestidos do catálogo: 720 a 800 px de largura.
- Mantenha na pasta **somente** os arquivos que o site usa (não deixe cópias `.jpg` e `.webp` da mesma foto).
