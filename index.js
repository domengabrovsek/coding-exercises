const axios = require('axios');

const getLength = (res) => res && Object.keys(res.data.result).length;

(async () => {

  const url = 'https://api.kraken.com/0/public/AssetPairs';

  // callback
  // wont work because axios doesnt work with callback anymore, so just an example how it would work
  let result1;
  axios({ method: 'get', url: url }, (res) => { result1 = res; });

  // promises (then/catch)
  let result2;
  axios({ method: 'get', url: url })
    .then(res => { result2 = res; })
    .catch(err => console.log(err));

  // async/await
  const result3 = await axios({ method: 'get', url: url });

  // log all 3 responses
  console.log(`Fetched ${getLength(result1)} records. - callback`);
  console.log(`Fetched ${getLength(result2)} records. - promise`);
  console.log(`Fetched ${getLength(result3)} records. - async/await`);

})();

