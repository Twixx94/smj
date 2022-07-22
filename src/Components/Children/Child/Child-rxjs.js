import { BehaviorSubject} from "rxjs";

const renseignements = [
    {
        "id": 1,
        "childName":"jeremy",
        "childBdate":"",
        "childAge":"",
        "childAddress":"",
        "childEmail":"",
        "childSchool":"",
        "RenseignementResponsableName":"Marie",
        "RenseignementResponsablePhone":"",
        "RenseignementResponsableAddress":"", 
        "RenseignementResponsableEmail":"", 
        "RenseignementResponsableFamilySit":"", 
        "RenseignementResponsableJob":"", 
        "RenseignementResponsableWorkplace":"", 
        "RenseignementResponsablePhoneWorkplace":"", 
        "RenseignementResponsableEmployer":"", 
        "RenseignementResponsableSecuNum":"", 
        "RenseignementResponsableAllocNum":"", 
        "RenseignementConjointName":"", 
        "RenseignementConjointJob":"", 
        "RenseignementConjointWorkplace":"", 
        "RenseignementConjointPhoneWorkplace":"", 
        "RenseignementConjointEmployer":"", 
        "RenseignementEmergencyContactName":"", 
        "RenseignementEmergencyContactAddress":"", 
        "RenseignementEmergencyContactPhone":"", 
        "RenseignementInsuranceName":"", 
        "RenseignementInsuranceAddress":"", 
        "RenseignementMutualName":"",
        "RenseignementMutualAddress":"", 
        "RenseignementAutorisationsHospitalisation":"", 
        "RenseignementAutorisationsFirstAid":"", 
        "RenseignementAutorisationsActivities":"", 
        "RenseignementAutorisationsImage":"",
        "RenseignementTierceName":"",
        "RenseignementTierceAddress":"",
        "RenseignementTiercePhone":"",
        "RenseignementTierce2Name":"",
        "RenseignementTierce2Address":"",
        "RenseignementTierce2Phone":""

    },
    {
        "id": 2,
        "childName":"benoit",
        "childBdate":"",
        "childAge":"",
        "childAddress":"",
        "childEmail":"",
        "childSchool":"",
        "RenseignementResponsableName":"Jerome",
        "RenseignementResponsablePhone":"097644789",
        "RenseignementResponsableAddress":"", 
        "RenseignementResponsableEmail":"", 
        "RenseignementResponsableFamilySit":"", 
        "RenseignementResponsableJob":"", 
        "RenseignementResponsableWorkplace":"", 
        "RenseignementResponsablePhoneWorkplace":"", 
        "RenseignementResponsableEmployer":"", 
        "RenseignementResponsableSecuNum":"", 
        "RenseignementResponsableAllocNum":"", 
        "RenseignementConjointName":"", 
        "RenseignementConjointJob":"", 
        "RenseignementConjointWorkplace":"", 
        "RenseignementConjointPhoneWorkplace":"", 
        "RenseignementConjointEmployer":"", 
        "RenseignementEmergencyContactName":"", 
        "RenseignementEmergencyContactAddress":"", 
        "RenseignementEmergencyContactPhone":"",  
        "RenseignementInsuranceName":"", 
        "RenseignementInsuranceAddress":"",
        "RenseignementMutualName":"", 
        "RenseignementMutualAddress":"", 
        "RenseignementAutorisationsHospitalisation":"", 
        "RenseignementAutorisationsFirstAid":"", 
        "RenseignementAutorisationsActivities":"", 
        "RenseignementAutorisationsImage":"",
        "RenseignementTierceName":"",
        "RenseignementTierceAddress":"",
        "RenseignementTiercePhone":"",
        "RenseignementTierce2Name":"",
        "RenseignementTierce2Address":"",
        "RenseignementTierce2Phone":""  
    }
]
// const renseignements = [
//     {
//            child:{ 
//             id: 1, 
//             name: 'toto',
//             bdate: '',
//             age: '',
//             address: '',
//             email: '',
//             school: '',
//            },
//             responsable:{
//                 name: 'titi',
//                 address: '',
//                 phone: '0781673080',
//                 familySit: '',
//                 job:'',
//                 workplace:'',
//                 phoneWorkplace:'',
//                 employer:'',
//                 secuNum:'',
//                 allocNum:'',
//                 email:''
//             },
//             conjoint:{
//                 name:'',
//                 job:'',
//                 workplace:'',
//                 phoneWorkplace:'',
//                 employer:''
//             },
//             emergency:{
//                 name:'',
//                 address:'',
//                 phone:''
//             },
//             insurance:{
//                 address:'',
//                 name:'',
//             },
//             mutual:{
//                 address:'',
//                 name:''
//             },
//             autorisations:{
//                 hospitalisation:'',
//                 firstAid:'',
//                 activities:'',
//                 photography: ''
//             }
//         }]


