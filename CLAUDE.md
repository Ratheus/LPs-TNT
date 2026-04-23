# TNTFIT — Projeto de Landing Pages

## Sobre o projeto

Landing pages para as unidades da academia **TNTFIT**. Cada unidade tem sua própria pasta com uma cópia independente da LP.

## Estrutura de pastas

```
Sites/
├── CLAUDE.md               ← este arquivo
├── taste-skill-main/
│   └── taste-skill-main/   ← LP da unidade Parada de Taipas (base para as demais)
│       ├── index.html
│       ├── assets/
│       │   ├── css/styles.css
│       │   └── img/
├── ct/
├── elisio/
├── paula-ferreira/
└── edgar-faco/
```

## Unidades planejadas

- [x] **Parada de Taipas** — pasta `taste-skill-main/` (concluída, base do projeto)
- [ ] **CT** — pasta `ct/`
- [x] **Elísio** — pasta `elisio/` (concluída)
- [x] **Paula Ferreira** — pasta `paula-ferreira/` (concluída)
- [x] **Edgar Facó** — pasta `edgar-faco/` (concluída)

> Endereços, telefones e horários de cada unidade ainda precisam ser confirmados com o cliente.

## Fluxo de trabalho para novas unidades

1. Duplicar a pasta `taste-skill-main/` e renomear para o nome da unidade
2. Abrir a nova pasta no VS Code
3. Alterar com Claude: nome da unidade, endereço, telefone, horários, link do Google Maps embed
4. Substituir fotos se necessário

## Detalhes técnicos

- HTML/CSS puro, sem framework
- Fontes: **Barlow Condensed** + **DM Sans** (Google Fonts)
- Favicon: `assets/img/favicon.png` (32x32 ou 64x64px, deve ser quadrado)
- CSS versionado via query string: `styles.css?v=3` — incrementar ao publicar alterações

## Configurações locais

- Permissões Claude Code em `.claude/settings.local.json`
