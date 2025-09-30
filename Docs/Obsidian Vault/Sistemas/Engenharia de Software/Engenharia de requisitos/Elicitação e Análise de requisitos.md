
A elicitação e análise de requisitos são etapas essenciais na construção de um _software_ que realmente atenda às necessidades dos usuários e ao propósito para o qual foi idealizado. De forma prática, a elicitação de requisitos é o processo de "descobrir" o que é necessário (Visure Solutions, 2025). Já a análise é a etapa em que essas informações são organizadas, refinadas e avaliadas para garantir que são claras, viáveis e completas (Sommerville, 2018).  
  
A elicitação pode ser realizada por meio de entrevistas investigativas (Visure Solutions, 2025). Imagine que você está criando um sistema para uma padaria. Nesse caso, seria necessário conversar com alguns agentes desse contexto: com o dono, para entender como ele gerencia os pedidos; com os funcionários, para saber como eles utilizam os sistemas atuais; e, talvez, até com clientes, para compreender suas preferências. Essa coleta de informações pode ser feita via entrevistas, questionários, observação do dia a dia da padaria ou outras técnicas por meio das quais todos os envolvidos compartilham suas ideias e dificuldades.

Entretanto, durante esse processo, nem sempre os _stakeholders_ conseguem expressar suas necessidades de forma clara, o que pode gerar expectativas conflitantes. Por exemplo, o dono da padaria pode desejar um sistema que aumente a velocidade no atendimento, enquanto os funcionários podem preferir uma solução mais intuitiva, mesmo que isso demande mais tempo inicial de configuração. É nesse ponto que a análise de requisitos se torna essencial, pois é ela que resolve esses conflitos, organizando e refinando as informações coletadas para torná-las claras e viáveis.   
A análise de requisitos busca resoluções. Esse processo envolve identificar o que é realmente necessário, separar desejos de necessidades e priorizar o que será implementado (Sommerville, 2018). Por exemplo, durante a análise, pode-se decidir que o sistema permitirá o registro de pedidos em tempo real, enquanto a funcionalidade de integração com um aplicativo de entrega será planejada para uma segunda etapa.

Além disso, a análise garante a viabilidade técnica e financeira dos requisitos. Não há resultado em pedir um sistema que automatize todo o processo de produção de pães se isso exigir equipamentos que a padaria não tem recursos para adquirir. A análise também verifica se os requisitos são consistentes e não entram em conflito. **Por exemplo, se um requisito especifica que o sistema deve funcionar _offline_, mas outro exige acesso a um banco de dados na nuvem, é necessário ajustar as expectativas para evitar inconsistências e garantir um projeto bem-sucedido.**

#### 1.  Elicitação de Requisitos

Uma das formas mais comuns de realizar a elicitação é por meio de entrevistas, nas quais os desenvolvedores conversam diretamente com as partes interessadas. Por exemplo, se o objetivo é criar um sistema para gerenciar consultas médicas, podem-se entrevistar recepcionistas, médicos e pacientes para entender as necessidades de cada um (Devmedia, 2009).   
**Durante as entrevistas, perguntas estratégicas ajudam a captar informações essenciais**. Exemplos incluem: **"quais informações você precisa registrar sobre os pacientes?" ou "quais dificuldades você enfrenta no agendamento de consultas?"**. As entrevistas podem ser estruturadas, com perguntas definidas previamente, ou abertas, permitindo maior flexibilidade para explorar os assuntos e captar novos _insights_.


Um cenário típico é composto por vários elementos que descrevem, passo a passo, uma interação específica (Sommerville, 2018):

- Contexto inicial: explica a situação em que o cenário começa, definindo o estado inicial do sistema e as condições relevantes. Por exemplo, em um aplicativo para pedidos _online_ de uma pizzaria, o cenário pode começar com o cliente acessando o aplicativo e navegando pelo cardápio.

- Fluxo normal de eventos: detalha as etapas padrão que o usuário segue para atingir seu objetivo. Por exemplo, o cliente seleciona uma pizza, escolhe os adicionais, define a quantidade e avança para o carrinho de compras.

- Interações com o sistema: descreve como o sistema responde a cada ação do usuário, como atualizar automaticamente o valor total do pedido ao incluir novos itens ou aplicar cupons de desconto.

- Cenários alternativos ou exceções: aborda situações em que o fluxo normal é interrompido, como a indisponibilidade de um item no estoque ou falha no processamento do pagamento. O cenário pode incluir ações corretivas, como sugerir itens similares ou solicitar um novo método de pagamento.

- Resultado final: especifica o estado do sistema e do usuário ao término do cenário. No exemplo da pizzaria, o resultado seria a confirmação do pedido, com o cliente recebendo os detalhes de entrega e o sistema registrando a solicitação para preparo.

Além dos cenários, outra técnica importante na elicitação de requisitos são os casos de uso, que descrevem como o sistema será utilizado em diferentes situações, considerando as interações entre os usuários, chamados de "atores", e o _software_ (Pressman, 2016). Cada caso de uso representa uma funcionalidade específica e é orientado a um objetivo que o usuário deseja alcançar. Por exemplo, em um sistema de pedidos _online_ de uma pizzaria, um caso de uso poderia ser: "o cliente seleciona uma pizza no cardápio, escolhe os adicionais, confirma o pedido e recebe uma notificação de confirmação".  
  
