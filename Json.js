// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

// JSON example.

const data = [
  {
    id: 1,
    first_name: "Robert",
    last_name: "Schwartz",
    email: "rob23@gmail.com",
  },
  {
    id: 2,
    first_name: "Lucy",
    last_name: "Ballmer",
    email: "lucyb56@gmail.com",
  },
  {
    id: 3,
    first_name: "Anna",
    last_name: "Smith",
    email: "annasmith23@gmail.com",
  },
  {
    id: 4,
    first_name: "Robert",
    last_name: "Brown",
    email: "bobbrown432@yahoo.com",
  },
  {
    id: 5,
    first_name: "Roger",
    last_name: "Bacon",
    email: "rogerbacon12@yahoo.com",
  },
];

// forEach.
data.forEach( object => {
    Object.entries(object).forEach(([key, value]) => {
        console.log(`${key} ---> ${value}}`)
    })
} )

// for in loop.
let x;
for (let i = 0; i < data.length; i++) {
  for (x in data[i]) {
    console.log(data[i][x]);
  }
}


// for loop.
for(let i=0; i<data.length; i++){
    console.log(data[i])
}

//for of loop.
for(const ele of data){
    console.log(ele)
}


// Create your own resume data in JSON format

const KEWAL = {
    "Information": {
        "name": "Kewal",
        "father's name": "B Bharath Kumar",
        "address": {
            "street": "XYZ street",
            "city": "XYZ city",
            "state": "XYZ state",
            "pincode": 0123456789
        },
    },
    "education": {
        "masters": "MCA under Berhampur University (2020)",
        "graduation": "BCA under Berhampur University (2017)",
        "intermediate": "Intermediate under ISC from De Paul School (2014)",
        "matriculation": "Matriculation under ICSE from St Vincent Convent School (2012)" 
    },

    "Projects": {
        1: "Multi-Banking System: A project which is implemented using HTML, CSS and JavaScript as front end and oracle as a database and JAVA as a programming language. It allows multiple bank transaction on a single platform.",
        2: "Tag based image search and sentiment analysis using twitter: A project implemented using python and its related modules which uses the concept of opinion mining and web scraping."
    },

    "Paper Published": "An Optimized Disk Scheduling Algorithm With Bad-Sector Management",
    "Skills": ["c", "c++", "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Node", "MySQL", "MongoDB", "express", "GIT", "Django", "Python"],
    "Strength": ["Active participation", "Good communication skills", "Goal Oriented", "Team work"],
    "Languages Known": ["Hindi", "English", "Odia", "Telugu", "Kannada", "Tulu"]
}


















































