import { useEffect, useState } from "react";
import CardElement from "../components/CardElement";
import AppLayout from "../layout/AppLayout";
import { getPhotos } from "../service/api/routesApi";

export default function TestElement() {
  const [ photos, setPhotos ] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getPhotos()
        response.status === false ? setPhotos([]) : setPhotos(response.data)
        console.log(photos)
      } catch (error) {
        console.log("Error :", error)
      }
    }
    if (photos.length === 0) {
      fetchApi()
    }
  }, [photos])


  return (
    <>
      <AppLayout>
        <div class="container flex flex-wrap gap-2 justify-center mx-auto px-5 py-2 lg:pt-12">
            {photos.length > 0 ? (
              photos.map(element => (
                <div class="w-1/4 flex flex-wrap">
                  <CardElement key={element.id} class="p-1 md:p-2" image={element.url} title={"Title test"} text={element.title} button={"Voir"} seeText={true} />
                </div>
                ))
            ) : (
              <p>Loading...</p>
            )}
        </div>
      </AppLayout>
    </>
  );
}