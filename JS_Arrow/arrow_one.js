//ES6 fat arrow function
var javascript = {
    name: 'javaScript',
    libraries: ['Angular',  'React', 'Vue' ],
    printLibraries: function() {
        this.libraries.forEach(function (a) {
            console.log(`${this.name} like ${a}`);
        });
    },

};

javascript.printLibraries();
