# Desafio de Implementação de Centrais

## Objetivo
Implementar funcionalidades em um projeto base dentro de 1 hora, priorizando clareza, organização do código e boa abordagem das ferramentas.

## Tarefas

### 1. Nova Opção no Menu Lateral
- [ ] Adicionar nova opção "Centrais" no menu lateral
- [ ] Redirecionar para a página de listagem de centrais

### 2. Listagem de Centrais
#### 2.1. Exibição das Centrais
- [ ] Listar todas as centrais do endpoint `/centrals`

#### 2.2. Ordenação
- [ ] Implementar ordenação para colunas:
  - [ ] Nome (crescente e decrescente)
  - [ ] Modelo (crescente e decrescente)

#### 2.3. Busca
- [ ] Adicionar campo de busca acima da listagem
- [ ] Filtrar centrais por Nome e Modelo

#### 2.4. Botão de Excluir
- [ ] Adicionar botão de exclusão em cada item da listagem
- [ ] Abrir modal de confirmação ao clicar
- [ ] Integrar exclusão com API fake

#### 2.5. Botão de Criar Central
- [ ] Adicionar botão acima da tabela
- [ ] Redirecionar para página de criação de nova central

### 3. Formulário de Criação de Centrais
#### 3.1. Campos do Formulário
- [ ] Campo Nome: 
  - [ ] Input de texto
  - [ ] Mínimo de 3 caracteres
- [ ] Campo Mac:
  - [ ] Input de texto
  - [ ] Formato XX:XX:XX:XX:XX:XX
  - [ ] Único na base
- [ ] Campo Modelo:
  - [ ] Select dinâmico
  - [ ] Preenchido a partir do endpoint `/models`

#### 3.2. Validação
- [ ] Usar React Hook Form
- [ ] Usar Zod para validações
- [ ] Todos os campos obrigatórios
- [ ] Validar unicidade do campo Mac

#### 3.3. Integração
- [ ] Submeter formulário para endpoint `/centrals`
- [ ] Criar nova central

### 4. Contador no Header
- [ ] Adicionar contador de centrais
- [ ] Atualizar em tempo real:
  - [ ] Ao adicionar central
  - [ ] Ao excluir central

## Considerações Finais
- Priorizar legibilidade e clareza do código
- Funcionalidades como ordenação e contador têm menor prioridade
- Código bem estruturado é fundamental

## Ferramentas e Tecnologias
- React
- React Hook Form
- Zod
- API Fake

## Tempo de Implementação
- 1 hora
