# TNTFIT — Projeto de Landing Pages

## Sobre o projeto

Landing pages para as unidades da academia **TNTFIT**. Cada unidade tem sua própria pasta com conteúdo independente, mas compartilha CSS e JS via a pasta `shared/`.

## Estrutura de pastas

```
LPs-TNT/
├── CLAUDE.md
├── shared/
│   ├── base.css          ← CSS base (todos os estilos, compartilhado por todas as LPs)
│   └── main.js           ← JS compartilhado (countdown, scroll reveal, FAQ, carrosséis)
├── parada-de-taipas/     ← Unidade Parada de Taipas
├── elisio-texeira/       ← Unidade Elísio Teixeira
├── paula-ferreira/       ← Unidade Paula Ferreira
├── edgar-faco/           ← Unidade Edgar Facó
├── centro-de-treinamento-tntfit/  ← CT (estrutura levemente diferente)
└── Unidades/             ← Página de índice com links para todas as unidades
```

Cada pasta de unidade segue esta estrutura:

```
<unidade>/
├── index.html
└── assets/
    ├── css/
    │   ├── theme.css     ← APENAS o hero background (mobile + desktop)
    │   └── styles.css    ← legado, não usado pelo HTML
    ├── img/              ← imagens da unidade (webp)
    └── js/
        └── main.js       ← legado, não usado pelo HTML (HTML usa /shared/main.js)
```

## Unidades

| Pasta | Status | GTM | Telefone |
|---|---|---|---|
| `parada-de-taipas/` | ✅ Concluída | GTM-KZKG9ZLG | (11) 5192-8531 |
| `elisio-texeira/` | ✅ Concluída | — | (11) 5192-5840 |
| `paula-ferreira/` | ✅ Concluída | GTM-W9KX4GLP | — (confirmar) |
| `edgar-faco/` | ✅ Concluída | GTM-PX7M53SR | — (confirmar) |
| `centro-de-treinamento-tntfit/` | ✅ Concluída | — | (11) 5192-9046 |

> Endereços, telefones e horários de algumas unidades ainda precisam ser confirmados com o cliente.

## Arquitetura do código

### CSS — dois arquivos por LP

O HTML de cada LP carrega dois CSS nesta ordem:

```html
<link rel="stylesheet" href="/shared/base.css">   <!-- layout completo -->
<link rel="stylesheet" href="assets/css/theme.css"> <!-- só o hero bg -->
```

- **`shared/base.css`** — reset, tokens CSS (`--y`, `--p`, `--b`, etc.), nav, hero, countdown, marquee, carrosséis, planos, localização, FAQ, footer, scroll reveal. **Editar aqui para mudanças globais.**
- **`assets/css/theme.css`** — arquivo mínimo com apenas as URLs das imagens do hero (mobile e desktop). **Editar aqui para trocar a foto de fundo.**

Exemplo de `theme.css`:
```css
.hero-bg { background-image: url('../img/mobile-v3.webp') }
@media(min-width:768px) {
  .hero-bg { background-image: url('../img/desktop-v3.webp') }
}
```

> `assets/css/styles.css` existe nas pastas mas **não é usado** pelo HTML — é arquivo legado.

### JavaScript

```html
<script src="/shared/main.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

- **`shared/main.js`** — countdown, scroll reveal (`.rv`), FAQ accordion (`.fi`), carrossel genérico (`makeCarousel`), dots das modalidades.
- **Lucide** — ícones carregados via CDN, inicializados após o `main.js`.
- `assets/js/main.js` existe nas pastas mas **não é referenciado** pelo HTML — arquivo legado.

### Tokens CSS principais

| Token | Valor | Uso |
|---|---|---|
| `--y` | `#FFFF00` | amarelo TNTFIT (destaque, CTAs) |
| `--p` | `#9900FF` | roxo (plano CT, ênfases) |
| `--b` | `#0A0A0A` | quase preto (fundo dark) |
| `--c` | `#F7F7F2` | off-white (fundo seções claras) |
| `--br` | `#E5E5E0` | cinza bordas |
| `--m` | `#6B6B65` | cinza texto secundário |
| `--fh` | Barlow Condensed | fonte de títulos |
| `--fb` | DM Sans | fonte de corpo |

### Seções da LP (em ordem)

1. **NAV** — fixo, logo SVG inline TNTFIT, links de âncora, CTA WhatsApp
2. **HERO** — fullscreen, fundo via `theme.css`, link clicável para `#planos`
3. **COUNTDOWN** — barra com contagem regressiva (`.cd-bar`)
4. **MARQUEE** — faixa amarela animada com nomes das modalidades
5. **DIFERENCIAIS** — carrossel de cards (`.wc`) com ícones Lucide
6. **MODALIDADES** — carrossel escuro com foto de cada modalidade (`.mc`)
7. **PLANOS** — grid com 3 cards de planos (TNT Diamond, TNT Pro, TNT Diamond CT)
8. **CTA BAND** — faixa dark com botão WhatsApp
9. **LOCALIZAÇÃO** — cards de endereço/transporte + iframe Google Maps
10. **FAQ** — accordion + card de horários com CTA WhatsApp
11. **FOOTER** — logo, contatos, endereço, redes sociais

### Particularidades do CT (`centro-de-treinamento-tntfit/`)

- Logo no nav é `<img src="assets/img/logo-ct.svg">` em vez do SVG inline TNTFIT
- Hero usa vídeo (`assets/video/hero.webm`) em vez de imagem estática
- Tem `assets/js/nav-scroll.js` extra (scroll behavior da nav)
- Sem GTM

## Fluxo de trabalho para novas unidades

1. Duplicar a pasta `parada-de-taipas/` (referência mais atualizada)
2. Renomear para o nome da unidade (ex.: `nova-unidade/`)
3. No `index.html`, atualizar:
   - `<title>` e `<meta>` — nome da unidade
   - GTM ID (se houver)
   - Número de WhatsApp em todos os `href="https://wa.me/..."`
   - Endereço, telefone, linhas de ônibus
   - Link do iframe do Google Maps
   - Diferenciais específicos da unidade (cards `.wc`)
   - Modalidades disponíveis (cards `.mc`)
   - Horários de funcionamento (FAQ e faq-cta)
   - Redes sociais no footer (Instagram, Facebook)
4. No `assets/css/theme.css`, atualizar os caminhos das imagens do hero
5. Substituir as fotos em `assets/img/` se necessário

## Detalhes técnicos

- HTML/CSS/JS puro, sem framework
- Fontes: **Barlow Condensed** + **DM Sans** (Google Fonts)
- Ícones: **Lucide** via CDN (`unpkg.com/lucide@latest`)
- Favicon: `assets/img/favicon.png` (quadrado, 32×32 ou 64×64 px)
- Os caminhos `/shared/base.css` e `/shared/main.js` são **absolutos** — dependem do servidor ter a raiz em `LPs-TNT/`
- Countdown: data-alvo definida em `shared/main.js` linha 2 (`countdownTarget`) — atualizar ao republicar

## Configurações locais

- Permissões Claude Code em `.claude/settings.local.json`
