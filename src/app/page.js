 

function page() {
  return (
    <div className='d-flex' style={{flexDirection:'column',width:'100%'}}>
      <img src="google.png" alt=""  style={{padding:'2vw 0',width:'100%'}}/>
      <img src="facebook.png" alt="" style={{width:'100%'}}/>
      <img src="seperate.png" alt="" style={{paddingTop:'2vw',width:'100%'}} />
      <label htmlFor="newsletter1" class="visually-hidden">  </label>
            <input id="newsletter1" type="text" class="htmlForm-control w-80 mt-2" placeholder="email "/>
            <label htmlFor="newsletter1" class="visually-hidden" style={{margin:'2vw 0'}}></label>
            <input id="newsletter1" type="text" class="htmlForm-control w-80 mt-2" placeholder="password"/>

<div className='d-flex' style={{alignItems:'center',justifyContent:'space-between',padding:'2vw 0'}}>
<div style={{display:'flex',alignItems:'center'}}>
    <input type="checkbox" />
    <a style={{fontSize:'1vw',paddingLeft:'.75vw'}}>Remember me</a>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<img src="lock.png" style={{width:'2vw',paddingRight:'.75vw'}} alt="" /> 
   <a style={{fontSize:'1vw'}}>htmlForgot password? </a>
</div>

</div>
<button className='btn btn-outline-secondary rounded' style={{fontSize:'1.8vw', }}> Agreee And Continue</button>
    </div>
  )
}

export default page
