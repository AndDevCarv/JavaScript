
 1. **Introdução à Engenharia de Requisitos**
 
 Já parou para pensar em como os softwares são criados de forma a atender às expectativas dos usuários? Será que, ao iniciar um projeto, basta acessar um ambiente de desenvolvimento e codificar? Ou será que é necessário utilizar um processo inicial para entender a real necessidade de quem utilizará o sistema? Para responder estas perguntas, será abordado um tópico muito importante da engenharia de software: a engenharia de requisitos.
 
 Para iniciar a compreensão sobre a engenharia de requisitos, é necessário entender o que é um requisito de software. Os requisitos de software são fundamentais para garantir que um sistema atenda às expectativas de seus usuários e objetivos de negócio. Em termos simples, requisitos de software são as descrições detalhadas sobre o que o sistema deve fazer, sobre como deve se comportar e as restrições que precisa seguir. Eles servem como um guia que orienta o desenvolvimento, ajudando a alinhar as necessidades do cliente, do time técnico e de outros envolvidos no projeto (Pressman, 2016).

Por exemplo, imagine que você está desenvolvendo um aplicativo de controle financeiro pessoal. Um requisito poderia ser: "o usuário deve ser capaz de registrar suas despesas diárias, categorizando-as em alimentação, transporte e lazer". Outro requisito pode ser: "o aplicativo deve gerar relatórios mensais detalhados com gráficos para facilitar o acompanhamento financeiro". Esses requisitos ajudam a definir o escopo e a funcionalidade esperada do aplicativo, garantindo que ele realmente atenda às necessidades dos usuários.

Além disso, é importante considerar que nem todos os requisitos dizem respeito às funcionalidades diretamente. Por exemplo, existem também os chamados requisitos não funcionais, que tratam de aspectos como desempenho, segurança e usabilidade. No caso do aplicativo financeiro, um requisito não funcional seria o de que o sistema precisa garantir que os dados do usuário sejam e estejam protegidos contra acessos não autorizados. (Sommerville, 2018)


2. **Tipos de requisitos**

Inicialmente, serão exploradas as diferenças entre requisitos de usuário e de sistema. Os **requisitos de usuário** descrevem o que o sistema deve fazer do ponto de vista de quem o utiliza. Geralmente, são escritos em uma linguagem simples, com foco no que o usuário espera do sistema. Por exemplo, em um aplicativo de pedidos online, um requisito de usuário pode ser: "o cliente deve ser capaz de visualizar um histórico completo dos seus pedidos, incluindo data e status de entrega". 

Já os **requisitos de sistema** são mais detalhados e técnicos, destinados a orientar a equipe de desenvolvimento sobre como implementar as funcionalidades desejadas. Utilizando o mesmo exemplo, um requisito de sistema pode ser: "o sistema deve armazenar dados de pedidos em um banco de dados relacional e exibir as informações na interface do usuário, filtradas por data e status" (Silveira, 2024, s.p)

Os requisitos funcionais especificam o que o sistema deve fazer, ou seja, as funcionalidades e serviços que ele deve oferecer. Eles descrevem como o sistema deve reagir a determinadas entradas e situações (Visure Solutions, 2025).  
Por exemplo, em um software de gerenciamento de estoque, um requisito funcional poderia ser: **o sistema deve permitir o cadastro de novos produtos, incluindo nome, descrição, preço e quantidade disponível**. Esses requisitos são importantes para garantir que as funcionalidades essenciais sejam desenvolvidas de forma clara e objetiva, atendendo às demandas dos usuários. 

Os requisitos não funcionais, por outro lado, tratam de características e restrições gerais do sistema, como desempenho, segurança, usabilidade e confiabilidade. Eles não descrevem funcionalidades específicas, mas sim como o sistema deve se comportar (Maretti, 2014). Outro exemplo comum de requisito não funcional é relacionado à segurança: **a senha dos usuários deve ser armazenada de forma criptografada para evitar acesso não autorizado**. Esses requisitos são essenciais para garantir que o sistema funcione bem em diferentes condições e ofereça uma boa experiência ao usuário. 

