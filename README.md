### **Explicação da Atividade**  

Esta atividade consiste no desenvolvimento de uma aplicação web em **React** utilizando o **Vite** para criação rápida do projeto. O objetivo é criar um sistema de **cadastro de usuários** com navegação entre diferentes páginas usando o **React Router**.  

---

### **Funcionalidades Principais**  

**Navegação com React Router**:  
- `/` → Página inicial com botões para cadastro e lista de usuários.  
- `/cadastro` → Página com um formulário para cadastrar novos usuários.  
- `/sucesso` → Página de confirmação após o cadastro.  
- `/usuarios` → Página que exibe uma lista de usuários cadastrados.  

**Formulário de Cadastro com Validação**:  
- O usuário deve preencher **nome, e-mail, senha e confirmação de senha**.  
- Todos os campos são obrigatórios.  
- A senha e a confirmação devem ser **iguais**.  
- Se os dados estiverem corretos, o usuário é salvo e redirecionado para a tela de sucesso.  

**Lista de Usuários com Dados Mocados**:  
- A exibição de usuários cadastrados utiliza um estado local (sem banco de dados ou API).  

**Estilização com Bootstrap**:  
- A interface usa **Bootstrap** para um design responsivo e intuitivo.  
- Componentes estilizados como **cards, botões arredondados e alertas** para mensagens de erro.
