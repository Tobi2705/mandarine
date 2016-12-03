/**
 * Created by Tobi on 03/12/2016.
 */
var Xray = require('x-ray');
var x = Xray();
x('http://www.eslcafe.com/joblist/', 'dd', [{
    title: 'strong a',
    link: 'strong a@href',
    description: x('a@href', {
        title: 'big',
        details: 'blockquote p'
    })
}])
    .paginate('.next_page@href')
    .limit(3)
    .write ('results.json');


//you have to start crawl.js to get new data ....node crawl.js