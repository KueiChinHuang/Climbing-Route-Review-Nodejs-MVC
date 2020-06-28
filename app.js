console.clear();
/*
  Step 1: Create a new express app
*/
const express = require('express');
const app = express();

/*
  Step 2: Setup Mongoose (using environment variables)
*/


/*
  Step 3: Setup and configure Passport
*/


/*
  Step 4: Setup the asset pipeline, path, the static paths,
  the views directory, and the view engine
*/


/*
  Step 5: Setup the body parser
*/


/*
  Step 6: Setup our flash helper, default locals, and local helpers (like formData and authorized)
*/


/*
  Step 7: Register our route composer
*/
app.get('/', (req, res) => {
  res.send('HIIII');
});

/*
  Step 8: Start the server
*/
app.listen('3000');