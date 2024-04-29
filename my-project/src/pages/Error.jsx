import { useRouteError, Link } from "react-router-dom"


const Error = () => {
  const error = useRouteError();
  console.log(error);

  if(error.status === 404){
    return (
      <main className="grid min-h-screen place-items-center px-8">
       <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Page not found...</h1>
          <div className="mt-4">
            <Link to='/' className="btn btn-secondary uppercase">
            Go back Home
            </Link>
          </div>
       </div>
      </main>
     )
  }

  return (
   <main className="grid min-h-screen place-items-center px-8">
    <h4 className="text-center font-bold text-4xl text-red-600">There Was an Error...</h4>
   </main>
  )
}

export default Error