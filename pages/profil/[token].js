import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector} from "react-redux"

export default function ProfilPage() {
  const  user = useSelector((state) => state.user)
  const router = useRouter()
  const { query: { token } } = router

  const [formData, setFormData] = useState(null)

  useEffect(() => {
    // Faire une requête au backend pour obtenir les détails de l'annonce en utilisant le slug
    fetch("http://localhost:3000/eleves/02/" + token)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const { nom, prenom, photos, date_de_naissance, etablissement, presentation, motivation, ville, code_postal, disponible, date_de_debut, date_de_fin, ma_recherche_de_stage, mot_cle } = data.eleves

          setFormData({ nom, prenom, photos, date_de_naissance, etablissement, presentation, motivation, ville, code_postal, disponible, date_de_debut, date_de_fin, ma_recherche_de_stage, mot_cle,})
        }
      })
  }, [token])

  if (user.fonction === 'false') {
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
  } else {
    if (typeof window !== 'undefined') router.push('/')

    return null
  }
}
