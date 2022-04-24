import './style/Login.css'

function Login (){

    return (
        <div className='page'>
       
        <div className='left-side'>
            <h1>welcome back</h1>
            <p>welcome back! Please enter your details</p>
            <form action=''>
                <div>
                    
                        <label htmlFor="userName">Email</label>
                        <input className='box' id='userName' type="text" />
                   
                    
                        <label htmlFor="mdp">passeword</label>
                        <input className='box' type="text" id="mdp" />
                    
                </div>
                <div className='checkBox'>
                    <label htmlFor="remember"><input type="checkbox" name="" id="remember"  />Reminder for 30 days </label>
                    <a href="">Forgot passeword</a>
                </div>
                <input className='box boxing' type="button" value="sign in" />
                <input className='box' type="button" value="sing in with Google" />
                <p>Don't have an account ? <a href=""> sing up</a></p>                             
            </form>
        </div>
         <div className='right-side'>
             <div className="logo">
                 
             </div>
         </div>
        </div>
    )
}
export default Login