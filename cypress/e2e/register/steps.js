import register from '../../support/pages/register';

Given(/^que o usuário acessa o site$/, () => {
	register.visitPage()
});

When(/^preenche o formulário na aba "([^"]*)"$/, (tabName) => {
	register.checkInitialState(tabName)
});

When(/^preenche o formulário na aba "([^"]*)"$/, (tabName) => {
	register.checkInitialState(tabName)
});

When(/^preenche o formulário na aba "([^"]*)"$/, (tabName) => {
	register.checkInitialState(tabName)
});

When(/^preenche o formulário na aba "([^"]*)"$/, (tabName) => {
	register.checkInitialState(tabName)
});

When(/^preenche o formulário na aba "([^"]*)"$/, (tabName) => {
	register.checkInitialState(tabName)
});

When(/^pressiona o botão Enviar$/, () => {
	return true;
});

Then(/^devo visualizar a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

