import React,{useState} from 'react'

const Contact = () => {
    const [data, setdata] = useState(
        {
            nomprenom:'',
            email:'',
            message:'',
        }
    );
    let name,value;
    const InputEvent=(event)=>{
        name= event.target.name;
        value=event.target.value;

        setdata((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        });
    };
    const SubmitData = async(e)=>{
        e.preventDefault();
        const {nomprenom,email,message}=data;

        if(nomprenom && email && message){
            const res = fetch(
                "https://portfolio-test-8a073-default-rtdb.firebaseio.com/userrecord.json",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        nomprenom,email,message,
                    }),
                }
            );
            if(res){
                setdata({nomprenom:"",
                email:"",
                message:"",});            
                alert("data stored");
            } else{
                alert("not stored")
            }
        }else{
            alert("not stored")
        }
    }
    return (
        <>
            <div className="text-blue-700 my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container text-blue-700 text-medium contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        {/* <form onSubmit={formSubmit}> */}
                        <form method="POST">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label uppercase">Nom PreNom</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="nomprenom"
                                value={data.nomprenom}
                                onChange={InputEvent}
                                placeholder="NOM PRENOM"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                 placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="message"
                                value={data.message}
                                onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit" onClick={SubmitData}>Submit</button>
                            </div>                
                        </form>
                    </div>
                </div>
            </div>   
        </> 
    );
}

export default Contact;
