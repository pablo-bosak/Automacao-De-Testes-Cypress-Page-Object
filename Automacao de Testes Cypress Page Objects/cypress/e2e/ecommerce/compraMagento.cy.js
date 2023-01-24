/// <reference types="cypress" />

import PaginaInicial from '../../support/pages/paginaInicial'
import NovoCadastro from '../../support/pages/novoCadastro'
import MyAccount from '../../support/pages/myAccount'
import AddEndereco from '../../support/pages/addEndereco'
import Product from '../../support/pages/product'
import Carrinho from '../../support/pages/carrinho'
import ConfirmarEnderecoCompra from '../../support/pages/confirmarEnderecoCompra'
import Payment from '../../support/pages/payment'

describe('Teste de compra na Pagina Magento', () => {

    const paginaInicial = new PaginaInicial()
    const novoCadastro = new NovoCadastro()
    const myAccount = new MyAccount()
    const addEndereco = new AddEndereco()
    const product = new Product()
    const carrinho = new Carrinho()
    const confirmarEnderecoCompra = new ConfirmarEnderecoCompra()
    const payment = new Payment()

    context('Acessar a pagina', () => {
        before(() => {
            paginaInicial.acessar()
        });
        
        it('Deve cadastrar usuario editar endereco e finalizar uma compra', () => {
            paginaInicial.confirmarPageInicial()
            paginaInicial.selecionarCriarConta()
            novoCadastro.confirmarPage()
            novoCadastro.confirmInfoPessoal()
            novoCadastro.preencherFirstName()
            novoCadastro.preencherLastName()
            novoCadastro.confirmarSiginInfo()
            novoCadastro. preencherEmail()
            novoCadastro. preencherSenha()
            novoCadastro.preencherConfirmaSenha()
            novoCadastro.confirmarCadastro()
            myAccount.confirmarPage()
            myAccount.confirmarAddressBook()
            myAccount.confirmarDefaultBillAdd()
            myAccount.editarEndereco()
            addEndereco.confirmarAddressPage()
            addEndereco.confirmarCampoContactInfo()
            addEndereco.preencherTelefone()
            addEndereco.confirmarCampoAdrress()
            addEndereco.preencherPais()
            addEndereco.preencherEstado()
            addEndereco. preencherCidade()
            addEndereco.preencherCep()
            addEndereco.preencherRua()
            addEndereco.confirmarCadasrtro()
            addEndereco.confirmarPageAddBook()
            product.selecionarGear()
            product.confirmarGearPage()
            product.selecionarOpcaoRelogios()
            product.confirmarWatchesPage()
            product.selecionarRelogio()
            product.confirmarWatchPage()
            product.adicionarAoCarrinho()
            product.irPraPaginaPrincipal()
            carrinho.selecionarCarrinho()
            carrinho.confirmarPaginaCarrinho()
            carrinho.confirmarSummary()
            carrinho.detalhesSummary()
            carrinho.confirmarItem()
            carrinho.confirmarSubtotal()            
            carrinho.confirmarTotalPedido()
            carrinho.confirmarPedido()
            confirmarEnderecoCompra.confirmarEnderecoEnvio()
            confirmarEnderecoCompra.confirmaMetodoEnvio()
            confirmarEnderecoCompra.selecionarProximoPasso()
            payment.confirmarMetodoPagamento()
            payment.confirmarDetalhePedido()
            payment.finalizarPagamento()
            payment.confirmarCompraFeita()            
        });
    });    
});