 export default  function Login() {
     return (
        
         <><div className="flex flex-col gap-2 " >
             <label htmlFor="email">Email</label>
             <input  type="email" className=" text-sm peer block w-full  bg-slate-100  rounded-lg  p-3 focus:outline-none focus:ring-2 " name="email" id="email" placeholder="Seu Email" />
         </div>
             <div className="flex flex-col gap-2">
                 <label htmlFor="password">Senha</label>
                 <input type="password" className=" text-sm peer block w-full   bg-slate-100  rounded-lg p-3 focus:outline-none focus:ring-2 " name="password" id="password" placeholder="Sua senha" />
                    <div className="flex justify-end">
          <span className="text-sm text-blue-400">
            <a href="/forgot-password">Forgot your password?</a>
          </span>
        </div>
                 <span className="text-sm">Não tem uma conta?<span className="text-sm text-blue-400 p">Crie a dua conta aqui</span> </span>
             </div></>
       
         
    )
 }