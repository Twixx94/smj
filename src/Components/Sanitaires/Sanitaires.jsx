import React from 'react'
import { sanitaires$ } from './Sanitaire/Sanitaire-rxjs';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import { deleteSanitaire } from './Sanitaire/Sanitaire-rxjs';
import { Link } from 'react-router-dom';

export const Sanitaires = () => {
    const [sanitaires, setSanitaires] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const val ='';
    useEffect(()=>{
      sanitaires$.subscribe(newSanitaire => setSanitaires([...newSanitaire]))
  },[]);

  return (
        <div>
          <div className='search-box'>
            <input type="text" className='searchInput' placeholder='Search...' onChange={e =>{setSearchTerm(e.target.value)}} />
          </div>
           {sanitaires.filter((val)=>{
            if (searchTerm == ""){
              return ""
            }else if (val.childName.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
           }).map((val, key)=>{
            return <div key={key}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Enfant</th>
                <th>Responsable</th>
                <th>Responsable Telephone</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tbody>
                <tr key={val.id}>
                <th scope="row">{val.id}</th>
                <td>{val.childName}</td>
                <td>{val.SanitaireResponsableName}</td>
                <td>{val.SanitaireResponsableHomePhone}</td>
                <td>
                <div className='icon-container'>
                <button><Link to={`/sanitaire/${val.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
                <button onClick={() => deleteSanitaire(val.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
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
              <th>#</th>
              <th>Enfant</th>
              <th>Responsable</th>
              <th>Responsable Telephone</th>
              <th>Actions</th>
             </tr>
             </thead>
             <tbody>
             {sanitaires.map((s) => (
              // console.log(r.name)
              <tr key={s.id}>
              <th scope="row">{s.id}</th>
              <td>{s.childName}</td>
              <td>{s.SanitaireResponsableName}</td>
              <td>{s.SanitaireResponsableHomePhone}</td>
              <td>
                <div className='icon-container'>
                <button><Link to={`/sanitaire/${s.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
                <button onClick={() => deleteSanitaire(s.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
                </div>
              </td>
              </tr>
              ))}
          </tbody>
        </table>
        <div className='addBtn-container'>
        <button><Link to="/sanitaire/add"> <FontAwesomeIcon icon={faUserPlus} className="add-btn" /> </Link></button>
        </div>
        </div>
        </div>
  )
}