Uma das ferramentas mais conhecidas para representar casos de uso é o diagrama de caso de uso, um recurso visual que ilustra as interações entre os atores e o sistema, conforme a Figura 1. O diagrama é composto pelos seguintes elementos (Pressman, 2016):

- Atores: representados por figuras de "bonecos", simbolizando os usuários ou outros sistemas que interagem com o software.
- Casos de uso: representados por elipses, que descrevem as funcionalidades do sistema.
- Relações: linhas que conectam os atores aos casos de uso, mostrando quem interage com quais funcionalidades.

![[Pasted image 20250929150957.png]]

#### 2.  Análise de Requisitos

A análise de requisitos é uma etapa essencial no desenvolvimento de software, pois organiza e refina as informações coletadas durante a elicitação, transformando-as em um conjunto claro, viável e alinhado com as necessidades dos usuários e do negócio (Sommerville, 2018). **Esse processo envolve classificar, organizar, priorizar e negociar os requisitos, garantindo que todos estejam de acordo sobre o que deve ser implementado.**

O primeiro passo na análise de requisitos é a **classificação**, que consiste em agrupar as informações conforme suas características. Os requisitos geralmente são classificados em **funcionais** e **não funcionais**. Os requisitos funcionais descrevem o comportamento e as funcionalidades do sistema, enquanto os não funcionais especificam restrições de desempenho, segurança, usabilidade, entre outros aspectos (Silveira, 2024).   

Por exemplo, em um sistema de agendamento _online_, o requisito "permitir que o cliente escolha o horário da consulta" é funcional, pois descreve uma ação esperada do sistema. Já o requisito "o sistema deve carregar a página de agendamento em menos de dois segundos" é não funcional, pois impõe uma restrição de desempenho.

Depois de classificados, os requisitos são organizados de maneira lógica, facilitando a compreensão e o trabalho da equipe de desenvolvimento. Essa organização pode ser feita com base em módulos do sistema, como "cadastro de clientes", "gerenciamento de estoque" ou "relatórios de vendas" (Sommerville, 2018). Por exemplo, em um sistema para uma loja, todos os requisitos relacionados à emissão de notas fiscais podem ser agrupados sob um módulo específico.  
  
A priorização é outra etapa importante da análise, pois nem todos os requisitos podem ser implementados ao mesmo tempo, seja por limitações de tempo, orçamento ou recursos. A priorização ajuda a identificar o que é mais importante para os usuários e para o negócio. Técnicas como MoSCoW são comumente usadas para classificar os requisitos como obrigatórios (_must-have_), desejáveis (_should-have_), opcionais (_could-have_) e descartáveis (_won't-have_). Por exemplo, em um aplicativo de entrega, "permitir rastrear o pedido em tempo real" pode ser considerado obrigatório, enquanto "incluir avaliações de restaurantes" pode ser desejável (Rock Content, 2025).  
  
No entanto, a priorização nem sempre é simples. Diferentes _stakeholders_ podem ter opiniões divergentes sobre quais requisitos devem ter prioridade. Nesse cenário, a negociação desempenha um papel fundamental, permitindo que as partes envolvidas discutam, avaliem suas necessidades e cheguem a um consenso. Por exemplo, o gerente de uma empresa pode insistir que relatórios financeiros sejam prioridade, enquanto os operadores de atendimento podem defender melhorias na interface para cadastro de clientes. A negociação permite equilibrar essas necessidades e criar um plano viável.

#### O resultado final da análise de requisitos é frequentemente documentado em um _backlog_, especialmente em projetos que seguem metodologias ágeis. O _backlog_ é uma lista priorizada de requisitos que será utilizada pela equipe de desenvolvimento para organizar as entregas do projeto. Por exemplo, no caso de um sistema de _e-commerce_, o _backlog_ pode incluir itens como "implementação da página de produtos", "criação do carrinho de compras" e "integração com _gateways_ de pagamento".

#### Considerações Finais

A elicitação e a análise de requisitos são etapas críticas para o sucesso de qualquer projeto de desenvolvimento de _software_. Elas permitem capturar e refinar as necessidades dos usuários, transformando-as em requisitos claros, objetivos e viáveis. Essas etapas não apenas ajudam a garantir que o sistema atenda às expectativas dos _stakeholders_, mas também previnem retrabalhos e conflitos ao longo do desenvolvimento.  
  
A escolha das técnicas adequadas, como entrevistas, cenários, casos de uso ou etnografia, desempenha um papel fundamental na identificação de requisitos relevantes. Além disso, a análise detalhada, que envolve a priorização e negociação entre as partes interessadas, garante que os recursos disponíveis sejam utilizados de forma eficiente, equilibrando diferentes demandas.  
  
Por fim, a documentação resultante, como _backlogs_ ou especificações formais, serve como um guia essencial para toda a equipe de desenvolvimento, alinhando esforços e promovendo a entrega de um produto que agrega valor ao negócio e aos usuários. Assim, a aplicação cuidadosa dessas práticas é um passo indispensável para a criação de soluções tecnológicas que realmente atendam às suas finalidades.