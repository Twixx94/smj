import React from 'react';
import { renseignements$ } from './Child/Child-rxjs';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import { deleteRenseignement } from './Child/Child-rxjs';
import { Link } from 'react-router-dom';

export const ChildList = ({id}) => {
  const [renseignements, setRenseignements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
    const val ='';
    useEffect(()=>{
      renseignements$.subscribe(newRenseignement => setRenseignements([...newRenseignement]))
  },[]);
  return (
    <div>
          <div className='search-box'>
            <input type="text" className='searchInput' placeholder='Search...' onChange={e =>{setSearchTerm(e.target.value)}} />
          </div>
           {renseignements.filter((val)=>{
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
                <td>{val.RenseignementResponsableName}</td>
                <td>{val.RenseignementResponsablePhone}</td>
                <td>
                <div className='icon-container'>
                <button><Link to={`/sanitaire/${val.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
                <button onClick={() => deleteRenseignement(val.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
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
         {renseignements.map((r) => (
          // console.log(r.name)
          <tr key={r.id}>
          <th scope="row">{r.id}</th>
          <td>{r.childName}</td>
          <td>{r.RenseignementResponsableName}</td>
          <td>{r.RenseignementResponsablePhone}</td>
          <td>
            <div className='icon-container'>
            <button><Link to={`/child/${r.id}`}><FontAwesomeIcon icon={faPencil} className="btn-icon" /> </Link></button>
            <button onClick={() => deleteRenseignement(r.id)}><FontAwesomeIcon icon={faTrash} className="btn-icon"/></button>
            </div>
          </td>
          </tr>
          ))}
      </tbody>
    </table>
      <div className='addBtn-container'>
        <button><Link to="/child/add"> <FontAwesomeIcon icon={faUserPlus} className="add-btn" /> </Link></button>
      </div>
    </div>
  </div>
  )
}
