
import axios from 'axios';


const serverUrl = 'http://localhost:3333';


const Teste = async (req, res) => {

    const {email, password } = req.body
    const response = await axios.post(serverUrl + '/users')
    console.log(response)
    
    return res.json(response)
    
}
   
export default Teste