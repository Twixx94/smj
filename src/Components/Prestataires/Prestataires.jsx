import React from 'react'
import { deletePrestataire, prestataires$ } from './Prestataire/Prestataire-rxjs';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Prestataires.css';
export const Prestataires = () => {

    const [prestataires, setPrestataires] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const val ='';
    useEffect(()=>{
      prestataires$.subscribe(newPrestataire => setPrestataires([...newPrestataire]))
  },[]);

  return (
        <div>
          <div className='search-box'>
            <input type="text" className='searchInput' placeholder='Search...' onChange={e =>{setSearchTerm(e.target.value)}} />
          </div>
           {prestataires.filter((val)=>{
            if (searchTerm == ""){
              return ""
            }else if (val.prestataireSocietyName.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
           }).map((val, key)=>{
            return <div key={key}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Prestataire</th>
                <th>Contact</th>
                <th>Telephone</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tbody>
                <tr key={val.id}>
                <th scope="row">{val.id}</th>
                <td>{val.prestataireSocietyName}</td>
                <td>{val.prestataireContactName}</td>
                <td>{val.prestataireNote}</td>
                <td>
                <div className='icon-container'>
                <button><Link to={`/prestataire/${val.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
                <button onClick={() => deletePrestataire(val.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
                </div>
                </td>
                </tr>
              </tbody>
          </table>
          </div>
           })}

          <div className= {searchTerm === val ? '' : 'hiddeTab'}>
          <table>
            <thead>
            <tr>
              <th id='id'>#</th>
              <th>Prestataire</th>
              <th>Contact</th>
              <th>Telephone</th>
              <th>Note</th>
              <th>Actions</th>
             </tr>
             </thead>
             <tbody>
             {prestataires.map((p) => (
              // console.log(r.name)
              <tr key={p.id}>
              <th scope="row">{p.id}</th>
              <td>{p.prestataireSocietyName}</td>
              <td>{p.prestataireContactName}</td>
              <td>{p.prestatairePhone}</td>
              <td>{p.prestataireNote}</td>
              <td>
                <div className='icon-container'>
                <button><Link to={`/prestataire/${p.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
                <button onClick={() => deletePrestataire(p.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
                </div>
              </td>
              </tr>
              ))}
          </tbody>
        </table>
        <div className='addBtn-container'>
        <button><Link to="/prestataire/add"> <FontAwesomeIcon icon={faUserPlus} className="add-btn" /> </Link></button>
        </div>
        </div>
        </div>
  )
}
