const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://igortosic.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://igortosic.herokuapp.com',
  'process.env.CLIENT_ID': 'xuHMIJlU66cPNBfPmyOMkuziyCBXmAB9'
}