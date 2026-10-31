/* =====================================================================
   CATÁLOGO DE VESTIDOS — Luana Bandouk Atelier
   ---------------------------------------------------------------------
   COMO ADICIONAR UM VESTIDO NOVO (leva 1 minuto):
   1) Salve a foto em  assets/img/catalogo/  (ideal: 800 x 1200 px, vertical,
      até ~150 KB; formato .webp, .jpg ou .png).
   2) Copie UMA linha abaixo, cole no TOPO da lista (os mais novos aparecem
      primeiro) e troque os dados:
        cod    = código do vestido (pode usar o código do Weblocação)
        nome   = nome que aparece no site e na mensagem do WhatsApp
        imagem = caminho da foto
        tags   = (opcional) filtros, ex.: ["Renda", "Cauda"]  — os botões de
                 filtro do site são criados automaticamente a partir das tags
        novo   = (opcional) escreva  novo: true  para exibir o selo "Novo"
   Para REMOVER um vestido, apague a linha dele. Para trocar a foto, troque
   o arquivo ou o caminho. Mantenha as vírgulas e as aspas.
   Os filtros (tags) foram criados a partir dos nomes — ajuste se necessário.
   ===================================================================== */

window.CATALOGO = [
  { cod: "131", nome: "Cindy", imagem: "assets/img/catalogo/01-cindy.webp" },
  { cod: "130", nome: "Sophi", imagem: "assets/img/catalogo/02-sophi.webp" },
  { cod: "128", nome: "Jade Chantilly", imagem: "assets/img/catalogo/03-jade-chantilly.webp", tags: ["Chantilly"] },
  { cod: "127", nome: "Anna", imagem: "assets/img/catalogo/04-anna.webp" },
  { cod: "126", nome: "Triunfo", imagem: "assets/img/catalogo/05-triunfo.webp" },
  { cod: "125", nome: "Paixão Jacquard", imagem: "assets/img/catalogo/06-paixao-jacquard.webp", tags: ["Jacquard"] },
  { cod: "124", nome: "Amor Crepe 2", imagem: "assets/img/catalogo/07-amor-crepe-2.webp", tags: ["Crepe"] },
  { cod: "123", nome: "Barcelona Crepe com Alça", imagem: "assets/img/catalogo/08-barcelona-crepe-com-alca.webp", tags: ["Crepe"] },
  { cod: "122", nome: "Hermione", imagem: "assets/img/catalogo/09-hermione.webp" },
  { cod: "121", nome: "Joice", imagem: "assets/img/catalogo/10-joice.webp" },
  { cod: "119", nome: "Angela", imagem: "assets/img/catalogo/11-angela.webp" },
  { cod: "118", nome: "Lorelay", imagem: "assets/img/catalogo/12-lorelay.webp" },
  { cod: "117", nome: "Elvire Nicole Milano", imagem: "assets/img/catalogo/13-elvire-nicole-milano.webp" },
  { cod: "116", nome: "Amor com Cauda de Crepe", imagem: "assets/img/catalogo/14-amor-com-cauda-de-crepe.webp", tags: ["Crepe"] },
  { cod: "114", nome: "Nevada Jacquard", imagem: "assets/img/catalogo/15-nevada-jacquard.webp", tags: ["Jacquard"] },
  { cod: "113", nome: "Daria", imagem: "assets/img/catalogo/16-daria.webp" },
  { cod: "112", nome: "Betsi", imagem: "assets/img/catalogo/17-betsi.webp" },
  { cod: "111", nome: "Monique Renda", imagem: "assets/img/catalogo/18-monique-renda.webp", tags: ["Renda"] },
  { cod: "110", nome: "Amor Mikado", imagem: "assets/img/catalogo/19-amor-mikado.webp", tags: ["Mikado"] },
  { cod: "109", nome: "Paixão", imagem: "assets/img/catalogo/20-paixao.webp" },
  { cod: "108", nome: "Duda Renda", imagem: "assets/img/catalogo/21-duda-renda.webp", tags: ["Renda"] },
  { cod: "107", nome: "Paloma", imagem: "assets/img/catalogo/22-paloma.webp" },
  { cod: "106", nome: "Thaiza", imagem: "assets/img/catalogo/23-thaiza.webp" },
  { cod: "105", nome: "Aimmeé", imagem: "assets/img/catalogo/24-aimmee.webp" },
  { cod: "104", nome: "Constance", imagem: "assets/img/catalogo/25-constance.webp" },
  { cod: "103", nome: "Jade Renda", imagem: "assets/img/catalogo/26-jade-renda.webp", tags: ["Renda"] },
  { cod: "102", nome: "Amor Renda", imagem: "assets/img/catalogo/27-amor-renda.webp", tags: ["Renda"] },
  { cod: "101", nome: "Barcelona Crepe com Alça", imagem: "assets/img/catalogo/28-barcelona-crepe-com-alca.webp", tags: ["Crepe"] },
  { cod: "98", nome: "Pandora", imagem: "assets/img/catalogo/29-pandora.webp" },
  { cod: "97", nome: "Lara", imagem: "assets/img/catalogo/30-lara.webp" },
  { cod: "96", nome: "Amor sem Cauda de Crepe", imagem: "assets/img/catalogo/31-amor-sem-cauda-de-crepe.webp", tags: ["Crepe"] },
  { cod: "91", nome: "Hermione", imagem: "assets/img/catalogo/32-hermione.webp" },
  { cod: "90", nome: "Dandara", imagem: "assets/img/catalogo/33-dandara.webp" },
  { cod: "89", nome: "Priscila", imagem: "assets/img/catalogo/34-priscila.webp" },
  { cod: "88", nome: "Amor", imagem: "assets/img/catalogo/35-amor.webp" },
  { cod: "87", nome: "Paixão", imagem: "assets/img/catalogo/36-paixao.webp" },
  { cod: "86", nome: "Carla Crepe", imagem: "assets/img/catalogo/37-carla-crepe.webp", tags: ["Crepe"] },
  { cod: "85", nome: "Jade Crepe", imagem: "assets/img/catalogo/38-jade-crepe.webp", tags: ["Crepe"] },
  { cod: "84", nome: "Paris", imagem: "assets/img/catalogo/39-paris.webp" },
  { cod: "83", nome: "Amor", imagem: "assets/img/catalogo/40-amor.webp" },
];
