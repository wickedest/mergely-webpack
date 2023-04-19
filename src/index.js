require('mergely/lib/mergely.js');
require('mergely/lib/mergely.css');


const doc = new Mergely('#mergely', {
    lhs: (setValue) => setValue('apples'),
    rhs: (setValue) => setValue('bananas')
});

// On init, scroll to first diff
doc.once('updated', () => {
    doc.scrollToDiff('next');
});
