import './App.css'
import Card_1 from './assets/component/card/Card_1'
import Card_2 from './assets/component/card/Card_2'
import Navbar from './assets/component/navbar/navbar'

const ticketData = fetch("/json/tickets.json")
.then(res => res.json())
.then(data => {console.log(data);
}
)


function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="">
      <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto my-[80px]">
        <Card_1></Card_1>
        <Card_2></Card_2>
     </div>
     <div className="">

     </div>
     </div>
    </>
  )
}

export default App
