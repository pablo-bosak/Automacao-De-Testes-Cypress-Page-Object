# Automacao-De-Testes-Cypress-Page-Object
Automação de Testes com Cypress usando Page Object

Criação de conta de usuário e compra de um produto no ecommerce https://magento.softwaretestingboard.com/
 .O cenário deve:
  - Acessar a página inicial da loja
  - Realizar o cadastro do usuário atráves do link 'Create an Account'
  - Com o usuário cadastrado, adicionar um endereço padrão
  - Selecionar um produto e adicionar ao carrinho
  - Confirmar o produto no carrinho na tela 'Shopping Cart'
  - Confirmar o enderecao de compra na tela 'Shipping Address'
  - Fazer o pagamento do produto na tela 'Payment Method'
  - Finalizar na tela de 'Thank you for your purchase!'
  
  Obs.: Nesse arquivo não esta a pasta 'node_modules.
  No terminal do seu vs code você deve digitar, 'npm i node-modules' / 'npm install node-modules'
  
  
  Pra quem for iniciar o projeto do zero precisa fazer as seguintes instalações:  
   - Inicializar um projeto Node vazio: 'npm init -y'
   - Adicionando o cypress no projeto: 'npm install cypress'
   - Abrindo o cypress no modo interativo: 'npx cypress open'
   
   Caso queiram deixar alguns campos dinâmicos, como login de usuario, senha, endereco, entre outros,
   utilizei a biblioteca FAKER. Para sua instalação basta digitar o comando 'npm install --save-dev @faker-js/faker'
