// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum , dnaArr) => {
return {
  specimenNum,
  dnaArr,
  mutate() {
    //Fisher–Yates Shuffle
      var i = this.dnaArr.length
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = this.dnaArr[i];
        this.dnaArr[i] = this.dnaArr[j];
        this.dnaArr[j] = temp;

    }
    let mutatedDna = this.dnaArr
    return mutatedDna;

      },
  compareDNA(pAequor) {
    let counter = 0;
    for(let i = 0; i < this.dnaArr; i++) {
      if(this.dnaArr[i] === pAequor[i]) {
        counter += 1;
        }
      }
    },
    willLikelySurvive() {
      let counter = 0;
    for(let i = 0; i < this.dnaArr; i++) {
      if(this.dnaArr[i] === 'C' || this.dnaArr[i] === 'G') {
        counter += 1;
        }
    }
     if(counter >= 9) {
      return true;
    } else { 
      return false;
    }
    }
  }
}
let sample = [];
let i = 0
while(sample.length <= 30) {
  let mock = pAequorFactory(i, mockUpStrand());
  if (mock.willLikelySurvive() === true) {
    sample.push(mock);
    i += 1;
  } 
}













