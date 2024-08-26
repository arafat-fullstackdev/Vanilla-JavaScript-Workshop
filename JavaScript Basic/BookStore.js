function Book(title,author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.describe = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    };


}

//example usages
const book_one = new Book('The Great Gatsby', 'F. Scoot Fitzgerald', 185);
console.log(book_one.describe());