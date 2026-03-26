# AudioCalc Redesign Plan

## Overview
Reformular o site do AudioCalc (index.html, sobre.html, apoie.html, politica-de-privacidade.html) para atingir um visual de "Landing Page de Aplicativo Premium".

## Project Type
WEB

## Success Criteria
- O site possui um design premium, abandonando o visual amador.
- Tipografia implementada: Outfit (títulos) e Readex Pro (textos).
- Paleta Mint aplicada com variáveis CSS.
- Seção HERO com chamadas e dois botões CTA criados.
- Seção de Recursos com 3 cards criados (Audiometria, Imitanciometria, Classificações).
- Páginas internas refletindo o novo estilo global e sem tags descontinuadas (`<center>`, `<br>`).

## Tech Stack
- HTML5 (semântico e limpo, substituição de tags e espaçamentos defasados)
- CSS3 (Variáveis CSS, Flexbox/Grid, Box-shadow suave)
- Bootstrap 5 (mantido o CDN atual, sendo integrado/sobrescrito com o CSS customizado para os componentes específicos)
- Google Fonts (Outfit, Readex Pro)

## File Structure
- /index.html
- /sobre.html
- /apoie.html
- /politica-de-privacidade.html
- /css/style.css
- /images/...

## Task Breakdown

1. [ ] **Task 1: Atualizar Estilos Globais e Tipografia**
   - **Agent**: `frontend-specialist`
   - **Skills**: `frontend-design`, `clean-code`
   - **Dependencies**: None
   - **INPUT**: `css/style.css` atual
   - **OUTPUT**: `css/style.css` com as variáveis de cores Mint, fontes importadas do Google Fonts, novos estilos base e globais para responsividade.
   - **VERIFY**: Verificar se as páginas carregam `Outfit` e `Readex Pro` e se a cor de fundo #f1fffb está ativa globalmente.

2. [ ] **Task 2: Implementar Seção HERO e Navegação (index.html)**
   - **Agent**: `frontend-specialist`
   - **Skills**: `frontend-design`
   - **Dependencies**: Task 1
   - **INPUT**: `index.html` atual, layout mockup
   - **OUTPUT**: Seção Header Navbar e HERO reestruturada usando Flexbox. Inclusão dos textos ("AudioCalc: Precisão Audiológica no Seu Bolso") e dois botões CTA duplos. Placeholder para Imagem em mobile frame adicionado.
   - **VERIFY**: HERO section deve exibir os elementos lado a lado em desktop e empilhados em mobile, sem usar tabelas ou tags descontinuadas.

3. [ ] **Task 3: Implementar Seção de Recursos (index.html)**
   - **Agent**: `frontend-specialist`
   - **Skills**: `frontend-design`
   - **Dependencies**: Task 1
   - **INPUT**: `index.html`
   - **OUTPUT**: 3 Cards na seção de recursos: Audiometria Automática, Imitanciometria Profissional, Classificações Clínicas, com bordas arredondadas (16px) e sombras com profundidade. Preenchimento (padding) de 20px no conteúdo (SafeArea pattern).
   - **VERIFY**: Três cards com profundidade visíveis na página inicial adequados à identidade visual.

4. [ ] **Task 4: Reformular Páginas Internas (sobre, apoio e privacidade)**
   - **Agent**: `frontend-specialist`
   - **Skills**: `clean-code`
   - **Dependencies**: Task 1
   - **INPUT**: `sobre.html`, `apoie.html`, `politica-de-privacidade.html`
   - **OUTPUT**: Remoção de tags antigas. Implementação de estrutura Flexbox/CSS Grid. Adicionar card com seu_qr_code_pix.png na página de apoio com elevação da paleta.
   - **VERIFY**: As três páginas renderizam corretamente de acordo com os padrões visuais definidos.

## Phase X: Verification
- [ ] Validar tags HTML5 semanticamente e remoção total de `<center>` e `<br>` para layout.
- [ ] Verificar responsividade e usabilidade mobile.
- [ ] Verificação visual do contraste de cores e tipografia aplicadas (Outfit / Readex Pro).
