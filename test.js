const personDetails = {
  name: "Sam",
  programmingLevel: "Master",
};

const classes = [
  { name: "FTSE", instructor: "Sam" },
  { name: "FTDS", instructor: "Jyoti" },
];

const venues = [
  { name: "Room1", className: "FTSE" },
  { name: "Room2", className: "FTDS" },
];

let getPersonName = () => {
  return new Promise((resolve, reject) => {
    let personName = personDetails.name;
    console.log(personName);
    if (personName) {
      resolve(personName);
    } else {
      reject(error("Person name not found"));
    }
  });
};

let getClassName = (personName) => {
  return new Promise((resolve, reject) => {
    for (i = 0; i < classes.length; i++) {
      if (classes[i].instructor === personName) {
        let clase = classes[i].name;
        console.log(clase);
        resolve(classes[i].name);
      } else {
        reject(eror("Class not found"));
      }
    }
  });
};

let getVenue = (clase) => {
  return new Promise((resolve, reject) => {
    for (i = 0; i < venues.length; i++) {
      if (venues[i].className === clase) {
        let loc = venues[i].name;
        console.log(loc);
        resolve(loc);
      } else {
        reject(error("Venue not found"));
      }
    }
  });
};

getPersonName()
  .then(getClassName)
  .then(getVenue)
    .then((data) => {
      console.log("program ends here");
      console.log("Data from old side: " + data);
    })
  .catch((error) => {
    console.log(error);
  });
