const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI);

const userSeed = [
/* 1 */
{
  "_id" : ObjectId("5f5eb2d52e1da034b43e2683"),
  "userData" : {
      "matchesYes" : [ 
          "Mia11", 
          "PupLover123", 
          "Alex5466", 
          "Kyl1235", 
          "AdamABC"
      ],
      "userName" : "lrmccann123",
      "petName" : "Chandon",
      "city" : "Chicago",
      "breed" : "Lab",
      "email" : "lrmccann@hotmail.com",
      "photoUrl" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
      "info" : "New204",
      "sessionToken" : "ce9ytb91perirwkkyn2hvr",
      "date" : ISODate("2020-09-14T00:01:25.066Z")
  },
  "password" : "logan",
  "__v" : 0
},

/* 2 */
{
  "_id" : ObjectId("5f5ec1443eff060017d05f93"),
  "userData" : {
      "matchesYes" : [ 
          "William", 
          "Emily", 
          "Linda", 
          "Polina", 
          "Sarah"
      ],
      "userName" : "lrmccann401",
      "petName" : "Chandon",
      "city" : "Chicago",
      "breed" : "Yellow Lab",
      "age" : 1,
      "park" : "on",
      "ball" : "on",
      "frisbee" : "on",
      "email" : "lrmccann@hotmail.com",
      "photoUrl" : "https://www.guidedogs.org/wp-content/uploads/2020/06/ELSA_Mug_1633_-8x10-1.png",
      "info" : "Chandon likes to walk in the park",
      "sessionToken" : "hiq2jlle4qpdfa7huqcocm",
      "date" : ISODate("2020-09-14T01:03:00.254Z")
  },
  "password" : "$2b$10$I2aubSkM7tVm2jbhqD.i2e3c5IkGWADWseuptUA2CLUo5OM/rGviu",
  "salt" : "$2b$10$I2aubSkM7tVm2jbhqD.i2e",
  "__v" : 0
},

/* 3 */
{
  "_id" : ObjectId("5f5fbc37f6688d001736337b"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Piter1",
      "petName" : "Cute Dog",
      "zipCode" : "50250",
      "city" : "Huston",
      "breed" : "Cute Dog",
      "age" : 1,
      "park" : "on",
      "email" : "piter@gmail.com",
      "info" : "Cute Dog",
      "sessionToken" : "b3m982hgclr757qgbfaof",
      "date" : ISODate("2020-09-14T18:53:43.260Z")
  },
  "password" : "$2b$10$yz/c87wwX/RlUHo7g0BSjOZ8fvd0wCadngNw2Zi/23wCNSjLOWipO",
  "salt" : "$2b$10$yz/c87wwX/RlUHo7g0BSjO",
  "__v" : 0
},

/* 4 */
{
  "_id" : ObjectId("5f5fe547580f890017075d50"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Logan4012",
      "petName" : "Doggo",
      "zipCode" : "60605",
      "city" : "Chicago",
      "breed" : "Terrier",
      "age" : 9,
      "park" : "on",
      "ball" : "on",
      "frisbee" : "on",
      "email" : "logan123@hotmail.com",
      "photoUrl" : "https://www.itchingforhelp.com/assets/images/home-dog.png",
      "sessionToken" : "twcxx1icysj5rdpn3bq2ec",
      "date" : ISODate("2020-09-14T21:48:55.251Z")
  },
  "password" : "$2b$10$jKUbeZKNfyAwp28Z7zUpTeQdREF4ckKH1L/mZCYZHnp0.QvMNLAk.",
  "salt" : "$2b$10$jKUbeZKNfyAwp28Z7zUpTe",
  "__v" : 0
},

/* 5 */
{
  "_id" : ObjectId("5f6008e2580f890017075d51"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "George",
      "petName" : "Benji",
      "zipCode" : "60611",
      "city" : "CHICAGO",
      "breed" : "Papillon",
      "age" : 2,
      "ball" : "on",
      "email" : "ishabali@gmail.com",
      "photoUrl" : "https://images-ra.adoptapet.com/seo/1/h/88_h.png",
      "info" : "Cute, friendly dog. Loves a belly rub.",
      "sessionToken" : "0qsw430r390gsyg57y25f5n",
      "date" : ISODate("2020-09-15T00:20:50.996Z")
  },
  "password" : "$2b$10$UBlne/lMpHnFj9.BGmzAzekT8LfNlE6PuRoIHb8.T/ec//bWKHLf6",
  "salt" : "$2b$10$UBlne/lMpHnFj9.BGmzAze",
  "__v" : 0
},

/* 6 */
{
  "_id" : ObjectId("5f600b72580f890017075d52"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Emily",
      "petName" : "Bella",
      "zipCode" : "48127",
      "city" : "Detroit",
      "breed" : "Chihuahua",
      "age" : 2,
      "park" : "on",
      "ball" : "on",
      "email" : "pauline@gmail.com",
      "photoUrl" : "https://animal.direct/files/Chihuahua-Dog-Breed.png",
      "info" : "Loves to walk around town with me, peeping out of my bag.",
      "sessionToken" : "ygc4dn6r7zas98zyoqsepp",
      "date" : ISODate("2020-09-15T00:31:46.771Z")
  },
  "password" : "$2b$10$RkBNSQli8CVWrwKZbb4i0.3M0cBJkUCYGK3Mh4dVRjyZPegpiSQoq",
  "salt" : "$2b$10$RkBNSQli8CVWrwKZbb4i0.",
  "__v" : 0
},

/* 7 */
{
  "_id" : ObjectId("5f600d89580f890017075d53"),
  "userData" : {
      "matchesYes" : [ 
          "Paul", 
          "Beau"
      ],
      "userName" : "William",
      "petName" : "Duke",
      "zipCode" : "75080",
      "city" : "Dallas",
      "breed" : "German Shepherd",
      "age" : 5,
      "park" : "on",
      "ball" : "on",
      "frisbee" : "on",
      "email" : "william@gmail.com",
      "photoUrl" : "https://pngimg.com/uploads/german_shepherd/german_shepherd_PNG56.png",
      "info" : "Loves to race other dogs in the park.",
      "sessionToken" : "qdt21ebf9hs0mq9ltpb8",
      "date" : ISODate("2020-09-15T00:40:41.515Z")
  },
  "password" : "$2b$10$maFUSkKvdf7/g2JtvZQspebY1GJoZozP6TWa/aCrdaPSBJ7vbSDci",
  "salt" : "$2b$10$maFUSkKvdf7/g2JtvZQspe",
  "__v" : 0
},

/* 8 */
{
  "_id" : ObjectId("5f60150d580f890017075d55"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Noah123",
      "petName" : "Jax",
      "zipCode" : "94130",
      "city" : "San Francisco",
      "breed" : "Terrier",
      "age" : 3,
      "park" : "on",
      "ball" : "on",
      "email" : "noah123@gmail.com",
      "photoUrl" : "https://lh3.googleusercontent.com/proxy/mPHMGmtFOQ1Qh5IE77FQk5Kop6uiCz2QxR8gQvSM4DBFK433Q1EdFD1CLojp1YjZJ5FVaGOEZ8RxHMpsg8UrEpXKH8Yzlqi_O8JfC6IwWY-Z-uyH8ZluQZwrFoEbtouScMFwW0tkA9a6-rJWbr2I8g",
      "info" : "Loves long walks around nature.",
      "sessionToken" : "sacokgwrddu0mcteqkkzc",
      "date" : ISODate("2020-09-15T01:12:45.833Z")
  },
  "password" : "$2b$10$6dYqmlUdfjfeNCDJIl0XjuXbkpBwkqNWC5XwCeeqcZgupmtKA9qNi",
  "salt" : "$2b$10$6dYqmlUdfjfeNCDJIl0Xju",
  "__v" : 0
},

/* 9 */
{
  "_id" : ObjectId("5f6016f8580f890017075d56"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Sarah",
      "petName" : "Izzy",
      "zipCode" : "02121",
      "city" : "Boston",
      "breed" : "Shih Tzu",
      "age" : 1,
      "ball" : "on",
      "email" : "sarah@gmail.com",
      "photoUrl" : "https://www.uokpl.rs/fpng/f/410-4102152_shih-tzu-puppy.png",
      "info" : "Loves meeting other dogs.",
      "sessionToken" : "qwhzpxri8swedabmz05lr",
      "date" : ISODate("2020-09-15T01:20:56.052Z")
  },
  "password" : "$2b$10$vrl7/OQnWBAFBvK9bHG0fuTgHJkIeiAx1hpf7wCm5XGP1.LJIlUli",
  "salt" : "$2b$10$vrl7/OQnWBAFBvK9bHG0fu",
  "__v" : 0
},

/* 10 */
{
  "_id" : ObjectId("5f6018d7580f890017075d57"),
  "userData" : {
      "matchesYes" : [ 
          "Richard", 
          "George", 
          "Noah123"
      ],
      "userName" : "David",
      "petName" : "Beau",
      "zipCode" : "98111",
      "city" : "Seattle",
      "breed" : "Pug",
      "age" : 3,
      "park" : "on",
      "ball" : "on",
      "frisbee" : "on",
      "email" : "david@gmail.com",
      "photoUrl" : "https://i.pinimg.com/originals/05/87/fa/0587fab8c42ac2afbe2b1da574761d7e.png",
      "info" : "Cutest, friendliest dog. Loves company. Don't you love his melting eyes? ",
      "sessionToken" : "w13n8xfzicfc1yy3kyh1ka",
      "date" : ISODate("2020-09-15T01:28:55.848Z")
  },
  "password" : "$2b$10$/IihAcLVyHmbHO3NN4Id1esZqcPRXX4NGYgws8/JUIvgqlpFm4dly",
  "salt" : "$2b$10$/IihAcLVyHmbHO3NN4Id1e",
  "__v" : 0
},

/* 11 */
{
  "_id" : ObjectId("5f5ed3553eff060017d05f9c"),
  "userData" : {
      "matchesYes" : [ 
          "Noah123", 
          "Linda", 
          "William", 
          "Walter", 
          "George", 
          "Michael", 
          "Emily"
      ],
      "userName" : "Polina",
      "petName" : "Roniya",
      "zipCode" : "60614",
      "city" : "Chicago",
      "breed" : "Norwich Terrier",
      "age" : 2,
      "park" : "on",
      "ball" : "on",
      "email" : "polina@gmail.com",
      "photoUrl" : "https://www.arba.org/Library/components/gallery-group-3/images/norwich-terrier.gif",
      "sessionToken" : "y7a82nkeap07oct54fa7wl",
      "date" : ISODate("2020-09-14T02:20:05.040Z"),
      "info" : "She likes play with ball"
  },
  "password" : "$2b$10$x5Lq4vfWWRlefOy8OluTou5gr4MmNXbN/unuDnQCwTYmwGPDZS/0G",
  "salt" : "$2b$10$x5Lq4vfWWRlefOy8OluTou",
  "__v" : 0
},

/* 12 */
{
  "_id" : ObjectId("5f601faa580f890017075d58"),
  "userData" : {
      "matchesYes" : [ 
          "George", 
          "Noah123"
      ],
      "userName" : "Richard",
      "petName" : "Sherry",
      "zipCode" : "30318",
      "city" : "Atlanta",
      "breed" : "Cocker Spaniel",
      "age" : 5,
      "ball" : "on",
      "email" : "richard@gmail.com",
      "photoUrl" : "https://images-ra.adoptapet.com/seo/1/h/40_h.png",
      "info" : "Well-trained. Loves being both indoors and outdoors.",
      "sessionToken" : "4yvzsluaoq7vv5iu5kfbj8",
      "date" : ISODate("2020-09-15T01:58:02.199Z")
  },
  "password" : "$2b$10$7L7VsEEV9y5vTuuSNYVdKuUypzadj.b2SXwGmTEVWMzCc4WwexmrC",
  "salt" : "$2b$10$7L7VsEEV9y5vTuuSNYVdKu",
  "__v" : 0
},

/* 13 */
{
  "_id" : ObjectId("5f6023c7580f890017075d59"),
  "userData" : {
      "matchesYes" : [ 
          "George", 
          "Sarah", 
          "Emily"
      ],
      "userName" : "Linda",
      "petName" : "Goldie",
      "zipCode" : "60490",
      "city" : "Chicago",
      "breed" : "Golden Retriever",
      "age" : 3,
      "ball" : "on",
      "email" : "linda@gmail.com",
      "photoUrl" : "https://lh3.googleusercontent.com/proxy/rIJvmW8ST3cX-_ZHJcwPgWKM3eV9JNiZaEofX-VhScpbiSRV21VDV9TU4xcUkAsNRVHYeVMdA8sOsfe7Ev5Fc9DhlTKsjF-kCTe0SrAU6BOBFKMwMzS2UKnoVVPGHLuxXEVt8C_y8YelMDPdyWY",
      "info" : "Goldie really loves cuddles, hanging out with kids and playing with a ball.",
      "sessionToken" : "31215cva2npnhiy8za9mue",
      "date" : ISODate("2020-09-15T02:15:35.619Z"),
      "park" : "on",
      "frisbee" : "on"
  },
  "password" : "$2b$10$90zpMFjVfrxC5EqdgHO5Au671yZmAJr0yX9VF.9Zo997aJl0XYiQy",
  "salt" : "$2b$10$90zpMFjVfrxC5EqdgHO5Au",
  "__v" : 0
},

/* 14 */
{
  "_id" : ObjectId("5f6043d6580f890017075d5a"),
  "userData" : {
      "matchesYes" : [],
      "userName" : "Walter",
      "petName" : "Walter",
      "zipCode" : "60605",
      "city" : "Chicago",
      "breed" : "Corgi",
      "age" : 1,
      "park" : "on",
      "ball" : "on",
      "email" : "walter@hotmail.com",
      "photoUrl" : "https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1000/project/quiz/images/dog-breeds-1.png",
      "info" : "Walter loves squeaker toys and hates vacuums. He's interested in finding a pup to play with! ",
      "sessionToken" : "6of7pfx10yqsybk7xwgfdo",
      "date" : ISODate("2020-09-15T04:32:22.117Z")
  },
  "password" : "$2b$10$I.MLQRqHhrUEw7Hdoi4KOOcgRfjzBj31DeuBhi2ohl6yCtVyqhWpi",
  "salt" : "$2b$10$I.MLQRqHhrUEw7Hdoi4KOO",
  "__v" : 0
}
]

db.Post.remove({})
  .then(() => db.users.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
