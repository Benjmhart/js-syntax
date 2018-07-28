const domain = 'facebook.com';
const querystring = 'search=';
const term = 'puppers';
const url = 'http://' + domain + '/?' + querystring + term;

const betterURL = `http://${domain}/?${querystring}${term}`;
