import React from 'react'
import '../../Children/Children.css';
import '../../Sanitaires/Sanitaires.css'
import { useState } from 'react';
import { addPrestataire } from './Prestataire-rxjs';
import { useNavigate } from 'react-router-dom';


export const AddPrestataire = () => {

    const [prestataireSocietyName, setSocietyName ] = useState('');
    const [prestataireContactName, setContactName ] = useState('');
    const [prestatairePhone, setPhone ] = useState('');
    const [prestataireAddress, setAddress ] = useState('');
    const [prestataireSiret, setSiret ] = useState('');
    const[prestataireAPE, setAPE]  = useState('');
    const[prestataireCheck, setCheck]  = useState('');
    const[prestataireCash, setCash]  = useState('');
    const[prestatairePurshaseOrder, setPurshaseOrder]  = useState('');
    const[prestataireNote, setNote]  = useState('');
    const navigate = useNavigate();
  

    const handleAdd = (e) =>{
        e.preventDefault();
        addPrestataire(prestataireSocietyName, prestataireContactName, prestatairePhone, prestataireAddress, prestataireSiret, prestataireAPE, prestataireCash, prestataireCheck, prestatairePurshaseOrder, prestataireNote);
        navigate('/prestataire');
      };

     return(
        <div>
        <div className='container'>
        <div className='form-box'>
        <form onSubmit={handleAdd}>
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
                    <p>chèque</p>
                </option>
                <option value={prestataireCash} onChange={e => setCash(e.target.value)}> 
                    <p>espèce</p>
                </option>
                <option value={prestatairePurshaseOrder} onChange={e => setPurshaseOrder(e.target.value)}>
                    <p>bon de commande</p>
                </option>
            </select> <br />
                <div className='textarea-box'>
                    <textarea type="text" value={prestataireNote} onChange={e => setNote(e.target.value)} placeholder="Note"/> <br />
                </div>
            </div>
        <div className='btn-group'>
        <span className='span-btn'>
            <input className='btn btn-next' type="submit" value='Valider'/>
        </span>
        </div>
        </form>
        </div>
        </div>
        </div>
    )
}