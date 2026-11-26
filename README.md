# Media kit · Weslley Monteiro

Site de página única para apresentar Weslley Monteiro, modelo e artista, suas parcerias, fotografias, campanhas e contatos. Conteúdo em português do Brasil, com atuação em todo o país.

HTML, CSS e JavaScript puros, sem dependências de execução e sem compilação. As fontes são carregadas pelo Google Fonts; as imagens e os vídeos estão no repositório.

## Estrutura

```text
public/                          Saída estática publicada pela Vercel
  index.html                     Conteúdo, navegação e metadados
  assets/
    css/
      base.css                     Tokens, reset, tipografia e componentes
      layout.css                   Seções, grades e responsividade
      animacoes.css                Estados e efeitos de movimento
    js/
      site.js                      Ano automático
      animacoes.js                 Revelações, contagens e rolagem
    icons/                         Ícones e favicons
    logos/                         Logotipos usados na página
    img/
      capa/                        Foto principal
      sobre/                       Retratos e bastidores
      ensaio/                      Galeria fotográfica
      og/                          Imagem de compartilhamento
    video/
      cea/                         Campanha C&A
      don-diego/                   Campanha Don Diego
      pele-bonita/                 Campanha Pele Bonita
  favicon.ico                    Compatibilidade de favicon
  site.webmanifest               Nome, cores e ícones do site
  robots.txt                     Regras de indexação
  sitemap.xml                    URL para mecanismos de busca
vercel.json                      Cabeçalhos HTTP e cache
docs/                            Documentos de entrega e arquivos de origem preservados
```

## Visualização local

Na raiz do projeto, com Python 3 instalado:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory public
```

Abra `http://127.0.0.1:8000`. Encerre com `Ctrl+C`. Use um servidor HTTP para testar também os ícones e o manifest, que usam caminhos a partir da raiz do domínio.

## Manutenção

- Edite os textos, contatos, métricas e metadados em `public/index.html`. Atualize todas as ocorrências de métricas e contatos repetidos.
- Preserve a ordem dos estilos: `base.css`, `layout.css`, `animacoes.css`. Preserve `defer` nos scripts.
- Use nomes em minúsculas, sem espaços ou acentos e com hífens. Vídeos seguem `weslley-monteiro-campanha-<marca>.mp4`.
- As fotografias já seguem nomes descritivos: mantenha as versões `800` e `1600`, os pares WebP/JPG e os respectivos `srcset`, `sizes`, `width` e `height`.
- Mantenha o conteúdo disponível sem JavaScript e respeite a preferência por movimento reduzido. O ano é preenchido por `public/assets/js/site.js`.
- Ao substituir mídia mantendo o nome, considere o cache de até sete dias. Prefira outro nome e atualize as referências para tornar a nova versão identificável.

## Publicação

O destino de hospedagem é a Vercel e o domínio principal é **https://weslleymonteiroof.com.br/**, sem `www`.

Importe este repositório no projeto da Vercel e mantenha **Root Directory** na raiz do repositório, onde está `vercel.json`. A configuração versionada define:

- **Framework Preset:** Other (`framework: null`).
- **Build Command:** vazio, sem compilação.
- **Install Command:** vazio, sem dependências.
- **Output Directory:** `public`.

Somente o conteúdo de `public` será servido. Os documentos e arquivos de origem em `docs` ficam fora da saída publicada. A `.vercelignore` também exclui esses materiais do envio pela CLI. Não selecione `public` como Root Directory: essa opção deixaria o `vercel.json` fora da raiz do projeto.

As URLs de canonical, Open Graph, Twitter, JSON-LD, robots e sitemap usam o domínio oficial. O `vercel.json` prepara redirecionamentos permanentes (308) de `www.weslleymonteiroof.com.br` e `weslleymonteiro.vercel.app` para o domínio principal, mantendo os caminhos. URLs de preview da Vercel continuam disponíveis sem esse redirecionamento.

### Domínio e DNS

1. No projeto da Vercel, abra **Settings → Domains** e adicione `weslleymonteiroof.com.br` e `www.weslleymonteiroof.com.br` ao ambiente de produção.
2. Mantenha `weslleymonteiroof.com.br` como destino principal. Caso a Vercel ofereça um redirecionamento automático do domínio principal para `www`, escolha a opção sem esse redirecionamento para evitar conflito com a configuração do repositório.
3. No provedor que administra o DNS do domínio, crie os registros indicados pela Vercel: normalmente um **A** para a raiz (`@`) e um **CNAME** para `www`. Copie os destinos exatos exibidos pelo projeto; não use um IP ou CNAME genérico. Se houver exigência de comprovação de propriedade, adicione também o TXT informado.
4. Aguarde a validação do DNS e do certificado HTTPS no painel antes de divulgar o endereço. A preparação dos arquivos não vincula o domínio nem altera o DNS automaticamente.

Referências oficiais: [configuração de builds e diretório de saída](https://vercel.com/docs/builds/configure-a-build), [configuração estática e redirecionamentos](https://vercel.com/docs/project-configuration/vercel-json) e [domínio personalizado e DNS](https://vercel.com/docs/domains/set-up-custom-domain).

Após o deploy, confira a página inicial, as mídias, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, o HTTPS e os redirecionamentos de `www` e do endereço antigo. `/docs/`, `/README.md` e `/CLAUDE.md` devem retornar 404. A revisão visual no navegador continua pendente da etapa anterior.

Antes do uso oficial, confirme os dados do cliente, especialmente a medida de tórax ainda preenchida como `00` e os créditos das fotografias. Confira também a aparência em desktop e celular, a navegação por teclado, os vídeos, os contatos e o conteúdo sem JavaScript e com movimento reduzido.
