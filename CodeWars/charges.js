function validateData(patients, claims, charges) {

    const validClaims = []

    for(let i = 0; i < claims.length; i++){

      let findErrorCharges = []
      let isCorrect = true
    //filtering the charges array, only the ones that have charges should have claims
      let validCharges = charges.filter(innerChargeArr => innerChargeArr[1] == claims[i][0])
    // find and grab the first array that is true for the condtional
      let patientArr = patients.find(innerPtArr => claims[i][1] == innerPtArr[0])

    //go through the charges array and at each inner array check if any of these condtionals are true, if true, the
     for(const chargeArr of validCharges){
        if(chargeArr[3] == "99394" && patientArr[1] >= 18){
          isCorrect = false
        }else if(chargeArr[3] == "99395" && (patientArr[1] <= 18 || patientArr[1] >= 39)){
          isCorrect = false
        }else if(chargeArr[3] == "99396" && patientArr[1] <= 39){
          isCorrect = false
        }else if(chargeArr[3].charAt(0) == "9" && claims[i][3] !== "office"){
          isCorrect = false
        }else if((chargeArr[3].charAt(0) == "5" || chargeArr[3].charAt(0) == "6") && claims[i][3] == "office"){
          isCorrect = false
        }else if(findErrorCharges.includes(chargeArr[3])){
          isCorrect = false
        }
        findErrorCharges.unshift(chargeArr[3])
           // console.log(findErrorCharges)
     }
        //  console.log(validClaims)

     if(isCorrect === true){
         validClaims.unshift(claims[i][0])
     }
        //  console.log(validClaims)

    }
    let result = validClaims.sort()
    return result
}
const patients = [
    ['A123', 18],
    ['B456', 50]
];
const claims = [
    [102, 'A123', 'YZ12', "office"],
    [101, 'A123', 'YZ12', "office"],
    [103, 'B456', 'YZ12', "office"]
]
const charges = [
    [8001, 101, 90.00, '90000', "-"],
    [8002, 102, 9.99, '80000', "-"],
    [8004, 103, 30.00, '50000', "-"],
    [8003, 103, 20.00, 'G5000', "-"]
]
console.log(validateData(patients, claims, charges));

function validateData(){
  let validClaims = []

  for(let i = 0; i < claims.length; i++){
    let memArray = []
    let ptAge = 0
    let valid = true
    let claimId = claims[i][0]
    let claimsPtId = claims[i][1]
    let place = claims[i][3]

    for(ptArr of patients){
      let patientId = ptArr[0]
      if(claimsPtId === patientId){
        ptAge = patientId
      }
    }

    for(chgArr of charges){
      let proCode = chgArr[3]
      let chargesClaimId = chgArr[1]
      let firstCharPro = proCode.charAt(0)
      if(claimId === chargesClaimId){
        //number 6
        if(memArray.includes(proCode)){
          valid = false//invalidClaim
        } else {
          memArray.push(proCode)
        }
        //number 1 - 5
        if(ptAge >= 18 && proCode === '99394'){
          valid = false
        } else if((ptAge < 18 || ptAge > 39) && proCode === '99395'){
          valid = false
        } else if(ptAge <= 39 && proCode === '99396'){
          valid = false
        } else if(firstCharPro === '9' && place !== 'office'){
          valid = false
        } else if((firstCharPro === '5' || firstCharPro === '6') && place === 'office'){
          valid = false
        }
      }
    }
    if(valid){
      validClaims.push(claimId)
    }
  }
  return validClaims.sort()
}

const patients = [
    ['A123', 18],
    ['B456', 50]
];
const claims = [
    [102, 'A123', 'YZ12', "office"],
    [101, 'A123', 'YZ12', "office"],
    [103, 'B456', 'YZ12', "office"]
]
const charges = [
    [8001, 101, 90.00, '90000', "-"],
    [8002, 102, 9.99, '80000', "-"],
    [8004, 103, 30.00, '50000', "-"],
    [8003, 103, 20.00, 'G5000', "-"],
    [8005, 102, 9.99, '80000', "-"],

]
console.log(validateData(patients, claims, charges));
