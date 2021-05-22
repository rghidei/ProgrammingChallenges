function validateData(patients, claims, charges){
    charges = cleanCharges(charges);
    const validClaims = [];
    for(let i = 0; i < claims.length; i++)
        for(let j = 0; j < charges.length; j++)
            if(claims[i][0] === charges[j][1])
                if(claims[i][3] === 'office' && charges[i][3].charAt(0) === '9')
                    for(let k = 0; k < patients.length; k++) {
                        if(specialCodes(patients[k][0], charges[j][3]))
                            validClaims.push(claims[i][0]);
                        else
                            if(claims[i][1] === patients[k][0])
                                validClaims.push(claims[i][0])
                    }
    return validClaims;
}
function cleanCharges(charges) {
    const invalid = [];
    for(i = 0; i < charges.length; i++)
        for(j = 0; j < charges.length; j++)
            if(i !== j && charges[i][1] === charges[j][1] && charges[i][3] === charges[j][3])
                if(!invalid.includes(charges[i]))
                    invalid.push(charges[i]);

    return charges.filter(el => {if(invalid.includes(el)); else return el;});
}


function specialCodes(patient, procedureCode) {
    switch(procedureCode) {
        case '99394': return patient < 18;
        case '99395': return patient >= 18 && patient <= 39;
        case '99396': return patient > 39;
    }
}

const patients = [
    ['A123', 15],
    ['B456', 50]
];

const claims = [
    [101, 'A123', 'YZ12', "office"],
    [102, 'A123', 'YZ12', "office"],
    [103, 'B456', 'YZ12', "office"]
]

const charges = [
    [8001, 101, 90.00, '90000', "-"],
    [8002, 102, 9.99, '80000', "-"],
    [8003, 103, 20.00, 'G5000', "-"],
    [8004, 103, 30.00, '90000', "-"],
    [8005, 102, 998.99, '80000', "-"]
]
console.log(validateData(patients, claims, charges));

function specialCodes(patient, procedureCode) {
    if(procedureCode === '99394'){
      return patient < 18
    } else if(procedureCode === '99395'){
      return patient >= 18 && patient <= 39
    } else if(procedureCode === '99396') {
      return patient > 39
    }
}
