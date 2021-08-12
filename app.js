/*#region function RoundOff(value, figure){

    //100 round off to 2 decimal value

    //1000 round off to 3 decimal value

    return value.toFixed(figure);
}
#endregion*/

//#region Student Class
function Student(name, standard, classRoom){
    //properties
    this.name = name;
    this.standard = standard;
    this.classRoom = classRoom;

    //method
    this.LogDetails = function(details){
        console.log(details);
    }
}
//#endregion

/*#region Class untuk kete

function Car(carname, price){

    //properties    
    this.carname = carname;
    this.price = price;

    //method
    this.getCarDetails = function(details) {
        console.log(details);
    }
}

//create object
var car1 = new Car("Nisan", 100);

car1.getCarDetails(car1.carname);
#endregion Class keta*/


/* #region class untuk moto

function Motorbike(brand, price, type){

    //properties 
    this.brand = brand;
    this.price = price;
    this.type = type;

    //method

    this.getMotorDetails = function(details) {
        console.log(details);
    }
}
    //create object
    var motor1 = new Motorbike("Yamaha", 5400, "Moped");

    motor1.getMotorDetails(motor1.brand);
    motor1.getMotorDetails(motor1.type);
    motor1.getMotorDetails(motor1.price);
#endregion
*/

/*region class untuk game

function Game(name, genre, platform){

    //properties
    this.name = name;
    this.genre = genre;
    this.platform = platform;
    
    //method
    this.getGameDetails = function(game) {
        console.log(game);
    }
}
//Game 1
var game_1 = new Game("God of War", "fighting", "PS4");

game_1.getGameDetails(game_1.name);
game_1.getGameDetails(game_1.genre);
game_1.getGameDetails(game_1.platform);

//Game 2
var game_2 = new Game("Pokemon: Sword", "RPG", "Nintendo Switch");

game_2.getGameDetails(game_2.name);
game_2.getGameDetails(game_2.genre);
game_2.getGameDetails(game_2.platform);

//Game 3
var game3 = new Game("Super Smash", "Fighting", "NIntendo Switch");

game3.getGameDetails(game3.name);
game3.getGameDetails(game3.genre);
game3.getGameDetails(game3.platform);
#endregion*/

/*region class untuk laptop

function Laptop(brand, color, reso){

    //properties
    this.brand = brand;
    this.color = color;
    this.reso = reso;

    //method
    this.getLaptopProperties = function(laptop) {
        console.log(laptop);
    }
}

//create object laptop 1
var laptop_1 = new Laptop("Asus", "Silver", "720p");

laptop_1.getLaptopProperties(laptop_1.reso);
laptop_1.getLaptopProperties(laptop_1.brand);
laptop_1.getLaptopProperties(laptop_1.color);

//create laptop 2
var laptop_2 = new Laptop("ROG", "Matte Black", "1080p");

laptop_2.getLaptopProperties(laptop_2.reso);
laptop_2.getLaptopProperties(laptop_2.brand);
laptop_2.getLaptopProperties(laptop_2.color);
#endregion*/

/*#region class untuk kasut
function Shoe(brand, material, color) {

    //properties
    this.brand = brand;
    this.material = material;
    this.color = color;

    //method
    this.getShoeDetails = function(shoedetails) {
        console.log(shoedetails);
    }
}

var shoe1 = new Shoe("Nike", "Cotton", "red");

shoe1.getShoeDetails(shoe1.brand);
shoe1.getShoeDetails(shoe1.material);
shoe1.getShoeDetails(shoe1.color);

var shoe2 = new Shoe("Adidas", "Polyester", "Blue");

shoe2.getShoeDetails(shoe2.brand);
shoe2.getShoeDetails(shoe2.material);
shoe2.getShoeDetails(shoe2.color);
#endregion*/

