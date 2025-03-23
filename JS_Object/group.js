let languages = [
    {title: 'JavaScript', type: 'script'},
    {title: 'Java', type: 'normal'},
    {title: 'Python', type: 'script'},
    {title: 'C', type: 'OPP'},
    {title: 'C++', type: 'OPP'},
    {title: 'C#', type: 'OPP'},
]

console.log(languages);

//**Make  Group
//? Way 1

// scriptLanguage = languages.reduce((res,language) =>{
//     const type = language.type;
//     if(!res[type]){
//         res[type] = [];
//     }
//     res[type].push(language);
//     return res;
// }, {});
// console.log(scriptLanguage); 

//?? Way 2
scriptLanguage = Object.groupBy(languages, (lang) => lang.type);
console.log(scriptLanguage);
