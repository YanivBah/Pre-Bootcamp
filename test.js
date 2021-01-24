(function () {
    'use strict';

    var figlet = require('figlet');
    figlet('Hello World!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        call();
    });

    function call() {
      console.log(`test`);
    }

    

})();