import { Alert } from 'react-bootstrap'

function Welcome() {
  return (
    <div className="container my-4">
      <h1 className="text-center">📚 Benvenuto su EpiBOOKS</h1>
      
      <Alert variant="info" className="text-center mt-3">
        Questa è una libreria virtuale per appassionati di lettura!
      </Alert>
    </div>
  )
}

export default Welcome;