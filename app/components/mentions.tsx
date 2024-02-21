"use client";

import { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

export function MentionsLegales() {
    const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
          <section 
            id="mentions"
            tabIndex="0"
            ref={ref}
            className="section"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} 
          >
            <div className="flex flex-col gap-4 items-center py-5">
                <h1 className='text-3xl font-bold text-center'>Mentions légales</h1>
            </div>  
            <div className="pt-10 pb-16 max-w-7xl flex flex-col gap-3">
                <p>
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
                    la confiance en l'économie numérique, il est précisé aux utilisateurs du
                    site Matthieu Bonjour l'identité des différents intervenants dans le
                    cadre de sa réalisation et de son suivi.
                </p>
                <h2 className="text-2xl underline">Editeur du site :</h2>
                <p>
                    Le présent site, accessible à l’URL :{' '}
                    <Link href="https://matthieubonjour.fr/" target="blank">
                    https://matthieubonjour.fr/
                    </Link>
                    , est édité par Matthieu Bonjour, résidant 43 impasse de l'ancienne
                    gendarmerie 83600 LES ADRETS DE L'ESTEREL.
                </p>
                <h2 className="text-2xl underline">Hébergement :</h2>
                <p>
                    Le site est hébergé par la société Hostinger International LTD, situé :
                </p>
                <ul className="list-disc list-inside my-3.5">
                    <li>61 Lordou Vironos Street</li>
                    <li>6023 Larnaca, Chypre</li>
                </ul>
                <p>
                    L'hébergeur peut être contacté par le moyen suivant :{' '}
                    <Link href="https://www.hostinger.fr/contact" target="blank">
                    https://www.hostinger.fr/contact
                    </Link>
                </p>
                <h2 className="text-2xl underline">Nous contacter :</h2>
                <ul className="list-disc list-inside my-3.5">
                    <li>Par téléphone : (+33) 0629102076</li>
                    <li>Par email : matthieu83600-pro@outlook.fr</li>
                    <li>
                    Par courrier : 43 impasse de l'ancienne gendarmerie 83600 LES ADRETS
                    DE L'ESTEREL
                    </li>
                </ul>
                <h2 className="text-2xl underline">Données personnelles :</h2>
                <p>
                    De manière générale, vous n’êtes pas tenus de nous communiquer vos
                    données personnelles lorsque vous visitez notre site Internet. Vous
                    pouvez être amenés à nous communiquer certaines données telles que :
                    votre nom, et prénom, votre email seulement si vous remplissez le
                    formulaire qui vous est proposé dans la section "Contact". <br />
                    Enfin, nous pouvons collecter de manière automatique certaines
                    informations vous concernant lors d’une simple navigation sur notre site
                    Internet, notamment : des informations concernant l’utilisation de notre
                    site, votre adresse IP, le type et la version de votre navigateur, vos
                    temps d'accès. De telles informations sont utilisées exclusivement à des
                    fins de statistiques internes, de manière à améliorer la qualité du site
                    Internet.
                </p>
            </div>
          </section>
        </LazyMotion>
    )
}