import React from 'react'
import { ReactDOM } from 'react-dom';
import '../../Children/Children.css';
import '../Sanitaires.css'
import { useState } from 'react';
import { updateSanitaire, findSanitaire } from './Sanitaire-rxjs';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateSanitaire = () => {
    const {id} = useParams();
    const sanitaire = findSanitaire(id)
    console.log(sanitaire)
    const [childName, setName] = useState(sanitaire.childName);
    const [childSexe, setSexe] = useState(sanitaire.childSexe);
    const [childBdate, setBdate] = useState(sanitaire.childBdate);
    const [SanitaireResponsableName, setSanName] = useState(sanitaire.SanitaireResponsableName);
    const [SanitaireResponsableAddress, setSanAddress] = useState(sanitaire.SanitaireResponsableAddress);
    const [SanitaireResponsableNumSS, setSanNumSS] = useState(sanitaire.SanitaireResponsableNumSS);
    const [SanitaireResponsableHomePhone, setHomePhone] = useState(sanitaire.SanitaireResponsableHomePhone);
    const [SanitaireResponsableOfficePhone, setOfficePhone] = useState(sanitaire.SanitaireResponsableOfficePhone);
    const [SanitaireResponsableAddressCentrePayeur, setAddressCentrePayeur] =  useState(sanitaire.SanitaireResponsableAddressCentrePayeur);
    const [SanitaireVaccinations, setSanVaccinations] =  useState(sanitaire.SanitaireVaccinations);
    const [SanitaireVaccinationTuberculeuse, setSanVaccinationTuberculeuse] =  useState(sanitaire.SanitaireVaccinationTuberculeuse);
    const [SanitaireVaccinationVariolique, setSanVaccinationVariolique] =  useState(sanitaire.SanitaireVaccinationVariolique);
    const [SanitaireVaccinationOtherVax, setSanVaccinationOtherVax] =  useState(sanitaire.SanitaireVaccinationOtherVax);
    const [SanitaireVaccinationNonVax, setSanVaccinationNonVax] =  useState(sanitaire.SanitaireVaccinationNonVax);
    const [SanitaireVaccinationSerum, setSanVaccinationSerum] =  useState(sanitaire.SanitaireVaccinationSerum);
    const [rubeole1, setSanRubeole1] =  useState(sanitaire.rubeole1);
    const [rubeole2, setSanRubeole2] =  useState(sanitaire.rubeole2);
    const [varicelle1, setSanVaricelle1] =  useState(sanitaire.varicelle1);
    const [varicelle2, setSanVaricelle2] =  useState(sanitaire.varicelle2);
    const [angine1, setSanAngine1] =  useState(sanitaire.angine1);
    const [angine2, setSanAngine2] =  useState(sanitaire.angine2);
    const [rhumatismes1, setSanRhumatisme1] =  useState(sanitaire.rhumatismes1);
    const [rhumatismes2, setSanRhumatisme2] =  useState(sanitaire.rhumatismes2);
    const [scarlatine1, setSanScarlatine1] =  useState(sanitaire.scarlatine1);
    const [scarlatine2, setSanScarlatine2] =  useState(sanitaire.scarlatine2);
    const [coqueluche1, setSanCoqueluche1] =  useState(sanitaire.coqueluche1);
    const [coqueluche2, setSanCoqueluche2] =  useState(sanitaire.coqueluche2);
    const [otites1, setSanOtites1] =  useState(sanitaire.otites1);
    const [otites2, setSanOtites2] =  useState(sanitaire.otites2);
    const [asthme1, setSanAsthme1] =  useState(sanitaire.asthme1);
    const [asthme2, setSanAsthme2] =  useState(sanitaire.asthme2);
    const [rougeole1, setSanRougeole1] =  useState(sanitaire.rougeole1);
    const [rougeole2, setSanRougeole2] =  useState(sanitaire.rougeole2);
    const [oreillon1, setSanOreillon1] =  useState(sanitaire.oreillon1);
    const [oreillon2, setSanOreillon2] =  useState(sanitaire.oreillon2);
    const [othersdifficulties, setSanOtherDifficulties] =  useState(sanitaire.othersdifficulties);
    const [actualTraitment1, setSanActualTraitment1] =  useState(sanitaire.actualTraitment1);
    const [actualTraitment2, setSanActualTraitment2] =  useState(sanitaire.actualTraitment2);
    const [actualTraitmentDetails, setSanActualTraitmentDetails] =  useState(sanitaire.actualTraitmentDetails);
    const [regle1, setSanRegle1] =  useState(sanitaire.regle1);
    const [regle2, setSanRegle2] =  useState(sanitaire.regle2);
    const navigate = useNavigate();

    let [count, setCount] = useState(1);
    const handlePrev = (e) =>{
        e.preventDefault();
        if (count === 1)
            return setCount(count = 5)
        setCount(count -1)

    }
    
    const handleNext = (e) =>{
        e.preventDefault();
        if (count === 5) 
          return setCount(count = 1)
        setCount(count +1)

    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        updateSanitaire(id, childName, childSexe, childBdate, SanitaireResponsableName, SanitaireResponsableAddress, SanitaireResponsableNumSS, SanitaireResponsableHomePhone, SanitaireResponsableOfficePhone, SanitaireResponsableAddressCentrePayeur, SanitaireVaccinationNonVax, SanitaireVaccinationOtherVax, SanitaireVaccinationSerum, SanitaireVaccinationTuberculeuse, SanitaireVaccinationVariolique, angine1, angine2, rougeole1, rougeole2, rubeole1, rubeole2, rhumatismes1, rhumatismes2, scarlatine1, scarlatine2, coqueluche1, coqueluche2, asthme1, asthme2, oreillon1, oreillon2, otites1, otites2, varicelle1, varicelle2, actualTraitment1, actualTraitment2, actualTraitmentDetails, othersdifficulties, regle1, regle2, SanitaireVaccinations);
        navigate('/list2');
    };
  
      return(
        <div>
        <div className='container'>
        <div className='form-box'>
        <form onSubmit={handleUpdate}>
        <div className='logo'><a href="/"><span>S</span>MJ</a></div>
            <div className='progressbar'>
                <div style={{width: count === 1 ? "16.6%": count === 1 ? "20%": count === 2 ? "40%": count === 3 ? "60%": count === 4 ? "80%": "100%"}}></div>
            </div>
        <div className= {count === 1 ? '' : 'hidden'}>
            <h2>Enfant</h2>
            {/* Select sexe */}
            <input type="text" name='name' value={childName} onChange={e => setName(e.target.value)} placeholder="Nom et Prenom"/> <br />
            <input type="text" name='sexe' value={childSexe} onChange={e => setSexe(e.target.value)} placeholder="Sexe"/> <br />
            <input type="text" name='bdate' value={childBdate} onChange={e => setBdate(e.target.value)} placeholder="Date de naissance"/> <br />
        </div>
        <div className={count === 2 ? '' : 'hidden'}>
            <h2>Vaccinations</h2>
          <div className='textarea-box'> <textarea placeholder="Vaccins pratiqués et Dates"  value={SanitaireVaccinations} onChange={e => setSanVaccinations(e.target.value)} /> </div><br />
            <label>Antituberculeuse (BGC)</label>
            <input type="text" name='name' value={SanitaireVaccinationTuberculeuse} onChange={e => setSanVaccinationTuberculeuse(e.target.value)} placeholder="Dates"/> <br />
            <label>Antivariolique</label>
            <input type="text" name='name' value={SanitaireVaccinationVariolique} onChange={e => setSanVaccinationVariolique(e.target.value)} placeholder="Dates"/> <br />
            <label>Autres Vaccins</label>
           <div className='textarea-box'> <textarea placeholder="Vaccin et Date" value={SanitaireVaccinationOtherVax} onChange={e => setSanVaccinationOtherVax(e.target.value)}/> </div> <br />
            <h3>Enfant non vacciné</h3>
           <div className='textarea-box'> <textarea placeholder="Raisons" value={SanitaireVaccinationNonVax} onChange={e => setSanVaccinationNonVax(e.target.value)}/> </div> <br />
            <label>Injections de Sérum</label>
           <div className='textarea-box'> <textarea placeholder="Natures et Dates" value={SanitaireVaccinationSerum} onChange={e => setSanVaccinationSerum(e.target.value)}/> </div><br />        
        </div>
        <div className={count === 3 ? '' : 'hidden'}>
            <h2>Renseignements Medicaux</h2>
            <h3>L'Enfant a t-il deja eu les maladies suivantes: </h3>
            <div className='vaccin-parent'>
                <div className='vaccin-child1'>
                    <div className='radio-box'>
                        <h4>Rubeole</h4>
                        <input type="radio" className='radio-btn' name='Rubeole' checked={rubeole1} onChange={e => setSanRubeole1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Rubeole' checked={rubeole2} onChange={e => setSanRubeole2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Varicelle</h4>
                        <input type="radio" className='radio-btn' name='Varicelle' checked={varicelle1} onChange={e => setSanVaricelle1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Varicelle' checked={varicelle2} onChange={e => setSanVaricelle2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Angines</h4>
                        <input type="radio" className='radio-btn' name='Angines' checked={angine1} onChange={e => setSanAngine1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Angines' checked={angine2} onChange={e => setSanAngine2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Rhumatismes</h4>
                        <input type="radio" className='radio-btn' name='Rhumatismes' checked={rhumatismes1} onChange={e => setSanRhumatisme1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Rhumatismes' checked={rhumatismes2} onChange={e => setSanRhumatisme2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Scarlatine</h4>
                        <input type="radio" className='radio-btn' name='Scarlatine' checked={scarlatine1} onChange={e => setSanScarlatine1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Scarlatine' checked={scarlatine2} onChange={e => setSanScarlatine2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                </div>
                <div className='vaccin-child2'>
                    <div className='radio-box'>
                        <h4>Coqueluche</h4>
                        <input type="radio" className='radio-btn' name='Coqueluche' checked={coqueluche1} onChange={e => setSanCoqueluche1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Coqueluche' checked={coqueluche2} onChange={e => setSanCoqueluche2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Otites</h4>
                        <input type="radio" className='radio-btn' name='Otites' checked={otites1} onChange={e => setSanOtites1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Otites' checked={otites2} onChange={e => setSanOtites2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Asthme</h4>
                        <input type="radio" className='radio-btn' name='Asthme' checked={asthme1} onChange={e => setSanAsthme1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Asthme' checked={asthme2} onChange={e => setSanAsthme2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Rougeole</h4>
                        <input type="radio" className='radio-btn' name='Rougeole' checked={rougeole1} onChange={e => setSanRougeole1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Rougeole' checked={rougeole2} onChange={e => setSanRougeole2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                    <div className='radio-box'>
                        <h4>Oreillons</h4>
                        <input type="radio" className='radio-btn' name='Oreillons' checked={oreillon1} onChange={e => setSanOreillon1(e.target.checked)}/>
                        <label>oui</label><br />
                        <input type="radio" className='radio-btn' name='Oreillons' checked={oreillon2} onChange={e => setSanOreillon2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
                </div>
            </div>
            <h3>Autres difficultées de santé:</h3>
           <div className='textarea-box'> <textarea placeholder="Natures et Dates" value={othersdifficulties} onChange={e => setSanOtherDifficulties(e.target.value)}/> </div> <br />         
        </div>
        <div className={count === 4 ? '' : 'hidden'}>
            <h2>Recommandation des Parents</h2>
            <div className='radio-box'>
                <h4>L'Enfant suit un traitement actuellement</h4>
                    <div>
                        <input type="radio" className='radio-btn' name='traitement'checked={actualTraitment1} onChange={e => setSanActualTraitment1(e.target.checked)}/>
                        <label>oui</label><br />
                    </div>
                    <div>
                        <input type="radio" className='radio-btn' name='traitement'checked={actualTraitment2} onChange={e => setSanActualTraitment2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
            </div>
           <div className='textarea-box'> <textarea placeholder="Si oui, traitements: " value={actualTraitmentDetails} onChange={e => setSanActualTraitmentDetails(e.target.value)}/></div><br />   
            <div className='radio-box'>
                <h4>S'il s'agit d'une fille est-elle réglée:</h4>
                    <div>
                        <input type="radio" className='radio-btn' name='regle' checked={regle1} onChange={e => setSanRegle1(e.target.checked)}/>
                        <label>oui</label><br />
                    </div>
                    <div>
                        <input type="radio" className='radio-btn' name='regle' checked={regle2} onChange={e => setSanRegle2(e.target.checked)}/>
                        <label>non</label><br />
                    </div>
            </div>
        </div>
        <div className={count === 5 ? '' : 'hidden'}>
            <h2>Responsable de l'Enfant</h2>
            <input type="text" name='resName' value={SanitaireResponsableName} onChange={e => setSanName(e.target.value)}  placeholder="Nom et Prenom" /> <br />
            <input type="text" name='resAddress' value={SanitaireResponsableAddress}  onChange={e => setSanAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" name='email' value={SanitaireResponsableNumSS}  onChange={e => setSanNumSS(e.target.value)}  placeholder="Numero de SS"/> <br />
            <input type="text" name='HomePhone' value={SanitaireResponsableHomePhone}  onChange={e => setHomePhone(e.target.value)} placeholder="Telephone Domicile"/> <br />
            <input type="text" name='officePhone' value={SanitaireResponsableOfficePhone}  onChange={e => setOfficePhone(e.target.value)}  placeholder="Telephone Bureau"/> <br />
            <input type="text" name='adressCentrePayeur' value={SanitaireResponsableAddressCentrePayeur}  onChange={e => setAddressCentrePayeur(e.target.value)} placeholder="Adresse du Centre Payeur"/> <br />
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
