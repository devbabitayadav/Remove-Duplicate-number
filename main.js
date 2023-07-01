const CityNames = ["Indore" ,  "Mumbai" , "Pune" , "Agra" , "London","Bhopal" , "Indore" ,"Jaipur","Delhi"];

const removeDuplicatesElement  = CityNames.filter((value , index) => {
    return CityNames.indexOf(value) === index;

});

document.write(`<h3>City Name: `  + removeDuplicatesElement);

