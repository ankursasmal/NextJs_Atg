'use client'
import React, { useState } from 'react'
 import Link from 'next/link'

function Nav() {
  let [show,setshow]=useState(false)
  let [show1,setshow1]=useState(false)

  let handelvisible=()=>{
    if(show){
setshow(false);
    }
    else{
      setshow(true)
    }
  }

  let handelvisible1=()=>{
    if(show1){
setshow1(false);
    }
    else{
      setshow1(true)
    }
  }
  return (
    <div className='container pt-2 pb-2 pt-md-3 pb-md-3'>
<div className='d-none d-md-block'>
    <div className='  d-flex  align-items-center  justify-content-between' >
<img src="Navimg.png" alt="" style={{width:'15vw'}} />
<div className='d-none d-md-block'> 
<div  className="d-flex flex-column flex-sm-row  " style={{width:'22vw'}}>
            <label for="newsletter1"  className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text"  className="form-control  " placeholder="Search  "/>
            <button className='rounded-end' style={{backgroundColor:'#8064A2'}} type="button">Invite</button>
          </div>
          </div>
          <div className='d-none d-md-block'> 

          <div className='d-flex justify-content-center align-items-center'  >
<div className='d-flex' style={{alignItems:'center',margin:'0 1.5vw'}}  >
<img src="Layer2.png" style={{width:'2vw'}} alt="" />
<div  className="dropdown" onClick={handelvisible}>
  <button  className="btn " style={{outline:'none',fontSize:'1.2vw'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Explore  </button>
  
</div>
<img src="arrow.png" style={{width:'2vw'}} alt="" />
</div>
<div className='d-flex   align-items-center'   >
<img src="Hobbies.png" style={{width:'2vw'}} alt="" />
<div  className="dropdown" onClick={handelvisible1}>
  <button  className="btn   " style={{outline:'none',fontSize:'1.2vw'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Hobbies  </button>
 
</div>
<img src="arrow.png" style={{width:'2vw'}} alt="" />

<img src="bookmark.png" style={{width:'2vw',margin:'0 1.5vw'}} alt="" />
<img src="notification.png" style={{width:'2vw'}} alt="" />
<img src="cart.png" style={{width:'2vw',margin:'0 1.5vw'}} alt="" />
<Link href='/'> <button className='btn btn-outline-primary rounded'>Signin</button></Link>
</div>
      </div> 
          </div>
          
<div>

</div>
</div>
</div>
<div className='d-block d-md-none'> 
<div  className='d-flex justify-content-between align-items-center'> 
<img src="Navimg.png" alt="" style={{width:'25vw'}} />

          <div className='d-flex align-items-center'>
          <img src="search.png" style={{width:'4vw'}} alt="" />
          <img src="notification.png" style={{width:'4vw',margin:' 0 2vw'}} alt="" />
          <img src="menu.png" style={{width:'4vw'}} alt="" />
</div>
</div>
</div>
{show1?
 <div className='d-none d-md-block '  style={{display:'block'}}> <ul  className="shadows"  style={{position:'absolute',top:'75px',right:'25vw' ,overflow:'hidden',padding:'1vw 2vw'}}>
    <li><a  className="dropdown-item" href="#">Action</a></li>
    <li><a  className="dropdown-item" href="#">Another action</a></li>
    <li><a  className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
  :<div   style={{display:'none'}}> <ul  className="shadows"  style={{position:'absolute',top:'30px',right:'30vw' ,overflow:'hidden'}}>
  <li><a  className="dropdown-item" href="#">Action</a></li>
  <li><a  className="dropdown-item" href="#">Another action</a></li>
  <li><a  className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>}
 
 {show?
 <div className='d-none d-md-block '  style={{display:'block'}}> <ul  className="shadows"  style={{position:'absolute',top:'70px',right:'30vw' ,overflow:'hidden',padding:'1vw 2vw'}}>
    <li><a  className="dropdown-item" href="#">Action</a></li>
    <li><a  className="dropdown-item" href="#">Another action</a></li>
    <li><a  className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
  :<div   style={{display:'none'}}> <ul  className="shadows" style={{position:'absolute',top:'75px',right:'20vw' ,overflow:'hidden'}}>
  <li><a  className="dropdown-item" href="#">Action</a></li>
  <li><a  className="dropdown-item" href="#">Another action</a></li>
  <li><a  className="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>}
    </div>
  )
}

export default Nav
