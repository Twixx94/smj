import { BehaviorSubject} from "rxjs";

const sanitaires = [
    {
        "id": 1,
        "childName":"guillaume",
        "childSexe":"",
        "childBdate":"",
        "SanitaireResponsableName":"Harry",
        "SanitaireResponsableNumSS":"",
        "SanitaireResponsableHomePhone":"087656789",
        "SanitaireResponsableAddress":"", 
        "SanitaireResponsableOfficePhone":"", 
        "SanitaireResponsableAddressCentrePayeur":"",
        "SanitaireVaccinationNonVax":"", 
        "SanitaireVaccinationOtherVax":"", 
        "SanitaireVaccinationSerum":"", 
        "SanitaireVaccinationTuberculeuse":"", 
        "SanitaireVaccinationVariolique":"", 
        "angine1":"", 
        "angine2":"", 
        "rougeole1":"", 
        "rougeole2":"", 
        "rubeole1":"", 
        "rubeole2":"", 
        "rhumatismes1":"", 
        "rhumatismes2":"", 
        "scarlatine1":"", 
        "scarlatine2":"", 
        "coqueluche1":"", 
        "coqueluche2":"", 
        "asthme1":"", 
        "asthme2":"", 
        "oreillon1":"", 
        "oreillon2":"", 
        "otites1":"", 
        "otites2":"", 
        "varicelle1":"", 
        "varicelle2":"", 
        "actualTraitment1":"", 
        "actualTraitment2":"", 
        "actualTraitmentDetails":"", 
        "othersdifficulties":"", 
        "regle1":"", 
        "regle2":"", 
        "SanitaireVaccinations":""

    }
]
export const sanitaires$ = new BehaviorSubject(sanitaires);

