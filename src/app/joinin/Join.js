import React from 'react'
 
 function Join() {
  return (
    <div className='d-flex' style={{flexDirection:'column',width:'100%'}}>
      <img src="google.png" alt=""  style={{padding:'1.5vw 0',width:'100%'}}/>
      <img src="facebook.png" alt="" style={{width:'100%'}}/>
      <img src="seperate.png" alt="" style={{paddingTop:'1.2vw',paddingBottom:'.7vw',width:'100%'}} />
      <label htmlFor="newsletter1" class="visually-hidden">  </label>
            <input id="newsletter1" type="text" class="htmlForm-control w-80" placeholder="email "/>
            <label htmlFor="newsletter1" class="visually-hidden"  ></label>
            <input id="newsletter1" type="text" class="htmlForm-control w-80" placeholder="password" style={{margin:'.6vw 0'}}/>

<div className='d-flex' style={{alignItems:'center',justifyContent:'space-between',paddingTop:'.2vw 0'}}>
<div style={{display:'flex',alignItems:'center'}}>
     
</div>
<div style={{display:'flex',alignItems:'center'}}>
    <a style={{fontSize:'.6vw'}}>PasssWord Strength </a>
</div>

</div>
<a style={{fontSize:'.7vw',paddingTop:'1vw'}}>By continuing, you agree to our Terms of Service and Privacy Policy.</a>

<button className='btn btn-outline-secondary btnhover' style={{fontSize:'1.5vw',marginTop:'1vw'}}> Agree And Continue</button>
    </div>
  )
}

export default Join
