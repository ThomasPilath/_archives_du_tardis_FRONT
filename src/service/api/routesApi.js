import { useApi } from "../../hooks/useApi";
const api = useApi();

export async function getPhotos(){
  try{
      const response = await api.get('/photos');
      const filtredData = []
      if (response.status === 200) {
        for(let i = 0; i < 10; i++) {
          filtredData.push(response.data[i])
        }
      }
      return ({
          status: true,
          data: filtredData
      })
  }
  catch(error){
      return ({
          status: false,
          data: error
      })
  }
}