Os requisitos de domínio são derivados do contexto específico no qual o sistema será utilizado e podem influenciar tanto os requisitos funcionais quanto os não funcionais. Eles refletem regras de negócio, regulamentos ou particularidades do setor de atuação. Por exemplo, em um sistema para uma farmácia, um requisito de domínio pode ser:  **"o sistema deve rastrear a validade de medicamentos e emitir alertas automáticos para itens que estão próximos da data de vencimento"** (Devmedia, 2008)

3. **Processo de Engenharia de Requisitos**

Esse processo envolve várias etapas que ajudam a identificar, entender, documentar e validar o que o sistema deve fazer. Entre as principais atividades estão a elicitação, análise, especificação e validação de requisitos, culminando na criação de um documento de requisitos de software. Além disso, o gerenciamento de requisitos é essencial para lidar com mudanças e manter o controle durante o desenvolvimento (Sommerville, 2018).

Depois de coletar os requisitos, é preciso organizá-los e analisar sua viabilidade. Nessa etapa, a equipe identifica conflitos entre diferentes necessidades e verifica se os requisitos são claros, completos e realistas. Por exemplo, se um cliente solicita que o sistema de agendamento envie mensagens para os pacientes lembrando-os da consulta, é necessário avaliar se isso é tecnicamente viável dentro do orçamento e do prazo. Também é nessa fase que requisitos conflitantes são negociados; no caso do sistema da clínica, isso pode significar priorizar funcionalidades específicas, como notificações automáticas para pacientes.

Uma vez definidos e analisados, os requisitos são documentados em um formato claro e estruturado. Esse documento de requisitos de software (DRS) é essencial, pois serve como guia para a equipe de desenvolvimento e como referência para os clientes. Ele descreve, por exemplo, que o sistema deve permitir o agendamento de consultas com filtros por data, horário e especialidade do médico. Além disso, o DRS pode incluir diagramas e tabelas para facilitar a compreensão. Essa etapa ajuda a evitar ambiguidades e erros durante o desenvolvimento. Antes que o desenvolvimento comece, os requisitos devem ser validados para garantir que, de fato, refletem corretamente as necessidades dos usuários. Essa validação pode ser feita por meio de revisões, protótipos ou simulações.

Os requisitos podem mudar ao longo do projeto, seja por novas demandas dos usuários, mudanças no mercado ou restrições técnicas. O gerenciamento de requisitos é o processo que lida com essas alterações, garantindo que elas sejam controladas e documentadas. Por exemplo, se a clínica decide integrar o sistema de agendamento com uma plataforma de pagamentos online, o impacto dessa mudança deve ser avaliado, e os requisitos, atualizados. Um bom gerenciamento evita confusões e mantém o projeto no caminho mais adequado (Open Cadd, 2018).


**Aplicabilidade:**

Elicitação de requisitos: conduzir entrevistas e workshops com o cliente e potenciais usuários para coletar requisitos funcionais, como a capacidade de registrar despesas diárias categorizadas e gerar relatórios mensais com gráficos detalhados.

Análise de requisitos: organizar os requisitos coletados, identificar possíveis conflitos ou inconsistências e verificar a viabilidade técnica de cada funcionalidade solicitada.

Especificação de requisitos: documentar detalhadamente os requisitos em um documento de requisitos de software (DRS), incluindo requisitos não funcionais, como segurança de dados e usabilidade.

Validação de requisitos: apresenta protótipos ou modelos do aplicativo para o cliente e usuários-chave a fim de validar os requisitos e ajustar conforme o feedback recebido.

Gerenciamento de requisitos: estabelece um processo para gerenciar mudanças nos requisitos ao longo do projeto, garantindo que todas as alterações sejam documentadas e comunicadas à equipe de desenvolvimento.