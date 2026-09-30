# Site ACE São João

Site institucional estático (HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build) para apresentar a Associação Comercial e Empresarial de São João da Boa Vista (ACE São João).

## Estrutura

```
index.html            Página principal
css/style.css          Estilos (responsivo, paleta de cores, contraste AA)
js/main.js             Menu mobile e montagem dos links de WhatsApp
assets/img/            Logotipo e imagens
certificados-acesaojoao/  Catálogo de certificados digitais (dados e imagens)
ficha_negocios.md      Ficha de negócios usada como fonte dos textos do site
```

## Como visualizar

Basta abrir o arquivo `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático (ex.: extensão "Live Server" do VS Code).

## Publicação (GitHub Pages)

Todos os caminhos usados no site são relativos (ex.: `css/style.css`), então o projeto funciona tanto na raiz de um domínio quanto em um subcaminho de projeto do GitHub Pages, sem ajustes adicionais.

## Pendências marcadas no site

Trechos que ainda precisam de conteúdo real estão marcados com `[PREENCHER]`, principalmente na seção de Depoimentos e no CNPJ do rodapé. Não foram inventados números, clientes ou depoimentos.

## Próximo passo

O `</body>` de `index.html` foi deixado limpo, com um comentário indicando onde o `js/chat.js` do assistente de vendas deve ser incluído futuramente.
