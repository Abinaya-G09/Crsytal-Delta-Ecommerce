const accountDetails = [{
  'account_number': '01234567890',
  'account_holder_name': 'ABC',
  'account_type': 'saving|current|credit',
  'branch': 'XYZ',
  'ifsc_code': 'ABC00000CDI',
  'credit_cards_linked': 'yes|no',
  'linked_cards': [
    {
      'card_no': '5432-1234-6789-0987',
      'name': 'ABC',
      'type': 'Master|Visa'
    },
  ],
  'transactions': [
    {
      'date': '2020-12-19',
      'type': 'credit|debit',
      'to_account_number': '09876543210',
      'to_account_holder_name': 'DEF',
      'status': 'success|failure'
    },
  ]
}];
export default accountDetails;
