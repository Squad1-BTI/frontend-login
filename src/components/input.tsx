 export default  function Input() {
     return (
        
         <><div className="flex flex-col gap-2 " >
  
             <input  type="email"   className="peer block w-full border-2  rounded-md px-3 py-2 focus:outline-none focus:ring-2" name="email" id="email" placeholder="Seu Email" />
         </div>
             <div className="flex flex-col gap-2">
             
                 <input type="password"className="peer block w-full border-2  rounded-md px-3 py-2 focus:outline-none focus:ring-2 "  name="password" id="password" placeholder="Sua senha" />
           
             </div></>
       
         
    )
 }