export const addSanitaire = (childName, childSexe, childBdate, SanitaireResponsableName, SanitaireResponsableAddress, SanitaireResponsableNumSS, SanitaireResponsableHomePhone, SanitaireResponsableOfficePhone, SanitaireResponsableAddressCentrePayeur, SanitaireVaccinationNonVax, SanitaireVaccinationOtherVax, SanitaireVaccinationSerum, SanitaireVaccinationTuberculeuse, SanitaireVaccinationVariolique, angine1, angine2, rougeole1, rougeole2, rubeole1, rubeole2, rhumatismes1, rhumatismes2, scarlatine1, scarlatine2, coqueluche1, coqueluche2, asthme1, asthme2, oreillon1, oreillon2, otites1, otites2, varicelle1, varicelle2, actualTraitment1, actualTraitment2, actualTraitmentDetails, othersdifficulties, regle1, regle2, SanitaireVaccinations) =>{
    console.log('rxjs');
    sanitaires.push({
    id: Date.now(),
    childName: childName,
    childSexe : childSexe,
    childBdate: childBdate,
    SanitaireResponsableName: SanitaireResponsableName,
    SanitaireResponsableAddress: SanitaireResponsableAddress,
    SanitaireResponsableNumSS: SanitaireResponsableNumSS,
    SanitaireResponsableHomePhone: SanitaireResponsableHomePhone,
    SanitaireResponsableOfficePhone : SanitaireResponsableOfficePhone,
    SanitaireResponsableAddressCentrePayeur: SanitaireResponsableAddressCentrePayeur,
    SanitaireVaccinations :  SanitaireVaccinations,
    SanitaireVaccinationTuberculeuse : SanitaireVaccinationTuberculeuse,
    SanitaireVaccinationVariolique : SanitaireVaccinationVariolique,
    SanitaireVaccinationOtherVax :  SanitaireVaccinationOtherVax,
    SanitaireVaccinationNonVax :  SanitaireVaccinationNonVax,
    SanitaireVaccinationSerum :  SanitaireVaccinationSerum,
    rubeole1  : rubeole1,
    rubeole2  : rubeole2,
    varicelle1 : varicelle1,
    varicelle2 : varicelle2,
    angine1 : angine1,
    angine2 : angine2,
    rhumatismes1 : rhumatismes1,
    rhumatismes2 : rhumatismes2,
    scarlatine1 : scarlatine1,
    scarlatine2 : scarlatine2,
    coqueluche1 : coqueluche1,
    coqueluche2 : coqueluche2,
    otites1 :  otites1,
    otites2 : otites2,
    asthme1 : asthme1,
    asthme2  : asthme2,
    rougeole1 : rougeole1,
    rougeole2 : rougeole2,
    oreillon1 : oreillon1,
    oreillon2 : oreillon2,
    othersdifficulties : othersdifficulties,
    actualTraitment1 :  actualTraitment1,
    actualTraitment2 :  actualTraitment2,
    actualTraitmentDetails : actualTraitmentDetails,
    regle1 : regle1,
    regle2 : regle2



    });
    console.log(sanitaires)
    sanitaires$.next(sanitaires)
}
export const deleteSanitaire = (id) =>{
    const index = sanitaires.findIndex(s=> s.id === parseInt(id));
    console.log(index)

    if(index > -1){
        sanitaires.splice(index,1);

        sanitaires$.next(sanitaires);
    }
    
}
export const updateSanitaire = (id, childName, childSexe, childBdate, SanitaireResponsableName, SanitaireResponsableAddress, SanitaireResponsableNumSS, SanitaireResponsableHomePhone, SanitaireResponsableOfficePhone, SanitaireResponsableAddressCentrePayeur, SanitaireVaccinationNonVax, SanitaireVaccinationOtherVax, SanitaireVaccinationSerum, SanitaireVaccinationTuberculeuse, SanitaireVaccinationVariolique, angine1, angine2, rougeole1, rougeole2, rubeole1, rubeole2, rhumatismes1, rhumatismes2, scarlatine1, scarlatine2, coqueluche1, coqueluche2, asthme1, asthme2, oreillon1, oreillon2, otites1, otites2, varicelle1, varicelle2, actualTraitment1, actualTraitment2, actualTraitmentDetails, othersdifficulties, regle1, regle2, SanitaireVaccinations ) =>{
        const index = sanitaires.findIndex(s=> s.id == id)
        if(index > -1){
            sanitaires[index].childName = childName;
            sanitaires[index].childSexe = childSexe;
            sanitaires[index].childBdate = childBdate;
            sanitaires[index].SanitaireResponsableName = SanitaireResponsableName;
            sanitaires[index].SanitaireResponsableAddress = SanitaireResponsableAddress;
            sanitaires[index].SanitaireResponsableNumSS = SanitaireResponsableNumSS;
            sanitaires[index].SanitaireResponsableHomePhone = SanitaireResponsableHomePhone;
            sanitaires[index].SanitaireResponsableOfficePhone = SanitaireResponsableOfficePhone; 
            sanitaires[index].SanitaireResponsableAddressCentrePayeur = SanitaireResponsableAddressCentrePayeur;
            sanitaires[index].SanitaireVaccinations =  SanitaireVaccinations;
            sanitaires[index].SanitaireVaccinationTuberculeuse = SanitaireVaccinationTuberculeuse;
            sanitaires[index].SanitaireVaccinationVariolique = SanitaireVaccinationVariolique;
            sanitaires[index].SanitaireVaccinationOtherVax =  SanitaireVaccinationOtherVax;
            sanitaires[index].SanitaireVaccinationNonVax =  SanitaireVaccinationNonVax;
            sanitaires[index].SanitaireVaccinationSerum =  SanitaireVaccinationSerum;
            sanitaires[index].rubeole1  = rubeole1;
            sanitaires[index].rubeole2  = rubeole2;
            sanitaires[index].varicelle1 = varicelle1;
            sanitaires[index].varicelle2 = varicelle2;
            sanitaires[index].angine1 = angine1;
            sanitaires[index].angine2 = angine2;
            sanitaires[index].rhumatismes1 = rhumatismes1;
            sanitaires[index].rhumatismes2 = rhumatismes2;
            sanitaires[index].scarlatine1 = scarlatine1;
            sanitaires[index].scarlatine2 = scarlatine2;
            sanitaires[index].coqueluche1 = coqueluche1;
            sanitaires[index].coqueluche2 = coqueluche2;
            sanitaires[index].otites1 =  otites1;
            sanitaires[index].otites2 = otites2;
            sanitaires[index].asthme1 = asthme1;
            sanitaires[index].asthme2  = asthme2;
            sanitaires[index].rougeole1 = rougeole1;
            sanitaires[index].rougeole2 = rougeole2;
            sanitaires[index].oreillon1 = oreillon1;
            sanitaires[index].oreillon2 = oreillon2;
            sanitaires[index].othersdifficulties = othersdifficulties;
            sanitaires[index].actualTraitment1 =  actualTraitment1;
            sanitaires[index].actualTraitment2 =  actualTraitment2;
            sanitaires[index].actualTraitmentDetails = actualTraitmentDetails;
            sanitaires[index].regle1 = regle1;
            sanitaires[index].regle2 = regle2;
        


            sanitaires$.next(sanitaires)
        }
        console.log(sanitaires[index]);
}
export const findSanitaire = (id) =>{
    const sanitaire = sanitaires.find(s => s.id === parseInt(id))
    return sanitaire;
} 



