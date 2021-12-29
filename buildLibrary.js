class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []; 
    }
   get title() {
       return this._title;
   }
   get isCheckedOut() {
       return this._isCheckedOut;
   }
   get ratings() {
       return this._ratings;
   }
   set isCheckedOut(value) {
    this._isCheckedOut = value;
   }
   toggleCheckOutStatus() {
       this._isCheckedOut = !this.isCheckedOut
   }
   getAverageRating() {
       let ratingsSum = this.ratings.reduce((accumulator, ratings) => accumulator + ratings);
       return ratingsSum / this.ratings.length;
   }
   addRating(value) {
       this.ratings.push(value);
   }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

//creates a book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(`Book: ${historyOfEverything.title}`);
historyOfEverything.toggleCheckOutStatus();

//checks if checked out 
console.log(`Is the book checked out? ${historyOfEverything.isCheckedOut}`);

//adds three ratings to see if get average rating works
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`The average rating is ${historyOfEverything.getAverageRating()}`);


//creats a movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(`Movie: ${speed.title}`);
speed.toggleCheckOutStatus();

//checks if checked out 
console.log(`Is the movie checked out? ${speed.isCheckedOut}`);

//adds three ratings to see if get average rating works
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`The average rating is ${speed.getAverageRating()}`);