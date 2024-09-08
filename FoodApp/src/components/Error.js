import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
  return  (
        <div>
        <h1 className="text-8xl text-red-700">Ooops!!</h1>
        <h2 className="m-4 font-bold text-3xl">something went wrong.....</h2>
        <h2 className="m-4 font-bold text-3xl">{err.status}:{err.statusText}</h2>
    </div>
    )
}

export default Error;