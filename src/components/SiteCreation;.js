import './Form.css';
import React from 'react';

const SiteCreation = () => {
  const onSubmitHandler = (event) => {
    console.log(JSON.stringify(event))
    event.preventDefault();
//Form submission happens here
}
    return (
      <div className="log-form">
    <div className="formss">Create Site</div>
    <form onSubmit={onSubmitHandler}>
      <input type="text" title="name" placeholder="Name" />
      <input type="text" title="address" placeholder="Address" />
      <input type="text" title="location" placeholder="Location" />
      <input type="text" title="description" placeholder="Description" />
      <button type="submit" class="btn">Create New Site</button>
    </form>
  </div>
    );  
  }
  
export default SiteCreation;