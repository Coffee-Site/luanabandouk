# Guia de publicação — GitHub + Cloudflare Pages
O site é estático: **sem comando de build**.

1. **GitHub:** crie um repositório vazio. Na pasta do site: `git init` → `git add .` → `git commit -m "Site inicial"` → `git branch -M main` → `git remote add origin URL-DO-REPOSITORIO` → `git push -u origin main`.
2. **Cloudflare:** Workers & Pages → Create → Pages → Connect to Git → escolha o repositório. Framework: None · Build command: *(vazio)* · Output directory: `/`. Confirme os nomes dos campos na tela, pois a interface da Cloudflare muda.
3. **Domínio próprio:** no projeto → Custom domains. **Antes de trocar nameservers, copie todos os registros DNS atuais (principalmente e-mail MX/TXT).** HTTPS é automático (pode levar alguns minutos).
4. **Depois do domínio:** informe o endereço final para adicionar `canonical`, `sitemap.xml` e `og:url`.

## Se algo der errado no upload (diagnóstico rápido)

**1) O `index.html` sumiu da pasta depois de abri-lo.**
O navegador não apaga arquivos do seu computador. Quando um arquivo some ao ser aberto, quase sempre é o antivírus (Windows Security ou outro) movendo-o para a quarentena por "falso positivo". Confira em *Segurança do Windows → Proteção contra vírus e ameaças → Histórico de proteção* (ou na quarentena do seu antivírus). Se estiver lá: **Restaurar** e **Permitir no dispositivo**, e adicione a pasta do site às exclusões. **Dica:** envie o site ao GitHub *antes* de abrir o `index.html` localmente.

**2) O GitHub não aceita arrastar a pasta (só arquivos ou ZIP).**
- O botão "escolher arquivos" nunca aceita pastas, isso é normal. Só o **arrastar e soltar** envia pastas.
- O GitHub **não descompacta ZIP**: suba os arquivos, não o `.zip`.
- O upload pelo navegador aceita no máximo **100 arquivos por vez** (e 25 MB por arquivo). Com o catálogo crescendo, o site vai passar de 100 arquivos: use o **GitHub Desktop** (desktop.github.com) ou o `git`, que não têm esse limite.
- Se nem arquivos soltos aceitam ser arrastados (cursor com símbolo de proibido), o navegador provavelmente está aberto **como Administrador**: o Windows bloqueia arrastar do Explorer para programas elevados. Feche e abra o navegador normalmente (sem "Executar como administrador"), teste em uma janela anônima/outro navegador (Edge, Chrome) e desative extensões que mexam com arrastar/soltar.
- Arraste **o conteúdo** do site (index.html, css, js, assets...), não a pasta que contém tudo, para o `index.html` ficar na raiz do repositório.
