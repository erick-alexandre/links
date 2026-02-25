#Gerenciador de Links

Um aplicativo multiplataforma, construído com React Native e Expo, para salvar e organizar links. Permite adicionar novos links, categorizá-los, listá-los, abri-los no navegador e excluí-los, com todos os dados persistidos localmente no dispositivo.

 ##Funcionalidades Principais

Salvar Links: Adicione novos links fornecendo um nome, a URL e selecionando uma categoria.

Listagem por Categoria: Visualize seus links organizados em categorias (ex: "React", "Node.js", "Pessoal").

Ações Rápidas: Abra qualquer link salvo diretamente no navegador padrão do dispositivo.

Gerenciamento: Exclua links que não são mais necessários.

Persistência Local: Seus links são salvos no dispositivo usando AsyncStorage e permanecem disponíveis mesmo após fechar o aplicativo.

 ##Tecnologias e Conceitos Aplicados

Este projeto foi desenvolvido utilizando um stack moderno de React Native, aplicando os seguintes conceitos e ferramentas:

React Native: Framework base para o desenvolvimento nativo multiplataforma (iOS e Android).

Expo Framework: SDK que facilita o desenvolvimento, o build e o deploy de aplicativos React Native.

TypeScript: Utilizado para adicionar tipagem estática ao JavaScript, garantindo um código mais robusto e de fácil manutenção.

Expo Router: Implementa a navegação do aplicativo utilizando o conceito de rotas baseadas em arquivos (file-based routing).

AsyncStorage (@react-native-async-storage/async-storage): Utilizado para a persistência de dados local, armazenando a lista de links diretamente no dispositivo do usuário.

NativeWind (Tailwind CSS): Para estilização ágil e utilitária dos componentes, trazendo o poder do Tailwind para o ambiente mobile.

Hooks do React: Uso extensivo de useState para gerenciamento de estado (links, modal, categoria) e useCallback com useFocusEffect (do Expo Router) para recarregar os dados eficientemente quando a tela recebe foco.

Componentes Nativos: Utilização de componentes como FlatList para renderização otimizada de listas, Modal para exibir detalhes e opções (abrir/excluir) e Alert para confirmações de ações.

API de Linking: Integração com a API Linking do React Native para abrir URLs externas no navegador.
