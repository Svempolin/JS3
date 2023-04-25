import{ useState} from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BestMovie from './components/BestMovie'




const App = () => {

const [movies, setMovies] = useState([
  {
    id:1,
    title:"Pulp fiction",
    author:"Quentin Tarantino",
    image: "https://www.miramax.com/assets/Pulp-Fiction1.png"
  },
  {
    id:2,
    title:"The Godfather",
    author:"Francis Ford Coppola",
    image: "https://sfanytime-images-prod-http2.secure2.footprint.net/COVERM/d62a7a15-6fa6-4cc4-aa26-a16200b45e96_COVERM_01.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=3267bb703a9d32fce6f9853c42bae5ee"
  },
  {
    id:3,
    title:"The Shawshank Redemption",
    author:"Frank Darabont",
    image: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg"
  }
])

  return (
    <div  >
      <NavBar/>
      <div >
     <BestMovie className= "card" items={movies}/>
     </div>
      <Footer/>
    </div>
  )
}

export default App