export const renseignements$ = new BehaviorSubject(renseignements);

export const addRenseignement = (childName, childBdate, childAge, childAddress, childEmail,childSchool, RenseignementResponsableName, RenseignementResponsableAddress, RenseignementResponsableEmail, RenseignementResponsablePhone, RenseignementResponsableFamilySit, RenseignementResponsablejob, RenseignementResponsableWorkplace, RenseignementResponsablePhoneWorkplace, RenseignementResponsableEmployer, RenseignementResponsableSecuNum, RenseignementResponsableAllocNum, RenseignementConjointName, RenseignementConjointJob, RenseignementConjointWorkplace, RenseignementConjointPhoneWorkplace, RenseignementConjointEmployer, RenseignementEmergencyContactName, RenseignementEmergencyContactAddress, RenseignementEmergencyContactPhone, RenseignementInsuranceAddress, RenseignementInsuranceName, RenseignementMutualAddress, RenseignementMutualName, RenseignementTierceName, RenseignementTierceAddress, RenseignementTiercePhone, RenseignementTierce2Name, RenseignementTierce2Address, RenseignementTierce2Phone) =>{
    console.log('rxjs');
    renseignements.push({
    id: Date.now(),
    childName: childName,
    childBdate: childBdate,
    childAge: childAge,
    childAddress: childAddress,
    childEmail: childEmail,
    childSchool: childSchool,
    RenseignementResponsableName: RenseignementResponsableName,
    RenseignementResponsableAddress: RenseignementResponsableAddress,
    RenseignementResponsableEmail: RenseignementResponsableEmail,
    RenseignementResponsablePhone: RenseignementResponsablePhone,
    RenseignementResponsableFamilySit: RenseignementResponsableFamilySit,
    RenseignementResponsablejob: RenseignementResponsablejob,
    RenseignementResponsableWorkplace : RenseignementResponsableWorkplace,
    RenseignementResponsablePhoneWorkplace: RenseignementResponsablePhoneWorkplace,
    RenseignementResponsableEmployer: RenseignementResponsableEmployer,
    RenseignementResponsableSecuNum: RenseignementResponsableSecuNum,
    RenseignementResponsableAllocNum: RenseignementResponsableAllocNum,
    RenseignementConjointName: RenseignementConjointName,
    RenseignementConjointJob: RenseignementConjointJob,
    RenseignementConjointWorkplace: RenseignementConjointWorkplace,
    RenseignementConjointPhoneWorkplace: RenseignementConjointPhoneWorkplace,
    RenseignementConjointEmployer: RenseignementConjointEmployer,
    RenseignementEmergencyContactName: RenseignementEmergencyContactName,
    RenseignementEmergencyContactAddress: RenseignementEmergencyContactAddress,
    RenseignementEmergencyContactPhone: RenseignementEmergencyContactPhone,
    RenseignementInsuranceAddress: RenseignementInsuranceAddress,
    RenseignementInsuranceName: RenseignementInsuranceName,
    RenseignementMutualAddress: RenseignementMutualAddress,
    RenseignementMutualName: RenseignementMutualName,
    RenseignementTierceName : RenseignementTierceName,
    RenseignementTierceAddress : RenseignementTierceAddress,
    RenseignementTiercePhone : RenseignementTiercePhone,
    RenseignementTierce2Name : RenseignementTierce2Name,
    RenseignementTierce2Address : RenseignementTierce2Address,
    RenseignementTierce2Phone : RenseignementTierce2Phone

    });
    console.log(renseignements)
    renseignements$.next(renseignements)
}
export const deleteRenseignement = (id) =>{
    const index = renseignements.findIndex(r=> r.id === parseInt(id));
    console.log(index)

    if(index > -1){
        renseignements.splice(index,1);

        renseignements$.next(renseignements);
    }
    
}
export const updateRenseignement = (id, childName, childBdate, childAge, childAddress, childEmail, childSchool, RenseignementResponsableName, RenseignementResponsablePhone, RenseignementResponsableAddress, RenseignementResponsableEmail,RenseignementResponsableFamilySit, RenseignementResponsableJob, RenseignementResponsableWorkplace, RenseignementResponsablePhoneWorkplace, RenseignementResponsableEmployer,RenseignementResponsableSecuNum, RenseignementResponsableAllocNum, RenseignementConjointName, RenseignementConjointJob, RenseignementConjointWorkplace, RenseignementConjointPhoneWorkplace, RenseignementConjointEmployer, RenseignementEmergencyContactName, RenseignementEmergencyContactAddress, RenseignementEmergencyContactPhone,RenseignementInsuranceName, RenseignementInsuranceAddress, RenseignementMutualName, RenseignementMutualAddress, RenseignementTierceName, RenseignementTierceAddress, RenseignementTiercePhone, RenseignementTierce2Name, RenseignementTierce2Address, RenseignementTierce2Phone ) =>{
        const index = renseignements.findIndex(r=> r.id == id)
        if(index > -1){
            renseignements[index].childName = childName;
            renseignements[index].childBdate = childBdate;
            renseignements[index].childAge = childAge;
            renseignements[index].childAddress = childAddress; 
            renseignements[index].childEmail = childEmail;
            renseignements[index].childSchool = childSchool;
            renseignements[index].RenseignementResponsableName = RenseignementResponsableName;
            renseignements[index].RenseignementResponsablePhone = RenseignementResponsablePhone;
            renseignements[index].RenseignementResponsableAddress = RenseignementResponsableAddress;
            renseignements[index].RenseignementResponsableEmail  = RenseignementResponsableEmail; 
            renseignements[index].RenseignementResponsableFamilySit = RenseignementResponsableFamilySit; 
            renseignements[index].RenseignementResponsableJob = RenseignementResponsableJob; 
            renseignements[index].RenseignementResponsableWorkplace = RenseignementResponsableWorkplace; 
            renseignements[index].RenseignementResponsablePhoneWorkplace = RenseignementResponsablePhoneWorkplace; 
            renseignements[index].RenseignementResponsableEmployer = RenseignementResponsableEmployer; 
            renseignements[index].RenseignementResponsableSecuNum = RenseignementResponsableSecuNum; 
            renseignements[index].RenseignementResponsableAllocNum = RenseignementResponsableAllocNum; 
            renseignements[index].RenseignementConjointName = RenseignementConjointName; 
            renseignements[index].RenseignementConjointJob = RenseignementConjointJob; 
            renseignements[index].RenseignementConjointWorkplace = RenseignementConjointWorkplace; 
            renseignements[index].RenseignementConjointPhoneWorkplace = RenseignementConjointPhoneWorkplace; 
            renseignements[index].RenseignementConjointEmployer = RenseignementConjointEmployer; 
            renseignements[index].RenseignementEmergencyContactName = RenseignementEmergencyContactName; 
            renseignements[index].RenseignementEmergencyContactAddress = RenseignementEmergencyContactAddress; 
            renseignements[index].RenseignementEmergencyContactPhone = RenseignementEmergencyContactPhone; 
            renseignements[index].RenseignementInsuranceAddress = RenseignementInsuranceAddress; 
            renseignements[index].RenseignementInsuranceName = RenseignementInsuranceName; 
            renseignements[index].RenseignementMutualAddress = RenseignementMutualAddress; 
            renseignements[index].RenseignementMutualName = RenseignementMutualName; 
            renseignements[index].RenseignementTierceName = RenseignementTierceName;
            renseignements[index].RenseignementTierceAddress = RenseignementTierceAddress;
            renseignements[index].RenseignementTiercePhone = RenseignementTiercePhone;
            renseignements[index].RenseignementTierce2Name = RenseignementTierce2Name;
            renseignements[index].RenseignementTierce2Address = RenseignementTierce2Address;
            renseignements[index].RenseignementTierce2Phone = RenseignementTierce2Phone;
            
        
            renseignements$.next(renseignements)
        }
        console.log(renseignements[index]);
}
export const findRenseignement = (id) =>{
    const renseignement = renseignements.find(r => r.id === parseInt(id))
    return renseignement;
} 







// childName, childBdate, childAge, childAddress, childEmail,childSchool, RenseignementResponsableName, RenseignementResponsableAddress, RenseignementResponsableEmail, RenseignementResponsablePhone, RenseignementResponsableFamilySit, RenseignementResponsablejob, RenseignementResponsableWorkplace, RenseignementResponsablePhoneWorkplace, RenseignementResponsableEmployer, RenseignementResponsableSecuNum, RenseignementResponsableAllocNum, RenseignementConjointName, RenseignementConjointJob, RenseignementConjointWorkplace, RenseignementConjointPhoneWorkplace, RenseignementConjointemployer, RenseignementEmergencyContactName, RenseignementEmergencyContactAddress, RenseignementEmergencyContactPhone, RenseignementInsuranceAddress, RenseignementInsuranceName, RenseignementMutualAddress, RenseignementMutualName, RenseignementAutorisationsHospitalisation, RenseignementAutorisationsFirstAid, RenseignementAutorisationsActivities, RenseignementAutorisationsImage