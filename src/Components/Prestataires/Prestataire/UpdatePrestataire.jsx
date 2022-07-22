import React from 'react'
import { ReactDOM } from 'react-dom';
import '../../Children/Children.css';
import '../../Sanitaires/Sanitaires.css'
import { useState} from 'react';
import { updatePrestataire, findPrestataire } from './Prestataire-rxjs';
import { useNavigate, useParams } from 'react-router-dom';


export const UpdatePrestataire = () => {
    const {id} = useParams();
    const prestataire = findPrestataire(id)
    console.log(prestataire)
    const [prestataireSocietyName, setSocietyName ] = useState(prestataire.prestataireSocietyName);
    const [prestataireContactName, setContactName ] = useState(prestataire.prestataireContactName);
    const [prestatairePhone, setPhone ] = useState(prestataire.prestatairePhone);
    const [prestataireAddress, setAddress ] = useState(prestataire.prestataireAddress);
    const [prestataireSiret, setSiret ] = useState(prestataire.prestataireSiret);
    const[prestataireAPE, setAPE]  = useState(prestataire.prestataireAPE);
    const[prestataireCheck, setCheck]  = useState(prestataire.prestataireCheck);
    const[prestataireCash, setCash]  = useState(prestataire.prestataireCash);
    const[prestatairePurshaseOrder, setPurshaseOrder]  = useState(prestataire.prestatairePurshaseOrder);
    const[prestataireNote, setNote]  = useState(prestataire.prestataireNote);
    const navigate = useNavigate();
  

    const handleUpdate = (e) =>{
        e.preventDefault();
        updatePrestataire(id, prestataireSocietyName, prestataireContactName, prestatairePhone, prestataireAddress, prestataireSiret, prestataireAPE, prestataireCash, prestataireCheck, prestatairePurshaseOrder, prestataireNote);
        navigate('/prestataire');
      };

     return(
        <div>
        <div className='container'>
        <div className='form-box'>
        <form onSubmit={handleUpdate}>
        <div className='logo'><a href="/"><span>S</span>MJ</a></div>
            <h2>Enfant</h2>
            <div>
            <input type="text" value={prestataireSocietyName} onChange={e => setSocietyName(e.target.value)} placeholder="Nom de la Societe"/> <br />
            <input type="text" value={prestataireContactName} onChange={e => setContactName(e.target.value)} placeholder="Nom du Contact"/> <br />
            <input type="text" value={prestatairePhone} onChange={e => setPhone(e.target.value)} placeholder="Telephone"/> <br />
            <input type="text" value={prestataireAddress} onChange={e => setAddress(e.target.value)} placeholder="Adresse"/> <br />
            <input type="text" value={prestataireSiret} onChange={e => setSiret(e.target.value)} placeholder="Siret"/> <br />
            <input type="text" value={prestataireAPE} onChange={e => setAPE(e.target.value)} placeholder="APE"/> <br />
            <select name="payment" id="payment" placeholder='paiement par:'>
                <option value={prestataireCheck} onChange={e => setCheck(e.target.value)}>
                    chèque
                </option>
                <option value={prestataireCash} onChange={e => setCash(e.target.value)}> 
                    espèce
                </option>
                <option value={prestatairePurshaseOrder} onChange={e => setPurshaseOrder(e.target.value)}>
                    bon de commande
                </option>
            </select> <br />
                <div className='textarea-box'>
                    <textarea type="text" value={prestataireNote} onChange={e => setNote(e.target.value)} placeholder="Note"/> <br />
                </div>
            </div>
        <div className='btn-group'>
        <span className='span-btn'>
            <input className='btn btn-next' type="submit" value='Mettre à jour'/>
        </span>
        </div>
        </form>
        </div>
        </div>
        </div>
    )
}