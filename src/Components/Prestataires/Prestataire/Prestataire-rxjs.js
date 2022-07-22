import { BehaviorSubject} from "rxjs";


const prestataires = [
    {
        "id": 1,
        "prestataireSocietyName":"Efrei",
        "prestataireContactName":"Didier",
        "prestatairePhone":"0987656",
        "prestataireAddress":"",
        "prestataireSiret":"",
        "prestataireAPE":"",
        "prestataireCheck":"",
        "prestataireCash":"",
        "prestatairePurshaseOrder":"",
        "prestataireNote":"Attention"

    }
]

export const prestataires$ = new BehaviorSubject(prestataires);

export const addPrestataire = (prestataireSocietyName, prestataireContactName, prestatairePhone, prestataireAddress, prestataireSiret, prestataireAPE, prestataireCash, prestataireCheck, prestatairePurshaseOrder, prestataireNote) =>{
    console.log('rxjs');
    prestataires.push({
    id: Date.now(),
    prestataireSocietyName : prestataireSocietyName,
    prestataireContactName : prestataireContactName, 
    prestatairePhone : prestatairePhone, 
    prestataireAddress : prestataireAddress, 
    prestataireSiret : prestataireSiret, 
    prestataireAPE : prestataireAPE,
    prestataireCheck : prestataireCheck, 
    prestataireCash : prestataireCash,
    prestatairePurshaseOrder : prestatairePurshaseOrder, 
    prestataireNote : prestataireNote

    });
    console.log(prestataires)
    prestataires$.next(prestataires)
}
export const deletePrestataire = (id) =>{
    const index = prestataires.findIndex(p=> p.id === parseInt(id));
    console.log(index)

    if(index > -1){
        prestataires.splice(index,1);

        prestataires$.next(prestataires);
    }
    
}
export const updatePrestataire = (id, prestataireSocietyName, prestataireContactName, prestatairePhone, prestataireAddress, prestataireSiret, prestataireAPE, prestataireCash, prestataireCheck, prestatairePurshaseOrder, prestataireNote) =>{
        const index = prestataires.findIndex(s=> s.id == id)
        if(index > -1){
            prestataires[index].prestataireSocietyName = prestataireSocietyName;
            prestataires[index].prestataireContactName = prestataireContactName; 
            prestataires[index].prestatairePhone = prestatairePhone; 
            prestataires[index].prestataireAddress = prestataireAddress; 
            prestataires[index].prestataireSiret = prestataireSiret; 
            prestataires[index].prestataireAPE = prestataireAPE;
            prestataires[index].preprestataireCash = prestataireCash; 
            prestataires[index].prestataireCheck = prestataireCheck;
            prestataires[index].prestatairePurshaseOrder = prestatairePurshaseOrder; 
            prestataires[index].prestataireNote = prestataireNote;
           
            prestataires$.next(prestataires)
        }
        console.log(prestataires[index]);
}
export const findPrestataire = (id) =>{
    const prestataire = prestataires.find(p => p.id === parseInt(id))
    return prestataire;
} 

