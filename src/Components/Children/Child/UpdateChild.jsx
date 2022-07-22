import React from 'react'
import { useState } from 'react';
import { useParams} from 'react-router-dom';
import '../Children.css';
import { updateRenseignement, findRenseignement } from './Child-rxjs';
import { useNavigate } from 'react-router-dom';


export const UpdateChild = () => {
    const {id} = useParams();
    const renseignement = findRenseignement(id)
    console.log(renseignement)
    const [childName, setName] = useState(renseignement.childName);
    const [childBdate, setBdate] = useState(renseignement.childBdate);
    const [childAge, setAge] = useState(renseignement.childAge);
    const [childAddress, setAddress] = useState(renseignement.childAddress);
    const [childEmail, setEmail] = useState(renseignement.childEmail);
    const [childSchool, setSchool] = useState(renseignement.childSchool);
    const [RenseignementResponsableName, setResName] = useState(renseignement.RenseignementResponsableName);
    const [RenseignementResponsableAddress, setResAddress] = useState(renseignement.RenseignementResponsableAddress);
    const [RenseignementResponsableEmail, setResEmail] = useState(renseignement.RenseignementResponsableEmail);
    const [RenseignementResponsablePhone, setPhone] = useState(renseignement.RenseignementResponsablePhone);
    const [RenseignementResponsableFamilySit, setFamilySit] = useState(renseignement.RenseignementResponsableFamilySit);
    const [RenseignementResponsableJob, setJob] = useState(renseignement.RenseignementResponsableJob);
    const [RenseignementResponsableWorkplace, setWorkplace] = useState(renseignement.RenseignementResponsableWorkplace);
    const [RenseignementResponsablePhoneWorkplace, setPhoneWorkplace] = useState(renseignement.RenseignementResponsablePhoneWorkplace);
    const [RenseignementResponsableEmployer, setEmployer] = useState(renseignement.RenseignementResponsableEmployer);
    const [RenseignementResponsableSecuNum, setSecuNum] = useState(renseignement.RenseignementResponsableSecuNum);
    const [RenseignementResponsableAllocNum, setAllocNum] = useState(renseignement.RenseignementResponsableAllocNum);
    const [RenseignementConjointName, setResName2] = useState(renseignement.RenseignementConjointName);
    const [RenseignementConjointJob, setJob2] = useState(renseignement.RenseignementConjointJob);
    const [RenseignementConjointWorkplace, setWorkplace2] = useState(renseignement.RenseignementConjointWorkplace);
    const [RenseignementConjointPhoneWorkplace, setPhoneWorkplace2] = useState(renseignement.RenseignementConjointPhoneWorkplace);
    const [RenseignementConjointEmployer, setEmployer2] = useState(renseignement.RenseignementConjointEmployer);
    const [RenseignementEmergencyContactName, setUrgenceName] = useState(renseignement.RenseignementEmergencyContactName);
    const [RenseignementEmergencyContactAddress, setUrgenceAddress] = useState(renseignement.RenseignementEmergencyContactAddress);
    const [RenseignementEmergencyContactPhone, setUrgencePhone] = useState(renseignement.RenseignementEmergencyContactPhone);
    const [RenseignementInsuranceName, setNameInsu] = useState(renseignement.RenseignementInsuranceName);
    const [RenseignementInsuranceAddress, setAddressInsu] = useState(renseignement.RenseignementInsuranceAddress);
    const [RenseignementMutualAddress ,setAddressMutu] = useState(renseignement.RenseignementMutualAddress);
    const [RenseignementMutualName ,setNameMutu] = useState(renseignement.RenseignementMutualName);
    const [RenseignementAutorisationsHospitalisation, setHospitalisation] = useState(renseignement.RenseignementAutorisationsHospitalisation);
    const [RenseignementAutorisationsFirstAid, setFirstAid] = useState(renseignement.RenseignementAutorisationsFirstAid);
    const [RenseignementAutorisationsActivities, setActivities]= useState(renseignement.RenseignementAutorisationsActivities);
    const [RenseignementAutorisationsImage, setPhotography] = useState(renseignement.RenseignementAutorisationsImage);
    const [RenseignementTierceName, setTiercePersonneName] = useState(renseignement.RenseignementTierceName);
    const [RenseignementTiercePhone, setTiercePersonnePhone] = useState(renseignement.RenseignementTierceAddress);
    const [RenseignementTierceAddress, setTiercePersonneAddress] = useState(renseignement.RenseignementTiercePhone);
    const [RenseignementTierce2Name, setTiercePersonne2Name] = useState(renseignement.RenseignementTierce2Name);
    const [RenseignementTierce2Phone, setTiercePersonne2Phone] = useState(renseignement.RenseignementTierce2Address);
    const [RenseignementTierce2Address, setTiercePersonne2Address] = useState(renseignement.RenseignementTierce2Phone);
    const navigate = useNavigate();

    let [count, setCount] = useState(1);
    const handlePrev = (e) =>{
        e.preventDefault();
        if (count === 1)
            return setCount(count = 6)
        setCount(count -1)

    }
    
    const handleNext = (e) =>{
        e.preventDefault();
        if (count === 6) 
          return setCount(count = 1)
        setCount(count +1)

    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        updateRenseignement(id, childName, childBdate, childAge, childAddress, childEmail, childSchool, RenseignementResponsableName, RenseignementResponsablePhone, RenseignementResponsableAddress, RenseignementResponsableEmail,RenseignementResponsableFamilySit, RenseignementResponsableJob, RenseignementResponsableWorkplace, RenseignementResponsablePhoneWorkplace, RenseignementResponsableEmployer,RenseignementResponsableSecuNum, RenseignementResponsableAllocNum, RenseignementConjointName, RenseignementConjointJob, RenseignementConjointWorkplace, RenseignementConjointPhoneWorkplace, RenseignementConjointEmployer, RenseignementEmergencyContactName, RenseignementEmergencyContactAddress, RenseignementEmergencyContactPhone,RenseignementInsuranceName, RenseignementInsuranceAddress, RenseignementMutualName, RenseignementMutualAddress, RenseignementTierceName, RenseignementTierceAddress, RenseignementTiercePhone, RenseignementTierce2Name, RenseignementTierce2Address, RenseignementTierce2Phone);
        navigate('/list');
    };
      
      
    return(
        <div>
        <div className='container'>
        <div className='form-box'>
        <form onSubmit={handleUpdate}>
            <div className='logo'><a href="/"><span>S</span>MJ</a></div>
            <div className='progressbar'>
                <div style={{width: count === 1 ? "16.6%": count === 2 ? "33.2%": count === 3 ? "49.8%": count === 4 ? "66.4%": count === 5 ? "83%": "100%"}}></div>
            </div>
        <div className= {count === 1 ? '' : 'hidden'}>
            <h2>Enfant</h2>
            {/* Select sexe */}
            <input type="text" name='name' value={childName} onChange={e => setName(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='bdate' value={childBdate} onChange={e => setBdate(e.target.value)} placeholder="Date de naissance"/> <br />
            <input type="text" name='age' value={childAge} onChange={e => setAge(e.target.value)}  placeholder="Age" /> <br />
            <input type="text" name='address' value={childAddress} onChange={e => setAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='email' value={childEmail} onChange={e => setEmail(e.target.value)} placeholder="Mail" /> <br />
            <input type="text" name='school' value={childSchool} onChange={e => setSchool(e.target.value)} placeholder="Etablissement scolaire"/> <br />
        </div>
        <div className={count === 2 ? '' : 'hidden'}>
            <h2>Responsable de l'enfant</h2>
            <input type="text" name='resName' value={RenseignementResponsableName} onChange={e => setResName(e.target.value)}  placeholder="Nom et Prenom" /> <br />
            <input type="text" name='phone' value={RenseignementResponsablePhone}  onChange={e => setPhone(e.target.value)} placeholder="Telephone"/> <br />
            <input type="text" name='resAddress' value={RenseignementResponsableAddress}  onChange={e => setResAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='email' value={RenseignementResponsableEmail}  onChange={e => setResEmail(e.target.value)}  placeholder="Mail"/> <br />
            <input type="text" name='familySit' value={RenseignementResponsableFamilySit}  onChange={e => setFamilySit(e.target.value)}  placeholder="Situation Familiale"/> <br />
            <input type="text" name='job' value={RenseignementResponsableJob}  onChange={e => setJob(e.target.value)} placeholder="Profession"/> <br />
            <input type="text" name='workplace' value={RenseignementResponsableWorkplace}  onChange={e => setWorkplace(e.target.value)}  placeholder="Lieu de Travail"/> <br />
            <input type="text" name='phoneWorkplace' value={RenseignementResponsablePhoneWorkplace}  onChange={e => setPhoneWorkplace(e.target.value)} placeholder="Telephone travail"/> <br />
            <input type="text" name='employer' value={RenseignementResponsableEmployer}  onChange={e => setEmployer(e.target.value)} placeholder="Employeur"/> <br />
            <input type="text" name='secuNum' value={RenseignementResponsableSecuNum}  onChange={e => setSecuNum(e.target.value)} placeholder="N° de Sécurité Sociale" /> <br />
            <input type="text" name='allocNum' value={RenseignementResponsableAllocNum}  onChange={e => setAllocNum(e.target.value)} placeholder="N° d'allocataire C.A.F" /> <br /> 
        </div>
        <div className={count === 3 ? '' : 'hidden'}>
            <h2>Nom du conjoint</h2>
            <input type="text" name='resName2' value={RenseignementConjointName} onChange={e => setResName2(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='job2' value={RenseignementConjointJob} onChange={e => setJob2(e.target.value)}  placeholder="Profession"/> <br />
            <input type="text" name='workplace2' value={RenseignementConjointWorkplace} onChange={e => setWorkplace2(e.target.value)}  placeholder="Lieu de travail"/> <br />
            <input type="text" name='phoneWorkplace2' value={RenseignementConjointPhoneWorkplace} onChange={e => setPhoneWorkplace2(e.target.value)}  placeholder="Telephone travail"/> <br />
            <input type="text" name='employer2' value={RenseignementConjointEmployer} onChange={e => setEmployer2(e.target.value)} placeholder="Employeur"/> <br />
        </div>
        <div className={count === 4 ? '' : 'hidden'}>
            <h2>Personne à prévenir en cas d'urgence</h2>
            <input type="text" name='urgenceName' value={RenseignementEmergencyContactName} onChange={e => setUrgenceName(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='urgenceAddress' value={RenseignementEmergencyContactAddress} onChange={e => setUrgenceAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='urgencePhone' value={RenseignementEmergencyContactPhone} onChange={e => setUrgencePhone(e.target.value)} placeholder="Telephone"/> <br />
        </div>
        <div className={count === 5 ? '' : 'hidden'}>
            <h2>Assurance</h2>
            <input type="text" name='nameAssu' value={RenseignementInsuranceName} onChange={e => setNameInsu(e.target.value)} placeholder="Nom de l'assurance"/> <br/>
            <input type="text" name='nameAssu' value={RenseignementInsuranceAddress} onChange={e => setAddressInsu(e.target.value)} placeholder="Adresse de l'assurance"/> <br/>
            <input type="text" name='addressMutu' value={RenseignementMutualAddress} onChange={e => setAddressMutu(e.target.value)} placeholder="Adresse de votre mutuelle"/> <br />
            <input type="text" name='nameMutu' value={RenseignementMutualName} onChange={e => setNameMutu(e.target.value)}   placeholder="Nom votre mutuelle"/> <br /> 
        </div>
        <div className={count === 6 ? '' : 'hidden'}>
        <h2>Tierce personne autorisée à prendre en charge l'enfant après l'activités</h2>
            <h3>Personne 1:</h3>
            <input type="text" value={RenseignementTierceName} onChange={e => setTiercePersonneName(e.target.value)} placeholder="Nom et Prenom"/> <br/>
            <input type="text" value={RenseignementTierceAddress} onChange={e => setTiercePersonneAddress(e.target.value)} placeholder="Adresse"/> <br/>
            <input type="text" value={RenseignementTiercePhone} onChange={e => setTiercePersonnePhone(e.target.value)} placeholder="Telephone"/> <br/>
            <h3>Personne 2:</h3>
            <input type="text" value={RenseignementTierce2Name} onChange={e => setTiercePersonne2Name(e.target.value)} placeholder="Nom et prénom"/> <br/>
            <input type="text" value={RenseignementTierce2Address} onChange={e => setTiercePersonne2Address(e.target.value)} placeholder="Adresse"/> <br/>
            <input type="text" value={RenseignementTierce2Phone} onChange={e => setTiercePersonne2Phone(e.target.value)} placeholder="Telephone"/> <br/>
            </div>
        <div className='btn-group'>
        <span className='span-btn'>
            <input className='btn btn-prev' type="submit" value='Back' onClick={handlePrev} />
            <input className='btn btn-next' type="submit" value='Next' onClick={handleNext}/>
            <input className='btn btn-next' type="submit" value='Update'/>
        </span>
        </div>
        </form>
        </div>
        </div>
        </div>
    )
}
 {/* <div className={count === 3 ? '' : 'hidden'}>
            <h2>Nom du conjoint</h2>
           
        </div>
        <div className={count === 4 ? '' : 'hidden'}>
            <h2>Personne à prévenir en cas d'urgence</h2>
           
        </div>
        <div className={count === 5 ? '' : 'hidden'}>
            <h2>Assurance</h2>

        </div>
        <div className={count === 6 ? '' : 'hidden'}>
            <h2>Autorisations</h2> 
            <h3>J'autorise la direction, l'educateur sportif ou l'Accueil de Loisirs:</h3> <br />
            </div>

  {/* <input type="text" name='bdate' value={childBdate} onChange={e => setBdate(e.target.value)} placeholder="Date de naissance"/> <br />
            <input type="text" name='age' value={childAge} onChange={e => setAge(e.target.value)}  placeholder="Age" /> <br />
            <input type="text" name='address' value={childAddress} onChange={e => setAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='email' value={childEmail} onChange={e => setEmail(e.target.value)} placeholder="Mail" /> <br />
            <input type="text" name='school' value={childSchool} onChange={e => setSchool(e.target.value)} placeholder="Etablissement scolaire"/> <br /> */}

            {/* <input type="text" name='resAddress' value={RenseignementResponsableAddress}  onChange={e => setResAddress(e.target.value)} placeholder="Adresse"/> <br /> */}
            // <input type="text" name='email' value={RenseignementResponsableEmail}  onChange={e => setResEmail(e.target.value)}  placeholder="Mail"/> <br />
            // <input type="text" name='familySit' value={RenseignementResponsableFamilySit}  onChange={e => setFamilySit(e.target.value)}  placeholder="Situation Familiale"/> <br />
            // <input type="text" name='job' value={RenseignementResponsablejob}  onChange={e => setJob(e.target.value)} placeholder="Profession"/> <br />
            // <input type="text" name='workplace' value={RenseignementResponsableWorkplace}  onChange={e => setWorkplace(e.target.value)}  placeholder="Lieu de Travail"/> <br />
            // <input type="text" name='phoneWorkplace' value={RenseignementResponsablePhoneWorkplace}  onChange={e => setPhoneWorkplace(e.target.value)} placeholder="Telephone travail"/> <br />
            // <input type="text" name='employer' value={RenseignementResponsableEmployer}  onChange={e => setEmployer(e.target.value)} placeholder="Employeur"/> <br />
            // <input type="text" name='secuNum' value={RenseignementResponsableSecuNum}  onChange={e => setSecuNum(e.target.value)} placeholder="N° de Sécurité Sociale" /> <br />
            // <input type="text" name='allocNum' value={RenseignementResponsableAllocNum}  onChange={e => setAllocNum(e.target.value)} placeholder="N° d'allocataire C.A.F" /> <br /> 

             {/* <input type="text" name='resName2' value={RenseignementConjointName} onChange={e => setResName2(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='job2' value={RenseignementConjointJob} onChange={e => setJob2(e.target.value)}  placeholder="Profession"/> <br />
            <input type="text" name='workplace2' value={RenseignementConjointWorkplace} onChange={e => setWorkplace2(e.target.value)}  placeholder="Lieu de travail"/> <br />
            <input type="text" name='phoneWorkplace2' value={RenseignementConjointPhoneWorkplace} onChange={e => setPhoneWorkplace2(e.target.value)}  placeholder="Telephone travail"/> <br />
            <input type="text" name='employer2' value={RenseignementConjointemployer} onChange={e => setEmployer2(e.target.value)} placeholder="Employeur"/> <br /> */}

             {/* <input type="text" name='urgenceName' value={RenseignementEmergencyContactName} onChange={e => setUrgenceName(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='urgenceAddress' value={RenseignementEmergencyContactAddress} onChange={e => setUrgenceAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='urgencePhone' value={RenseignementEmergencyContactPhone} onChange={e => setUrgencePhone(e.target.value)} placeholder="Telephone"/> <br />
     */}

      {/* <input type="text" name='addressAssu' value={RenseignementInsuranceAddress} onChange={e => setAddressAssu(e.target.value)} placeholder="Adresse de l'assurance" /> <br />
            <input type="text" name='nameAssu' value={RenseignementInsuranceName} onChange={e => setNameAssu(e.target.value)} placeholder="Nom de l'assurance"/> <br/>
            <input type="text" name='addressMutu' value={RenseignementMutualAddress} onChange={e => setAddressMutu(e.target.value)} placeholder="Adresse de votre mutuelle"/> <br />
            <input type="text" name='nameMutu' value={RenseignementMutualName} onChange={e => setNameMutu(e.target.value)}   placeholder="Nom votre mutuelle"/> <br /> */}

              {/* <label> A faire hospitaliser, mon enfant en cas de nécessité (suivant les recommandations du corps médical).</label>
            <input className='checkbox' type="checkbox" checked={RenseignementAutorisationsHospitalisation} name="check1" onChange={e =>setHospitalisation(e.target.checked)} />
            <label> A donner les premiers soins d'urgence</label>
            <input className='checkbox' type="checkbox" checked={RenseignementAutorisationsFirstAid} name="check2" onChange={e =>setFirstAid(e.target.checked)} />
            <label> A faire participer mon enfant à toutes les activités de l'Accueil de Loisirs</label>
            <input className='checkbox' type="checkbox" checked={RenseignementAutorisationsActivities} name="check3" onChange={e =>setActivities(e.target.checked)} />
            <label> A faire photographier, filmer mon enfant et utiliser les documents pour les expositions, dans un but non lucratif</label>
            <input className='checkbox' type="checkbox" checked={RenseignementAutorisationsImage} name="check4" onChange={e =>setPhotography(e.target.checked)} />
      */} 

    // const [renseignements, setRenseignements] = useState([]);
    // const [childName, setName] = useState('');
    // const [childBdate, setBdate] = useState('');
    // const [childAge, setAge] = useState('');
    // const [childAddress, setAddress] = useState('');
    // const [childEmail, setEmail] = useState('');
    // const [childSchool, setSchool] = useState('');
    // const [RenseignementResponsableName, setResName] = useState('');
    // const [RenseignementResponsableAddress, setResAddress] = useState('');
    // const [RenseignementResponsableEmail, setResEmail] = useState('');
    // const [RenseignementResponsablePhone, setPhone] = useState('');
    // const [RenseignementResponsableFamilySit, setFamilySit] = useState('');
    // const [RenseignementResponsablejob, setJob] = useState('');
    // const [RenseignementResponsableWorkplace, setWorkplace] = useState('');
    // const [RenseignementResponsablePhoneWorkplace, setPhoneWorkplace] = useState('');
    // const [RenseignementResponsableEmployer, setEmployer] = useState('');
    // const [RenseignementResponsableSecuNum, setSecuNum] = useState('');
    // const [RenseignementResponsableAllocNum, setAllocNum] = useState('');
    // const [RenseignementConjointName, setResName2] = useState('');
    // const [RenseignementConjointJob, setJob2] = useState('');
    // const [RenseignementConjointWorkplace, setWorkplace2] = useState('');
    // const [RenseignementConjointPhoneWorkplace, setPhoneWorkplace2] = useState('');
    // const [RenseignementConjointemployer, setEmployer2] = useState('');
    // const [RenseignementEmergencyContactName, setUrgenceName] = useState('');
    // const [RenseignementEmergencyContactAddress, setUrgenceAddress] = useState('');
    // const [RenseignementEmergencyContactPhone, setUrgencePhone] = useState('');
    // const [RenseignementInsuranceAddress, setAddressAssu] = useState('');
    // const [RenseignementInsuranceName, setNameAssu] = useState('');
    // const [RenseignementMutualAddress ,setAddressMutu] = useState('');
    // const [RenseignementMutualName ,setNameMutu] = useState('');
    // const [RenseignementAutorisationsHospitalisation, setHospitalisation] = useState(false);
    // const [RenseignementAutorisationsFirstAid, setFirstAid] = useState(false);
    // const [RenseignementAutorisationsActivities, setActivities]= useState(false);
    // const [RenseignementAutorisationsImage, setPhotography] = useState(false);

        
// const u = {  
//     id: Date.now(),
//     childName: childName,
//     childBdate: childBdate,
//     childAge: childAge,
//     childAddress: childAddress,
//     childEmail: childEmail,
//     childSchool: childSchool,
//     RenseignementResponsableName: RenseignementResponsableName,
//     RenseignementResponsableAddress: RenseignementResponsableAddress,
//     RenseignementResponsableEmail: RenseignementResponsableEmail,
//     RenseignementResponsablePhone: RenseignementResponsablePhone,
//     RenseignementResponsableFamilySit: RenseignementResponsableFamilySit,
//     RenseignementResponsablejob: RenseignementResponsablejob,
//     RenseignementResponsableWorkplace : RenseignementResponsableWorkplace,
//     RenseignementResponsablePhoneWorkplace: RenseignementResponsablePhoneWorkplace,
//     RenseignementResponsableEmployer: RenseignementResponsableEmployer,
//     RenseignementResponsableSecuNum: RenseignementResponsableSecuNum,
//     RenseignementResponsableAllocNum: RenseignementResponsableAllocNum,
//     RenseignementConjointName: RenseignementConjointName,
//     RenseignementConjointJob: RenseignementConjointJob,
//     RenseignementConjointWorkplace: RenseignementConjointWorkplace,
//     RenseignementConjointPhoneWorkplace: RenseignementConjointPhoneWorkplace,
//     RenseignementConjointemployer: RenseignementConjointemployer,
//     RenseignementEmergencyContactName: RenseignementEmergencyContactName,
//     RenseignementEmergencyContactAddress: RenseignementEmergencyContactAddress,
//     RenseignementEmergencyContactPhone: RenseignementEmergencyContactPhone,
//     RenseignementInsuranceAddress: RenseignementInsuranceAddress,
//     RenseignementInsuranceName: RenseignementInsuranceName,
//     RenseignementMutualAddress: RenseignementMutualAddress,
//     RenseignementMutualName: RenseignementMutualName,
//     RenseignementAutorisationsHospitalisation: RenseignementAutorisationsHospitalisation,
//     RenseignementAutorisationsFirstAid: RenseignementAutorisationsFirstAid,
//     RenseignementAutorisationsActivities: RenseignementAutorisationsActivities,
//     RenseignementAutorisationsImage: RenseignementAutorisationsImage
// }

//        setChild(child.push(u))
//        console.log(child)
// const state = {
//          renseignement: [{
//            child:{ 
//             id: 1, 
//             name: '',
//             bdate: '',
//             age: '',
//             address: '',
//             email: '',
//             school: '',
//            },
//             responsable:{
//                 name: '',
//                 address: '',
//                 phone: '',
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
//     }