/*#region class untuk fon
function Smartphone(brand, ram, storage) {

    //properties
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;

    //method
    this.getPhoneSpecs = function(specs) {
        console.log(specs);
    }
}

//create phone 1
var samsung = new Smartphone("Samsung", "16 RAM", "128GB");

samsung.getPhoneSpecs(samsung.brand);
samsung.getPhoneSpecs(samsung.ram);
samsung.getPhoneSpecs(samsung.storage);


//create phone 2
var iphonex = new Smartphone("iPhone X", "24RAM", "64GB");

iphonex.getPhoneSpecs(iphonex.brand);
iphonex.getPhoneSpecs(iphonex.ram);
iphonex.getPhoneSpecs(iphonex.storage);
#endregion*/

/*#region class untuk meja
function Table(color, material, functionality) {
    
    //properties
    this.color = color;
    this.material = material;
    this.functionality = functionality;

    //method
    this.getTableProperties = function(table) {
        console.log(table);
    }
}

//create table 1
var table_1 = new Table("Light Brown", "Wood", "none"); 

table_1.getTableProperties(table_1.color);
table_1.getTableProperties(table_1.material);
table_1.getTableProperties(table_1.functionality);

//create table 2
var table_2 = new Table("Creamy White", "Plastic", "none");

table_2.getTableProperties(table_2.color);
table_2.getTableProperties(table_2.material);
table_2.getTableProperties(table_2.functionality);

//create table 3
var table_3 = new Table("Black", "Metal", "Can raise through built-in electronic functions.");

table_3.getTableProperties(table_3.color);
table_3.getTableProperties(table_3.material);
table_3.getTableProperties(table_3.functionality);
#endregion*/

/*#region class untuk manusia

function Human(gender, agerange, education) {

    //properties
    this.gender = gender;
    this.agerange = agerange;
    this.education = education;

    //method
    this.getDetails = function(details) {
        console.log(details)
    }
}

//create Aminah
var human_1 = new Human("Female", "Adolescence", "High School");

human_1.getDetails(human_1.gender);
human_1.getDetails(human_1.agerange);
human_1.getDetails(human_1.education);

//create Kamal
var human_2 = new Human("Male", "Adult", "Diploma");

human_2.getDetails(human_2.gender);
human_2.getDetails(human_2.agerange);
human_2.getDetails(human_2.education);

//create Siti
var human_3 = new Human("Female", "Adult", "Masters");

human_3.getDetails(human_3.gender);
human_3.getDetails(human_3.agerange);
human_3.getDetails(human_3.education);
#endregion*/

/*#region class untuk haiwan

function Animal(name, category) {

    //properties
    this.name = name;
    this.category = category;

    //method
    this.getAnimalDetails = function(details) {
        console.log(details);
    }
}

//create animal 1
var animal_1 = new Animal("Lion", "Mammal");

animal_1.getAnimalDetails(animal_1.name);
animal_1.getAnimalDetails(animal_1.category);

//create animal 2
var animal_2 = new Animal("Eagle", "Bird");

animal_2.getAnimalDetails(animal_2.name);
animal_2.getAnimalDetails(animal_2.category);
#endregion*/

//class untuk anime

class Anime {
    constructor(title, genre, type) {

     //properties
     this.title = title;
     this.genre = genre;
     this.type = type;
 
     //method
     this.getAnimeDetails = function(animedetails) {
         console.log(animedetails);
    }
}   
}

//create Anime 1
var anime_1 = new Anime("ASass", "Psychological", "Series");

anime_1.getAnimeDetails(anime_1.title);
anime_1.getAnimeDetails(anime_1.genre);
anime_1.getAnimeDetails(anime_1.type);

//create ANime 2
var anime_2 = new Anime("ERASED", "Thriller", "Series");

anime_2.getAnimeDetails(anime_2.title);
anime_2.getAnimeDetails(anime_2.genre);
anime_2.getAnimeDetails(anime_2.type);

//create Anime 3
var anime_3 = new Anime("Pokemon", "")

//class untuk hero ML

//class untuk camera

//class untuk air minuman