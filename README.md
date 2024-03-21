<div align="center">

[![Visit Dots](./header.png)](https://dots.dev)

# [Dots](https://dots.dev)<a id="dots"></a>

Scalable and Flexible Payouts Infrastructure

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`dots.apps.addAchAccount`](#dotsappsaddachaccount)
  * [`dots.apps.createNewApp`](#dotsappscreatenewapp)
  * [`dots.apps.depositFunds`](#dotsappsdepositfunds)
  * [`dots.apps.getAchAccount`](#dotsappsgetachaccount)
  * [`dots.apps.getById`](#dotsappsgetbyid)
  * [`dots.apps.getComplianceInfo`](#dotsappsgetcomplianceinfo)
  * [`dots.apps.listAll`](#dotsappslistall)
  * [`dots.apps.updateComplianceInfo`](#dotsappsupdatecomplianceinfo)
  * [`dots.apps.withdrawFunds`](#dotsappswithdrawfunds)
  * [`dots.checkoutSessions.createSession`](#dotscheckoutsessionscreatesession)
  * [`dots.checkoutSessions.getById`](#dotscheckoutsessionsgetbyid)
  * [`dots.checkoutSessions.listAll`](#dotscheckoutsessionslistall)
  * [`dots.disputes.addEvidenceFile`](#dotsdisputesaddevidencefile)
  * [`dots.disputes.getAll`](#dotsdisputesgetall)
  * [`dots.disputes.getById`](#dotsdisputesgetbyid)
  * [`dots.disputes.submitDispute`](#dotsdisputessubmitdispute)
  * [`dots.flows.createNewFlow`](#dotsflowscreatenewflow)
  * [`dots.flows.getById`](#dotsflowsgetbyid)
  * [`dots.flows.listAll`](#dotsflowslistall)
  * [`dots.paymentCustomers.createCustomer`](#dotspaymentcustomerscreatecustomer)
  * [`dots.paymentCustomers.getById`](#dotspaymentcustomersgetbyid)
  * [`dots.paymentCustomers.listAll`](#dotspaymentcustomerslistall)
  * [`dots.paymentIntents.confirmIntent`](#dotspaymentintentsconfirmintent)
  * [`dots.paymentIntents.createIntent`](#dotspaymentintentscreateintent)
  * [`dots.paymentIntents.getById`](#dotspaymentintentsgetbyid)
  * [`dots.paymentIntents.listAll`](#dotspaymentintentslistall)
  * [`dots.paymentMethods.attachPaymentMethod`](#dotspaymentmethodsattachpaymentmethod)
  * [`dots.paymentMethods.detachPaymentMethod`](#dotspaymentmethodsdetachpaymentmethod)
  * [`dots.paymentMethods.getById`](#dotspaymentmethodsgetbyid)
  * [`dots.paymentMethods.listAllPaymentCustomer`](#dotspaymentmethodslistallpaymentcustomer)
  * [`dots.payments.createTransaction`](#dotspaymentscreatetransaction)
  * [`dots.payoutLinks.cancelLink`](#dotspayoutlinkscancellink)
  * [`dots.payoutLinks.createPayoutLink`](#dotspayoutlinkscreatepayoutlink)
  * [`dots.payoutLinks.getPayoutLink`](#dotspayoutlinksgetpayoutlink)
  * [`dots.payoutLinks.listAll`](#dotspayoutlinkslistall)
  * [`dots.payoutRequests.getAllPayouts`](#dotspayoutrequestsgetallpayouts)
  * [`dots.payoutRequests.getPayoutById`](#dotspayoutrequestsgetpayoutbyid)
  * [`dots.payoutRequests.submitRequest`](#dotspayoutrequestssubmitrequest)
  * [`dots.payouts.createPayout`](#dotspayoutscreatepayout)
  * [`dots.payouts.sendPayout`](#dotspayoutssendpayout)
  * [`dots.refunds.createRefund`](#dotsrefundscreaterefund)
  * [`dots.refunds.getAll`](#dotsrefundsgetall)
  * [`dots.refunds.getById`](#dotsrefundsgetbyid)
  * [`dots.transactions.getById`](#dotstransactionsgetbyid)
  * [`dots.transactions.listAll`](#dotstransactionslistall)
  * [`dots.transferBatches.createBatch`](#dotstransferbatchescreatebatch)
  * [`dots.transferBatches.getById`](#dotstransferbatchesgetbyid)
  * [`dots.transferBatches.listAll`](#dotstransferbatcheslistall)
  * [`dots.transfers.createOrganizationTransfer`](#dotstransferscreateorganizationtransfer)
  * [`dots.transfers.createTransfer`](#dotstransferscreatetransfer)
  * [`dots.transfers.getAll`](#dotstransfersgetall)
  * [`dots.transfers.getById`](#dotstransfersgetbyid)
  * [`dots.transfers.getById_0`](#dotstransfersgetbyid_0)
  * [`dots.transfers.listAll`](#dotstransferslistall)
  * [`dots.users.addPayoutMethod`](#dotsusersaddpayoutmethod)
  * [`dots.users.createNewUser`](#dotsuserscreatenewuser)
  * [`dots.users.getUserById`](#dotsusersgetuserbyid)
  * [`dots.users.listAllUsers`](#dotsuserslistallusers)
  * [`dots.users.listPayoutMethods`](#dotsuserslistpayoutmethods)
  * [`dots.users.removeUser`](#dotsusersremoveuser)
  * [`dots.users.sendVerificationToken`](#dotsuserssendverificationtoken)
  * [`dots.users.submitComplianceInfo`](#dotsuserssubmitcomplianceinfo)
  * [`dots.users.updateUserObject`](#dotsusersupdateuserobject)
  * [`dots.users.verifyUserToken`](#dotsusersverifyusertoken)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Dots&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Dots } from "dots-typescript-sdk";

const dots = new Dots({
  // Defining the base path is optional and defaults to https://api.dots.dev/api
  // basePath: "https://api.dots.dev/api",
});

const addAchAccountResponse = await dots.apps.addAchAccount({
  account_number: "4807288800152",
  routing_number: "048072888",
  account_type: "checking",
});

console.log(addAchAccountResponse);
```

## Reference<a id="reference"></a>


### `dots.apps.addAchAccount`<a id="dotsappsaddachaccount"></a>

Add an ACH account to an app. The account's owner must match the compliance information submitted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAchAccountResponse = await dots.apps.addAchAccount({
  account_number: "4807288800152",
  routing_number: "048072888",
  account_type: "checking",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account_number: `string`<a id="account_number-string"></a>

The bank account number.

##### routing_number: `string`<a id="routing_number-string"></a>

The bank\\\'s ABA routing number.

##### account_type: `string`<a id="account_type-string"></a>

The type of bank account.

##### appId: `string`<a id="appid-string"></a>

The ID of the app.

#### 🔄 Return<a id="🔄-return"></a>

[AppsAddAchAccountResponse](./models/apps-add-ach-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/ach-account` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.createNewApp`<a id="dotsappscreatenewapp"></a>

Create an app in your organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAppResponse = await dots.apps.createNewApp({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the application.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[App](./models/app.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.depositFunds`<a id="dotsappsdepositfunds"></a>

Deposit funds into App wallet by endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const depositFundsResponse = await dots.apps.depositFunds({
  amount: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount to deposit in cents.

##### appId: `string`<a id="appid-string"></a>

The ID of the App.

##### idempotency_key: `string`<a id="idempotency_key-string"></a>

Idempotency key in UUID format.

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/deposit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.getAchAccount`<a id="dotsappsgetachaccount"></a>

Get the App's ach account information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAchAccountResponse = await dots.apps.getAchAccount({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appId: `string`<a id="appid-string"></a>

The ID of the app.

#### 🔄 Return<a id="🔄-return"></a>

[AppsGetAchAccountResponse](./models/apps-get-ach-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/ach-account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.getById`<a id="dotsappsgetbyid"></a>

Retrieve an app in your organization by its ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.apps.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appId: `string`<a id="appid-string"></a>

ID of the app to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[App](./models/app.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.getComplianceInfo`<a id="dotsappsgetcomplianceinfo"></a>

Retrieve the compliance information for an app in your organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getComplianceInfoResponse = await dots.apps.getComplianceInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appId: `string`<a id="appid-string"></a>

ID of the app to query or modify

#### 🔄 Return<a id="🔄-return"></a>

[BusinessComplianceInfo](./models/business-compliance-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/compliance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.listAll`<a id="dotsappslistall"></a>

List all apps created by your organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.apps.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Maximum number of results to retrieve

##### startingAfter: `string`<a id="startingafter-string"></a>

ID of first app to retrieve

##### endingBefore: `string`<a id="endingbefore-string"></a>

ID of last app to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[App](./models/app.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.updateComplianceInfo`<a id="dotsappsupdatecomplianceinfo"></a>

Add or update compliance information for an app in your organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateComplianceInfoResponse = await dots.apps.updateComplianceInfo({
  company_info: {
    ein: "048072888",
    incorporation_date: "1970-01-01",
    incorporation_state: "incorporation_state_example",
    incorporation_type: "sole_proprietorship",
    name: "name_example",
    website: "website_example",
  },
  contact_info: {
    city: "city_example",
    country: "country_example",
    email: "email_example",
    line1: "line1_example",
    phone_number: "phone_number_example",
    state: "state_example",
    zip: "zip_example",
  },
  directors: [
    {
      title: "title_example",
      address: {
        city: "city_example",
        country: "country_example",
        line1: "line1_example",
        zip: "zip_example",
      },
      dob: "1970-01-01",
      email: "email_example",
      first_name: "first_name_example",
      last_name: "last_name_example",
      ownership_percentage: 3.14,
      phone: "phone_example",
    },
  ],
  flow_of_funds: {
    reasons:
      "Payments are processed via credit card, deposited to Dots, and paid to sellers.",
    usage: "We are a market place for teddy bears.",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### company_info: [`BusinessComplianceInfoCompanyInfo`](./models/business-compliance-info-company-info.ts)<a id="company_info-businesscomplianceinfocompanyinfomodelsbusiness-compliance-info-company-infots"></a>

##### contact_info: [`BusinessComplianceInfoContactInfo`](./models/business-compliance-info-contact-info.ts)<a id="contact_info-businesscomplianceinfocontactinfomodelsbusiness-compliance-info-contact-infots"></a>

##### directors: [`BusinessComplianceInfoDirectorsInner`](./models/business-compliance-info-directors-inner.ts)[]<a id="directors-businesscomplianceinfodirectorsinnermodelsbusiness-compliance-info-directors-innerts"></a>

##### flow_of_funds: [`BusinessComplianceInfoFlowOfFunds`](./models/business-compliance-info-flow-of-funds.ts)<a id="flow_of_funds-businesscomplianceinfoflowoffundsmodelsbusiness-compliance-info-flow-of-fundsts"></a>

##### appId: `string`<a id="appid-string"></a>

ID of the app to query or modify

#### 🔄 Return<a id="🔄-return"></a>

[BusinessComplianceInfo](./models/business-compliance-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/compliance` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.apps.withdrawFunds`<a id="dotsappswithdrawfunds"></a>

Withdraw funds from app wallet into app bank account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const withdrawFundsResponse = await dots.apps.withdrawFunds({
  amount: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount to deposit in cents.

##### appId: `string`<a id="appid-string"></a>

The ID of the App.

##### idempotency_key: `string`<a id="idempotency_key-string"></a>

Idempotency key in UUID format.

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/apps/{app_id}/withdraw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.checkoutSessions.createSession`<a id="dotscheckoutsessionscreatesession"></a>

Create a checkout session

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionResponse = await dots.checkoutSessions.createSession({
  line_items: [
    {
      price_data: {
        currency: "usd",
        amount: 1,
        product_data: {
          name: "name_example",
        },
      },
      quantity: 1,
    },
  ],
  success_url: "success_url_example",
  mode: "payment",
  expires_in: 10800,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### line_items: [`CheckoutsessionsCreateSessionRequestLineItemsInner`](./models/checkoutsessions-create-session-request-line-items-inner.ts)[]<a id="line_items-checkoutsessionscreatesessionrequestlineitemsinnermodelscheckoutsessions-create-session-request-line-items-innerts"></a>

##### success_url: `string`<a id="success_url-string"></a>

##### mode: `string`<a id="mode-string"></a>

##### customer_email: `string`<a id="customer_email-string"></a>

##### client_reference_id: `string`<a id="client_reference_id-string"></a>

##### cancel_url: `string`<a id="cancel_url-string"></a>

##### user_id: `string`<a id="user_id-string"></a>

Supply a Dots user ID in place of a customer ID

##### customer_id: `string`<a id="customer_id-string"></a>

##### expires_in: `number`<a id="expires_in-number"></a>

##### metadata: `object`<a id="metadata-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutSession](./models/checkout-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout-sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.checkoutSessions.getById`<a id="dotscheckoutsessionsgetbyid"></a>

Retrieve a checkout session by an ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.checkoutSessions.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### checkoutSessionId: `string`<a id="checkoutsessionid-string"></a>

ID of the checkout session to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutSession](./models/checkout-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout-sessions/{checkout_session_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.checkoutSessions.listAll`<a id="dotscheckoutsessionslistall"></a>

List all checkout sessions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.checkoutSessions.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutsessionsListAllResponse](./models/checkoutsessions-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout-sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.disputes.addEvidenceFile`<a id="dotsdisputesaddevidencefile"></a>

Add an evidence file to the dispute

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEvidenceFileResponse = await dots.disputes.addEvidenceFile({
  type: "customer_communications",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### disputeId: `string`<a id="disputeid-string"></a>

ID of the dispute to add evidence to

##### type: `string`<a id="type-string"></a>

##### content: `string`<a id="content-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/disputes/{dispute_id}/evidence` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.disputes.getAll`<a id="dotsdisputesgetall"></a>

List all disputes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await dots.disputes.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[DisputesGetAllResponse](./models/disputes-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/disputes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.disputes.getById`<a id="dotsdisputesgetbyid"></a>

Retreieve a dispute by its ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.disputes.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### disputeId: `string`<a id="disputeid-string"></a>

ID of the dispute to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[Dispute](./models/dispute.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/disputes/{dispute_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.disputes.submitDispute`<a id="dotsdisputessubmitdispute"></a>

Submit a dispute

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitDisputeResponse = await dots.disputes.submitDispute({
  description: "description_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

##### disputeId: `string`<a id="disputeid-string"></a>

ID of the dispute to submit

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/disputes/{dispute_id}/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.flows.createNewFlow`<a id="dotsflowscreatenewflow"></a>

Create a new Flow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFlowResponse = await dots.flows.createNewFlow({
  steps: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### steps: [`FlowsCreateNewFlowRequestStepsInner`](./models/flows-create-new-flow-request-steps-inner.ts)[]<a id="steps-flowscreatenewflowrequeststepsinnermodelsflows-create-new-flow-request-steps-innerts"></a>

A list of steps. Can either be a string or an object with additional properties. Example: A `redirect` step looks like {\\\"name\\\": \\\"redirect\\\", \\\"redirect_url\\\": \\\"https://example.com\\\"}

##### user_id: `string`<a id="user_id-string"></a>

The user\\\'s id.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[Flow](./models/flow.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/flows` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.flows.getById`<a id="dotsflowsgetbyid"></a>

Get a Flow by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.flows.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### flowId: `string`<a id="flowid-string"></a>

Id of the flow to fetch

#### 🔄 Return<a id="🔄-return"></a>

[Flow](./models/flow.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/flows/{flow_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.flows.listAll`<a id="dotsflowslistall"></a>

List all Flows.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.flows.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[FlowsListAllResponse](./models/flows-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/flows` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentCustomers.createCustomer`<a id="dotspaymentcustomerscreatecustomer"></a>

Create a Payment Customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomerResponse = await dots.paymentCustomers.createCustomer({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### user_id: `string`<a id="user_id-string"></a>

##### email: `string`<a id="email-string"></a>

##### country_code: `string`<a id="country_code-string"></a>

##### phone_number: `string`<a id="phone_number-string"></a>

##### first_name: `string`<a id="first_name-string"></a>

##### middle_name: `string`<a id="middle_name-string"></a>

##### last_name: `string`<a id="last_name-string"></a>

##### metadata: `object`<a id="metadata-object"></a>

##### created: `string`<a id="created-string"></a>

##### updated: `string`<a id="updated-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentcustomersCreateCustomerResponse](./models/paymentcustomers-create-customer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-customers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentCustomers.getById`<a id="dotspaymentcustomersgetbyid"></a>

Get a payment customer by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.paymentCustomers.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentCustomerId: `string`<a id="paymentcustomerid-string"></a>

The ID of the payment customer

#### 🔄 Return<a id="🔄-return"></a>

[PaymentCustomer](./models/payment-customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-customers/{payment_customer_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentCustomers.listAll`<a id="dotspaymentcustomerslistall"></a>

List all payment customers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.paymentCustomers.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentcustomersListAllResponse](./models/paymentcustomers-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentIntents.confirmIntent`<a id="dotspaymentintentsconfirmintent"></a>

Confirm a payment intent that has not been confirmed yet.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const confirmIntentResponse = await dots.paymentIntents.confirmIntent({
  payment_method_id: "payment_method_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payment_method_id: `string`<a id="payment_method_id-string"></a>

ID of the payment method to confirm the intent with.

##### paymentIntentId: `string`<a id="paymentintentid-string"></a>

The ID if the Payment Intent to confirm.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentIntent](./models/payment-intent.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-intents/{payment_intent_id}/confirm` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentIntents.createIntent`<a id="dotspaymentintentscreateintent"></a>

Create a Payment Intent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIntentResponse = await dots.paymentIntents.createIntent({
  amount: 1,
  currency: "usd",
  confirm: false,
  setup_future_usage: "on_session",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount in cents

##### currency: `string`<a id="currency-string"></a>

Currency of the payment. Currently only `usd` is supported.

##### description: `string`<a id="description-string"></a>

An arbitrary string attached to the object. Often useful for displaying to users.

##### confirm: `boolean`<a id="confirm-boolean"></a>

Set to `true` to attempt to confirm this payment intent immediately. Defaults to `false`.

##### user_id: `string`<a id="user_id-string"></a>

ID of a Dots `user` making this payment.

##### customer_id: `string`<a id="customer_id-string"></a>

ID of a Dots `payment_customer` making this payment.

##### payment_method_id: `string`<a id="payment_method_id-string"></a>

ID of the payment method to attach to this payment intent.

##### payment_method_types: `string`[]<a id="payment_method_types-string"></a>

Currently only `card` is supported.

##### setup_future_usage: `string`<a id="setup_future_usage-string"></a>

##### metadata: `boolean`<a id="metadata-boolean"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

##### transfer_data: [`PaymentintentsCreateIntentRequestTransferData`](./models/paymentintents-create-intent-request-transfer-data.ts)<a id="transfer_data-paymentintentscreateintentrequesttransferdatamodelspaymentintents-create-intent-request-transfer-datats"></a>

##### application_fee_amount: `number`<a id="application_fee_amount-number"></a>

Amount in cents to transfer to the application\\\'s wallet as a platform fee.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentIntent](./models/payment-intent.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-intents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentIntents.getById`<a id="dotspaymentintentsgetbyid"></a>

Retrieve a payment intent by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.paymentIntents.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentIntentId: `string`<a id="paymentintentid-string"></a>

Payment Intent ID

#### 🔄 Return<a id="🔄-return"></a>

[PaymentIntent](./models/payment-intent.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-intents/{payment_intent_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentIntents.listAll`<a id="dotspaymentintentslistall"></a>

Get all payment intents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.paymentIntents.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[PaymentIntent](./models/payment-intent.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-intents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentMethods.attachPaymentMethod`<a id="dotspaymentmethodsattachpaymentmethod"></a>

Attach a payment method to a payment customer for future usage.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const attachPaymentMethodResponse =
  await dots.paymentMethods.attachPaymentMethod({
    customer_id: "customer_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_id: `string`<a id="customer_id-string"></a>

ID of the payment customer

##### paymentMethodId: `string`<a id="paymentmethodid-string"></a>

The ID of the payment method.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-methods/{payment_method_id}/attach` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentMethods.detachPaymentMethod`<a id="dotspaymentmethodsdetachpaymentmethod"></a>

Detach a payment method from a payment customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detachPaymentMethodResponse =
  await dots.paymentMethods.detachPaymentMethod({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentMethodId: `string`<a id="paymentmethodid-string"></a>

ID of the payment method.

##### customer_id: `string`<a id="customer_id-string"></a>

ID of the payment customer to detach the payment method from.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-methods/{payment_method_id}/detach` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentMethods.getById`<a id="dotspaymentmethodsgetbyid"></a>

Get a payment method by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.paymentMethods.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentMethodId: `string`<a id="paymentmethodid-string"></a>

ID of the payment method to get

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-methods/{payment_method_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.paymentMethods.listAllPaymentCustomer`<a id="dotspaymentmethodslistallpaymentcustomer"></a>

Get the payment methods for a payment customer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllPaymentCustomerResponse =
  await dots.paymentMethods.listAllPaymentCustomer({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

Payment Customer ID

##### limit: `number`<a id="limit-number"></a>

Number or payment methods to return

#### 🔄 Return<a id="🔄-return"></a>

[PaymentmethodsListAllPaymentCustomerResponse](./models/paymentmethods-list-all-payment-customer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payment-methods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payments.createTransaction`<a id="dotspaymentscreatetransaction"></a>

Creates a transaction from a user or a payment customer to the app. User the `/users/{user_id}/payout-methods` route to get a user's stored payment methods.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTransactionResponse = await dots.payments.createTransaction({
  amount: 1,
  platform: "ach",
});
```

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutLinks.cancelLink`<a id="dotspayoutlinkscancellink"></a>

Cancel a payout link

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelLinkResponse = await dots.payoutLinks.cancelLink({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payoutLinkId: `string`<a id="payoutlinkid-string"></a>

Id of the payout link

#### 🔄 Return<a id="🔄-return"></a>

[PayoutLink](./models/payout-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-links/{payout_link_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutLinks.createPayoutLink`<a id="dotspayoutlinkscreatepayoutlink"></a>

Create a Payout Link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPayoutLinkResponse = await dots.payoutLinks.createPayoutLink({
  amount: 1,
  force_collect_compliance_information: false,
  payout_fee_party: "user",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount to be paid in cents.

##### user_id: `string`<a id="user_id-string"></a>

The user\\\'s id.

##### payee: [`PayoutlinksCreatePayoutLinkRequestPayee`](./models/payoutlinks-create-payout-link-request-payee.ts)<a id="payee-payoutlinkscreatepayoutlinkrequestpayeemodelspayoutlinks-create-payout-link-request-payeets"></a>

##### delivery: [`PayoutlinksCreatePayoutLinkRequestDelivery`](./models/payoutlinks-create-payout-link-request-delivery.ts)<a id="delivery-payoutlinkscreatepayoutlinkrequestdeliverymodelspayoutlinks-create-payout-link-request-deliveryts"></a>

##### force_collect_compliance_information: `boolean`<a id="force_collect_compliance_information-boolean"></a>

Force the collection of 1099 or W-8 information. Defaults to `false`.

##### tax_exempt: `boolean`<a id="tax_exempt-boolean"></a>

Payout links marked as `tax_exempt` will not be counted towards the 1099 threshold.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

##### memo: `string`<a id="memo-string"></a>

Add a memo to the top of the Payout Link

##### idempotency_key: `any`<a id="idempotency_key-any"></a>

Unique UUID key that prevents duplicate requests from being processed. If a payout link with the idempotency key exists, a new link will not be created and the existing link will be returned instead.

##### payout_fee_party: `string`<a id="payout_fee_party-string"></a>

Overrides the setting for which party will pay fees on this payout. This takes precedence over the default for your application.

##### additional_steps: `string`[]<a id="additional_steps-string"></a>

Array of steps in the flow.

#### 🔄 Return<a id="🔄-return"></a>

[PayoutLink](./models/payout-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-links` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutLinks.getPayoutLink`<a id="dotspayoutlinksgetpayoutlink"></a>

Get a payout link by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayoutLinkResponse = await dots.payoutLinks.getPayoutLink({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payoutLinkId: `string`<a id="payoutlinkid-string"></a>

Id of the payout link

#### 🔄 Return<a id="🔄-return"></a>

[PayoutLink](./models/payout-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-links/{payout_link_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutLinks.listAll`<a id="dotspayoutlinkslistall"></a>

List all created Payout Links.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.payoutLinks.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[PayoutlinksListAllResponse](./models/payoutlinks-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-links` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutRequests.getAllPayouts`<a id="dotspayoutrequestsgetallpayouts"></a>

List all payout requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPayoutsResponse = await dots.payoutRequests.getAllPayouts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[PayoutrequestsGetAllPayoutsResponse](./models/payoutrequests-get-all-payouts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutRequests.getPayoutById`<a id="dotspayoutrequestsgetpayoutbyid"></a>

Get a payout request by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayoutByIdResponse = await dots.payoutRequests.getPayoutById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payoutRequestId: `string`<a id="payoutrequestid-string"></a>

Id of the payout request

#### 🔄 Return<a id="🔄-return"></a>

[PayoutRequest](./models/payout-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-requests/{payout_request_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payoutRequests.submitRequest`<a id="dotspayoutrequestssubmitrequest"></a>

Submit a payout request from a person when you know their phone number or user id. Once the payout request is approved, they will be sent a Payout Link to onboard and recieve funds.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitRequestResponse = await dots.payoutRequests.submitRequest({
  amount: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount in cents to pay the user.

##### user_id: `string`<a id="user_id-string"></a>

The user\\\'s id. `user_id` or `payee` is required.

##### payee: [`PayoutsSendPayoutRequestPayee`](./models/payouts-send-payout-request-payee.ts)<a id="payee-payoutssendpayoutrequestpayeemodelspayouts-send-payout-request-payeets"></a>

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

##### memo: `string`<a id="memo-string"></a>

Add a memo to payout request

#### 🔄 Return<a id="🔄-return"></a>

[PayoutRequest](./models/payout-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payout-requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payouts.createPayout`<a id="dotspayoutscreatepayout"></a>

Create a payout for an existing user that has a payout method saved to their account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPayoutResponse = await dots.payouts.createPayout({
  user_id: "user_id_example",
  amount: 1,
  platform: "paypal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `string`<a id="user_id-string"></a>

ID of the `user` who you are creating the payout for.

##### amount: `number`<a id="amount-number"></a>

Amount in cents to payout the user.

##### platform: `string`<a id="platform-string"></a>

Platform that you are paying out the `user` through,

##### account_id: `string`<a id="account_id-string"></a>

The bank account ID you are paying to. Required for `ach` and `intl_bank`.

##### fund: `boolean`<a id="fund-boolean"></a>

Creates a transfer for the amount to the user before creating the payout. The funds are returned if the payout does not succeed.

##### idempotency_key: `string`<a id="idempotency_key-string"></a>

UUID that will be used to idempotently handle requests. Transfers with existing idempotency keys will be rejected.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payouts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.payouts.sendPayout`<a id="dotspayoutssendpayout"></a>

Send a payout to a person when you know their phone number or user id. If the user has a Dots acconut, the funds will delivered according to their saved prefernces. Otherwise, they will be sent a Payout Link to onboard and recieve funds.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendPayoutResponse = await dots.payouts.sendPayout({
  amount: 1,
  force_collect_compliance_information: false,
  payout_fee_party: "user",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount in cents to pay the user.

##### user_id: `string`<a id="user_id-string"></a>

The user\\\'s id. `user_id` or `payee` is required.

##### payee: [`PayoutsSendPayoutRequestPayee`](./models/payouts-send-payout-request-payee.ts)<a id="payee-payoutssendpayoutrequestpayeemodelspayouts-send-payout-request-payeets"></a>

##### delivery: [`PayoutsSendPayoutRequestDelivery`](./models/payouts-send-payout-request-delivery.ts)<a id="delivery-payoutssendpayoutrequestdeliverymodelspayouts-send-payout-request-deliveryts"></a>

##### force_collect_compliance_information: `boolean`<a id="force_collect_compliance_information-boolean"></a>

Collect 1099 or w8-ben information.

##### additional_steps: `string`[]<a id="additional_steps-string"></a>

Array of steps in the flow.

##### tax_exempt: `boolean`<a id="tax_exempt-boolean"></a>

Payouts marked as `tax_exempt` will not be counted towards the 1099 threshold.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

##### memo: `string`<a id="memo-string"></a>

Add a memo to the top of the Payout Link

##### idempotency_key: `any`<a id="idempotency_key-any"></a>

Unique UUID key that prevents duplicate requests from being processed. If a payout link with the idempotency key exists, a new link will not be created and the existing link will be returned instead.

##### payout_fee_party: `string`<a id="payout_fee_party-string"></a>

Overrides the setting for which party will pay fees on this payout. This takes precedence over the default for your application.

#### 🔄 Return<a id="🔄-return"></a>

[PayoutLink](./models/payout-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payouts/send-payout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.refunds.createRefund`<a id="dotsrefundscreaterefund"></a>

Create a Refund

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRefundResponse = await dots.refunds.createRefund({
  amount: 1,
  payment_intent_id: "payment_intent_id_example",
  reason: "duplicate",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount in cents

##### payment_intent_id: `string`<a id="payment_intent_id-string"></a>

ID of the `payment_intent` you are refunding.

##### reason: `string`<a id="reason-string"></a>

##### metadata: `boolean`<a id="metadata-boolean"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[Refund](./models/refund.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/refunds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.refunds.getAll`<a id="dotsrefundsgetall"></a>

List all refunds

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await dots.refunds.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[RefundsGetAllResponse](./models/refunds-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/refunds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.refunds.getById`<a id="dotsrefundsgetbyid"></a>

Retreieve a refund by its ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.refunds.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### refundId: `string`<a id="refundid-string"></a>

ID of the refund to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[Refund](./models/refund.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/refunds/{refund_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transactions.getById`<a id="dotstransactionsgetbyid"></a>

Get a transaction by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.transactions.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transactionId: `string`<a id="transactionid-string"></a>

Id of the transaction

#### 🔄 Return<a id="🔄-return"></a>

[Transaction](./models/transaction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transactions/{transaction_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transactions.listAll`<a id="dotstransactionslistall"></a>

List all transactions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.transactions.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsListAllResponse](./models/transactions-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transferBatches.createBatch`<a id="dotstransferbatchescreatebatch"></a>

Create a transfer batch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBatchResponse = await dots.transferBatches.createBatch({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`TransferbatchesCreateBatchRequestItemsInner`](./models/transferbatches-create-batch-request-items-inner.ts)[]<a id="items-transferbatchescreatebatchrequestitemsinnermodelstransferbatches-create-batch-request-items-innerts"></a>

##### idempotency_key: `string`<a id="idempotency_key-string"></a>

##### metadata: `object`<a id="metadata-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TransferbatchesCreateBatchResponse](./models/transferbatches-create-batch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfer-batches` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transferBatches.getById`<a id="dotstransferbatchesgetbyid"></a>

Get a transfer batch by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.transferBatches.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferBatchId: `string`<a id="transferbatchid-string"></a>

Id of the transfer batch to fetch

#### 🔄 Return<a id="🔄-return"></a>

[TransferbatchesGetByIdResponse](./models/transferbatches-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfer-batches/{transfer_batch_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transferBatches.listAll`<a id="dotstransferbatcheslistall"></a>

Get a transfer batch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.transferBatches.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[TransferbatchesListAllResponse](./models/transferbatches-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfer-batches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.createOrganizationTransfer`<a id="dotstransferscreateorganizationtransfer"></a>

Create a transfer for the organization's wallet to an api app.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrganizationTransferResponse =
  await dots.transfers.createOrganizationTransfer({
    amount: 1,
    api_app_id: "api_app_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount in cents to transfer. Negative amount transfers money from the `app` to the `user`.

##### api_app_id: `string`<a id="api_app_id-string"></a>

API App ID to transact with.

##### idempotency_key: `string`<a id="idempotency_key-string"></a>

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/organization-transfers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.createTransfer`<a id="dotstransferscreatetransfer"></a>

Create a transfer.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTransferResponse = await dots.transfers.createTransfer({
  amount: 1,
  user_id: "user_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount in cents to transfer. Negative amount transfers money from the `app` to the `user`.

##### user_id: `string`<a id="user_id-string"></a>

The user\\\'s id.

##### tax_exempt: `any`<a id="tax_exempt-any"></a>

Transfers marked as `tax_exempt` will not be counted towards the 1099 threshold.

##### idempotency_key: `any`<a id="idempotency_key-any"></a>

UUID that will be used to idempotently handle requests. Transfers with existing idempotency keys will be rejected.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.getAll`<a id="dotstransfersgetall"></a>

List all transfers to and from an Organization's wallet.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await dots.transfers.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

##### userId: `string`<a id="userid-string"></a>

Include only results with this user ID attached.

#### 🔄 Return<a id="🔄-return"></a>

[TransfersGetAllResponse](./models/transfers-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/organization-transfers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.getById`<a id="dotstransfersgetbyid"></a>

Get a transfer by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dots.transfers.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferId: `string`<a id="transferid-string"></a>

Id of the transfer to fetch

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfers/{transfer_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.getById_0`<a id="dotstransfersgetbyid_0"></a>

Get a transfer by its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getById_0Response = await dots.transfers.getById_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transferId: `string`<a id="transferid-string"></a>

ID of the transfer to retrieve

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/organization-transfers/{transfer_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.transfers.listAll`<a id="dotstransferslistall"></a>

List all transfers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await dots.transfers.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

##### userId: `string`<a id="userid-string"></a>

Include only results with this user ID attached.

#### 🔄 Return<a id="🔄-return"></a>

[TransfersListAllResponse](./models/transfers-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/transfers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.addPayoutMethod`<a id="dotsusersaddpayoutmethod"></a>

Add a payout method to the user. Payout method can be one of `paypal`, `venmo`, `ach`, or `cash_app`. Each method has different required parameters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPayoutMethodResponse = await dots.users.addPayoutMethod({
  platform: "paypal",
  account_type: "checking",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### platform: `string`<a id="platform-string"></a>

Payout platform to add.

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

##### routing_number: `string`<a id="routing_number-string"></a>

Bank account or Cash App routing number. Required if `platform` = `ach` or `cash_app`.

##### account_number: `string`<a id="account_number-string"></a>

Bank account or Cash App account number. Required if `platform` = `ach` or `cash_app`.

##### account_type: `string`<a id="account_type-string"></a>

Bank account type. Required if `platform` = `ach`.

##### email: `string`<a id="email-string"></a>

PayPal email address. Required if `platform` = `paypal`.

##### phone_number: `string`<a id="phone_number-string"></a>

Venmo phone number. One of `phone_number` or `handle` is required if `platform` = `venmo`.

##### handle: `string`<a id="handle-string"></a>

Venmo handle. One of `phone_number` or `handle` is required if `platform` = `venmo`.

##### cash_tag: `string`<a id="cash_tag-string"></a>

Cash App Cash Tag. Required if `platform` = `cash_app`.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}/payout-methods` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.createNewUser`<a id="dotsuserscreatenewuser"></a>

Create a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await dots.users.createNewUser({
  first_name: "first_name_example",
  last_name: "last_name_example",
  email: "email_example",
  country_code: "country_code_example",
  phone_number: "phone_number_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### first_name: `string`<a id="first_name-string"></a>

The user\\\'s first name.

##### last_name: `string`<a id="last_name-string"></a>

The user\\\'s last name.

##### email: `string`<a id="email-string"></a>

The user\\\'s email address.

##### country_code: `string`<a id="country_code-string"></a>

The user\\\'s phone number country code. e.g. \\\"1\\\"

##### phone_number: `string`<a id="phone_number-string"></a>

The user\\\'s phone number. e.g. \\\"4157223331\\\".

##### username: `string`<a id="username-string"></a>

Username to assign the user.

##### metadata: `any`<a id="metadata-any"></a>

Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.getUserById`<a id="dotsusersgetuserbyid"></a>

Get a user by their id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await dots.users.getUserById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.listAllUsers`<a id="dotsuserslistallusers"></a>

List all users connected to your application.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllUsersResponse = await dots.users.listAllUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.

##### limit: `number`<a id="limit-number"></a>

A limit on the number of objects to be returned, between 1 and 100.

##### endingBefore: `string`<a id="endingbefore-string"></a>

A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.

#### 🔄 Return<a id="🔄-return"></a>

[UsersListAllUsersResponse](./models/users-list-all-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.listPayoutMethods`<a id="dotsuserslistpayoutmethods"></a>

Get a user's connected payout methods.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPayoutMethodsResponse = await dots.users.listPayoutMethods({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}/payout-methods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.removeUser`<a id="dotsusersremoveuser"></a>

Delete a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserResponse = await dots.users.removeUser({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.sendVerificationToken`<a id="dotsuserssendverificationtoken"></a>

Send a user a verification token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendVerificationTokenResponse = await dots.users.sendVerificationToken({
  use_voice: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

##### use_voice: `boolean`<a id="use_voice-boolean"></a>

Defaults to `false` which sends token via SMS. Set `true` to receive via call instead.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}/send-verification-token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.submitComplianceInfo`<a id="dotsuserssubmitcomplianceinfo"></a>

Add Compliance information to a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitComplianceInfoResponse = await dots.users.submitComplianceInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

##### w9: [`UsersSubmitComplianceInfoRequestW9`](./models/users-submit-compliance-info-request-w9.ts)<a id="w9-userssubmitcomplianceinforequestw9modelsusers-submit-compliance-info-request-w9ts"></a>

##### w8ben: [`UsersSubmitComplianceInfoRequestW8ben`](./models/users-submit-compliance-info-request-w8ben.ts)<a id="w8ben-userssubmitcomplianceinforequestw8benmodelsusers-submit-compliance-info-request-w8bents"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}/compliance` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.updateUserObject`<a id="dotsusersupdateuserobject"></a>

Update mutable fields of a user object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserObjectResponse = await dots.users.updateUserObject({
  default_payout_method: "paypal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

##### default_payout_method: `string`<a id="default_payout_method-string"></a>

Configures the user\\\'s default payout method. Must be a payout method already configured by the user.

##### auto_payout_enabled: `boolean`<a id="auto_payout_enabled-boolean"></a>

Enables auto payout for the user whenever a default payout method is defined

##### metadata: `any`<a id="metadata-any"></a>

Arbitrary metadata

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dots.users.verifyUserToken`<a id="dotsusersverifyusertoken"></a>

Verify a user with a token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyUserTokenResponse = await dots.users.verifyUserToken({
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

The token sent to the user.

##### userId: `string`<a id="userid-string"></a>

Id of the user to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/users/{user_id}/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
