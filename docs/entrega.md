# Revisão para entrega

Reorganização do repositório realizada em 25/11/2026. O escopo foi a estrutura, a nomenclatura, a manutenção e a consistência das referências. A identidade visual e os dados comerciais existentes foram preservados.

## Alterações

- CSS e JavaScript reunidos em `assets/css` e `assets/js`, com responsabilidades mantidas por arquivo.
- Logotipos usados no site reunidos em `assets/logos`, com nomes consistentes.
- Quatro versões alternativas dos logotipos preservadas em `docs/arquivos-de-origem/logotipos`, fora do material de publicação pela CLI da Vercel.
- Procedência dos logotipos transferida para `docs/fontes-logotipos.json`, com os caminhos locais atualizados.
- Três vídeos renomeados para identificar o cliente, a campanha e a marca. Pasta e textos de Don Diego padronizados.
- Referências de arquivos atualizadas, incluindo os links de alternativa dos vídeos.
- Blocos HTML desativados e estilos exclusivos das faixas corridas removidos.
- Dimensões explícitas adicionadas aos dois logotipos que não as declaravam.
- Sinal de inicialização das animações movido para o fim do script para que uma falha durante a inicialização não seja marcada como sucesso.
- Regra de revalidação de CSS e JavaScript ajustada para os novos caminhos. Página inicial com revalidação explícita.
- Documentação de manutenção versionável, convenções do editor e comando de verificação sem dependências adicionados.

## Pendências de conteúdo antes do uso oficial

- Confirmar a medida de **tórax**, atualmente `00` no HTML. Não foi substituída por um valor presumido.
- Confirmar com o cliente idade, demais medidas, métricas, campanhas, WhatsApp e e-mail. A presença desses dados no código não comprova sua aprovação ou atualização.
- Domínio definitivo informado: `https://weslleymonteiroof.com.br/`. As URLs de SEO foram atualizadas; falta vincular o domínio ao projeto da Vercel e configurar os registros DNS exibidos no painel.
- Confirmar os créditos de fotografia a exibir. Não há crédito publicado no HTML atual.

## Verificação final no navegador

- Abrir em larguras de 1440, 1024, 768 e 390px; verificar fotos, títulos, e-mail e ausência de rolagem horizontal.
- Navegar com teclado e conferir o link de pular conteúdo, o menu, os contatos e o botão de voltar ao topo.
- Conferir legibilidade com JavaScript desativado e com movimento reduzido.
- Reproduzir os três vídeos em desktop e celular. Os arquivos atuais somam cerca de 35 MB; o carregamento usa `preload="metadata"`. Avaliar compressão se a reprodução em rede móvel for lenta.
- Abrir Instagram, WhatsApp e e-mail e confirmar os destinos.
- Após implantar, conferir a imagem de compartilhamento, favicon, manifest, respostas HTTP e cabeçalhos de cache no domínio final.
- Verificar que `/docs/`, `/scripts/` e arquivos de ambiente não estão acessíveis na publicação.

A revisão estrutural cobriu referências locais, âncoras, metadados e sintaxe. A revisão visual, a reprodução de mídia e a confirmação dos dados permanecem manuais. Esta reorganização não representa uma publicação do site.

## Verificações realizadas nesta revisão

- Verificação estrutural aprovada: 61 referências locais, âncoras, dimensões e descrições de imagens, consistência de URLs de SEO, JSON e sintaxe JavaScript.
- Servidor HTTP local: 63 rotas públicas responderam com status 200; tipos de conteúdo dos arquivos CSS conferidos.
- Comparação SHA-256 com a versão anterior no Git: os 11 arquivos de mídia movidos mantêm o conteúdo original.
- O navegador automatizado não concluiu a execução neste ambiente. As verificações visuais, sem JavaScript e com movimento reduzido não foram concluídas; seguem na lista de conferência manual acima.

Após a revisão, foram removidos os mockups locais, o script temporário de verificação, seu `package.json` e as pastas vazias. Os comandos de verificação descritos no histórico não estão mais disponíveis no repositório.

Na preparação do deploy, os arquivos públicos foram reunidos em `public/`. Os caminhos `assets/` e `index.html` descritos no histórico acima agora ficam dentro dessa pasta. A Vercel publica somente `public`, sem instalação de dependências ou compilação. Documentos e arquivos de origem permanecem fora da saída pública. As instruções de domínio e DNS estão no README da raiz.
