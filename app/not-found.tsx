import Image from "next/image"

export default function Custom404() {
    return (
        <div className="container-md flex flex-col items-center mt-12 mb-12">
            <Image
                src="/404-page-not-found.png"
                width={400}
                height={400} 
                alt="image d'erreur"
            />
            <h1 className="mt-12 mb-8 text-3xl text-center">404 - Page non trouvée</h1>
            <p className="mt-12 mb-12 text-xl text-center">La page que vous souhaitez voir n'existe pas !</p>
        </div>
    )
}