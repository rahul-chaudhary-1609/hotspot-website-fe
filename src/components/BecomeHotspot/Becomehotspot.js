import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import Commanheadbg from "../Commanheadbg";
import {apiConstatnts} from "../../constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Becomehotspot() {

  const [institute, setInstitute] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  let handleSubmit=(e)=>{
    e.preventDefault();
    
    let data={
      name_of_institution:institute,
      name:name,
      email:email,
      phone:contactNumber,
      street_address:streetAddress,
      address_line_2:addressLine2,
      city:city,
      state:state,
      zip_code:zipCode
    }

    console.log("data",data)

    fetch(`${apiConstatnts.BASE_URL}${apiConstatnts.sendBecameHotspotEmail}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((response)=>{
      return response.json()
    }).then((response)=>{
      if(response.status==200){
        toast("Application sent!",{
          type:"success"
        });
        handleClear();
      }else{
        toast("Unknown error!",{
          type:"error",
        });
      }
    }).catch((error)=>{
      toast("Unknown error!",{
        type:"error",
      });
    })

  }

  let handleClear=()=>{
    setInstitute("")
    setName("")
    setEmail("")
    setContactNumber("")
    setStreetAddress("")
    setAddressLine2("")
    setCity("")
    setState("")
    setZipCode("")
  }

  return (
    <>
      <Commanheadbg />
      <section class="Privacy-Policy-info">
        <div class="container">
          <h2 class="main-head-tleft">
            Become a <span>Hotspot </span>
          </h2>
          <div>
            <ToastContainer />
          </div>
          <div className="backend-html">
          <div><h2>Do you want free delivery... let us know!</h2>
          <h3>Hotspot is adding new delivery locations all the time. Fill out the form and we'll get on it!</h3>
            <form className="mb-5 mt-5" method="POST" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                  <label for="intitution">Name of Institution</label>
                  <input 
                    type="text"
                    className="form-control"
                    id="intitution" 
                    name="intitution" 
                    placeholder="Enter name of institution"
                    onChange={(e)=>setInstitute(e.target.value)}
                    required
                    value={institute}
                  />
                    
              </div>
              <div className="form-group">
                  <label for="name">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"  
                    placeholder="Enter name"
                    onChange={(e)=>setName(e.target.value)}
                    required
                    value={name}
                  />
              </div>
              <div className="form-group">
                  <label for="contact_number">Contact Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="contact_number" 
                    name="contact_number" 
                    placeholder="Enter contact number"
                    onChange={(e)=>setContactNumber(e.target.value)}
                    required
                    value={contactNumber}
                    pattern="^[1-9]\d{9}$"
                    title="Must be 10 digit numeric and should not start with zero"
                  />
              </div>
              <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    value={email}
                  />
              </div>
              <div className="form-group">
                  <label for="street_address">Street Address</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="street_address" 
                    name="street_address" 
                    placeholder="Enter street address"
                    onChange={(e)=>setStreetAddress(e.target.value)}
                    required
                    value={streetAddress}
                  />
              </div>
              <div className="form-group">
                  <label for="address_line_2">Address Line 2</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address_line_2" 
                    name="address_line_2" 
                    placeholder="Enter address line 2"
                    onChange={(e)=>setAddressLine2(e.target.value)}
                    required
                    value={addressLine2}
                  />
              </div>
              <div className="form-group">
                  <label for="city">City</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="city" 
                    name="city" 
                    placeholder="Enter city"
                    onChange={(e)=>setCity(e.target.value)}
                    required
                    value={city}
                  />
              </div>
              <div className="row">
                <div className="col">
                  <label for="state">State</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="state" name="state" 
                    placeholder="Enter state"
                    onChange={(e)=>setState(e.target.value)}
                    required
                    value={state}
                  />
                </div>
                <div className="col">
                  <label for="zip_code">Zip Code</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="zip_code" 
                    name="zip_code" 
                    placeholder="Enter zip code"
                    onChange={(e)=>setZipCode(e.target.value)}
                    required
                    value={zipCode}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col text-center">
                  <input class="form-control btn btn-primary w-25" type="submit"/>
                </div>
                <div className="col text-center">
                  <input class="form-control btn btn-secondary w-25" onClick={handleClear} value="Clear" type="reset"/>
                </div>
              </div>
              
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Becomehotspot;
