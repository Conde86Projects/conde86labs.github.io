# Portfolio Hub Migration Plan (Option 2)

## Overview
Reestruturar o repositório `conde86labs.github.io` para atuar como o Hub/Portfólio Institucional da Conde86 Labs, enquanto a Landing Page premium do AudioCalc criada recentemente é isolada em um subdiretório próprio (`/audiocalc`).

## Project Type
WEB

## Success Criteria
- Os arquivos HTML do AudioCalc (`index.html`, `sobre.html`, `apoie.html`, `politica-de-privacidade.html`) são movidos para a pasta `audiocalc/`.
- Uma nova `index.html` (Hub Institucional) é criada na raiz do projeto, atuando como a vitrine do desenvolvedor Adrian Andreas Brandi.
- A navegação entre o Hub e a aplicação AudioCalc funciona perfeitamente online pelo GitHub Pages.
- Os caminhos de imagens e CSS continuam funcionando sob a base do repositório.

## Tech Stack
- HTML5 / CSS3 / Bootstrap 5
- O mesmo Design System (variáveis Mint / Google Fonts Outfit e Readex Pro) será aproveitado para a página do desenvolvedor, porém com uma apresentação mais "Agência/Portfólio".

## File Structure Target
```
/
├── audiocalc/
│   ├── index.html (antiga raiz)
│   ├── sobre.html
│   ├── apoie.html
│   └── politica-de-privacidade.html
├── index.html (NOVO: Vitrine Conde86 Labs)
├── css/
│   └── style.css (compartilhado)
├── js/
│   └── script.js (compartilhado)
└── images/
```

## Task Breakdown

1. [ ] **Task 1: Mover Arquivos do AudioCalc**
   - **Agent**: `orchestrator`
   - **Skills**: `bash-windows`
   - **INPUT**: Arquivos HTML na raiz
   - **OUTPUT**: Pasta `audiocalc/` contendo `index.html`, `sobre.html`, `apoie.html` e `politica-de-privacidade.html`.
   - **VERIFY**: Confirmação visual de que os arquivos foram alocados e os links base (Tag Base HREF) estão íntegros para ler os assets da raiz.

2. [ ] **Task 2: Corrigir o Roteamento Interno na pasta AudioCalc**
   - **Agent**: `frontend-specialist`
   - **Skills**: `clean-code`
   - **INPUT**: Arquivos na pasta `audiocalc/`
   - **OUTPUT**: Links do Navbar (como `href="index.html"`) apontando corretamente entre si dentro da subpasta. O botão "Conde86 Labs" no Navbar deve apontar para a raiz `../index.html`.
   - **VERIFY**: Todos os hrefs das páginas apontam para seus pares internos, exceto o botão do Hub.

3. [ ] **Task 3: Desenvolver a Nova Hub Institucional (index.html na Raiz)**
   - **Agent**: `frontend-specialist`
   - **Skills**: `frontend-design`
   - **INPUT**: N/A (Nova página)
   - **OUTPUT**: `index.html` na raiz, apresentando a "Conde86 Labs", um portfólio de projetos (incluindo o card do AudioCalc redirecionando para `/audiocalc/index.html`), e informações sobre o desenvolvedor.
   - **VERIFY**: Página visualmente distinta, operando as variáveis globais de estilo de forma premium, sem quebrar a consistência.

## Phase X: Verification
- [ ] Validar se as subpáginas abrem corretamente na nova rota simulada.
- [ ] Checar se CSS e Imagens carregam via Tag base ou com relative linking correto.
- [ ] Commit e Push final com a nova reestruturação do repositório.
