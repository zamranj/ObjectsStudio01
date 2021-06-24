// Code your selectRandomEntry function here:
function selectRandomEntry(idNumbers){
 let index = Math.floor(Math.random()*idNumbers.length);
  
  return idNumbers[index];
}

// Code your buildCrewArray function here:
let idNumbers = [291, 414, 503, 599, 796, 890];
let crewIds = [];
while(crewIds.length < 3){
  let randommEntry = selectRandomEntry(idNumbers)
  if (!crewIds.includes(randommEntry)){
     crewIds.push(randommEntry);
  }
 }


console.log(crewIds);
console.log();

function buildCrewArray(crewIds, candidateObjects){
  let crew = [];

  for(let i = 0; i< crewIds.length; i++){
    for(let j = 0; j<candidateObjects.length; j++ ){
      if(candidateObjects[j].astronautID === crewIds[i]){
        crew.push(candidateObjects[j].name);
      }
    }
  }

  return crew;

}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

luckyCandidates = buildCrewArray(crewIds, animals);
// Code your template literal and console.log statements:

console.log(`${luckyCandidates[0]}, ${luckyCandidates[1]}, ${luckyCandidates[2]} are the lucky ones`)
