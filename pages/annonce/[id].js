import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

export default function AnnoncePage() {
  const user = useSelector((state) => state.user)
  const router = useRouter()
  const { query: { id } } = router

  const [formData, setFormData] = useState(null)

  useEffect(() => {
    // Faire une requête au backend pour obtenir les détails de l'annonce en utilisant le slug
    fetch('http://localhost:3000/annonces/id/' + id + '/' + user.token)
      .then((response) => response.json())
      .then((data) => {

        if (data.result) {
          const { titre, date_de_creation, date_de_modification, archive, date_de_publication, date_de_debut, date_de_fin, adresse, code_postal, ville, description, profession, eleves_postulants } = data.annonce

          setFormData({ titre, date_de_creation, date_de_modification, archive, date_de_publication, date_de_debut, date_de_fin, adresse, code_postal, ville, description, profession, eleves_postulants })
        }
      })
  }, [id])

  return (
    <>
      {
        formData ?
          <div>mon code si bon</div>
        :
          <main>
            <div className="container py-5 text-center">
              mon code si pas bon
            </div>
          </main>
      }
    </>
  )
}
