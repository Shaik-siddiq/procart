import React,{useState} from 'react'

let Registraion = ()=>{
    const [user, setUser]=useState({username:" ",email:" ", password:" ", confirmPassword:" "})
    const inputHandler = (event) =>{
        setUser((prevState)=>{
            return{
                ...prevState,
                [event.target.name]:[event.target.value]
            }
        } )
    }
    const SubmitHandler = (event)=>{
        event.preventDefault()
        user.password=document.getElementById('pas1').value;
        user.confirmPassword= document.getElementById('pas2').value
         if(user.password === user.confirmPassword){
                console.log(user)
            }
         else{
               alert('password doesnot match') 
            }
         
    }
    return(
        <div className="container center mt-3">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                    <div>
                        <form onSubmit={SubmitHandler}>
                        <div className="form-group">
                        <input type="text" 
                            placeholder="UserName"
                            className="form-control"
                            
                            name="username"
                            onChange={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                        <input type="email" 
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            onChange={inputHandler}
                            />
                        </div>
                        <div className="form-group">
                        <input type="password" 
                            placeholder="password"
                            className="form-control"
                            id='pas1'
                            name="password"
                            onChange={inputHandler}
                            />
                        </div>
                      
                        <div className="form-group">
                        <input type="password" 
                            placeholder="confirm password"
                            className="form-control"
                            name="confirmPassword"
                            id="pas2"
                            onChange={inputHandler}
                            />
                        </div>
                        
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
        </div>
    )
}
export default Registraion