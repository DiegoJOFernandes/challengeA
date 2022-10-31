import assertFieldsForm from '../../support/pages/insuranceForm/assertFieldsForm/index'
import vehicleDataTab from '../../support/pages/insuranceForm/vehicleDataTab/index'
import insurantDataTab from '../../support/pages/insuranceForm/insurantDataTab/index'
import productDataTab from '../../support/pages/insuranceForm/productDataTab/index'
import priceOptionTab from '../../support/pages/insuranceForm/priceOptionTab/index'
import sendQuoteTab from '../../support/pages/insuranceForm/sendQuoteTab/index'

Given(/^user accesses the insurance claim form$/, () => {
  vehicleDataTab.visitPage()
  vehicleDataTab.assertVisitPage()
})

When(/^fill the form in the 'Enter Vehicle Data' tab and press next$/, () => {
  assertFieldsForm.checkInitialState('Enter Vehicle Data')
  vehicleDataTab.fillVehicleData()
  assertFieldsForm.checkCountFields('Enter Vehicle Data')
  vehicleDataTab.clickNextEnterInsurantData()
})

When(/^fill the form in the 'Enter Insurant Data' tab and press next$/, () => {
  assertFieldsForm.checkInitialState('Enter Insurant Data')
  insurantDataTab.fillInsurantData()
  assertFieldsForm.checkCountFields('Enter Insurant Data')
  insurantDataTab.clickNextEnterProductData()
})

When(/^fill the form in the 'Enter Product Data' tab and press next$/, () => {
  assertFieldsForm.checkInitialState('Enter Product Data')
  productDataTab.fillProductData()
  assertFieldsForm.checkCountFields('Enter Product Data')
  productDataTab.clickNextSelectPriceOption()
})

When(/^'Select Price Option' and press next$/, () => {
  assertFieldsForm.checkInitialState('Select Price Option')
  priceOptionTab.selectPriceOption()
  assertFieldsForm.checkCountFields('Select Price Option')
  priceOptionTab.clickNextSendQuote()
})

When(/^fill the form in the 'Send Quote' tab$/, () => {
  assertFieldsForm.checkInitialState('Send Quote')
  sendQuoteTab.fillQuoteData()
  assertFieldsForm.checkCountFields('Send Quote')
})

When(/^pressing the Submit button$/, () => {
  sendQuoteTab.clickSendQuote()
})

Then(/^check the message 'Sending e-mail success!'$/, () => {
  sendQuoteTab.assertEmailSentSuccessfully()
})
