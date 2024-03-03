export default function ContactForm({ form, sendEmail }) {
    return (
      <form
        action="#"
        method="POST"
        onSubmit={sendEmail}
        ref={form}
        className="w-full flex items-center justify-center flex-col gap-y-4"
      >
        <div className="w-full flex flex-col items-center gap-y-1">
            <label htmlFor="name" className="text-md">
                Votre nom :
            </label>
            <input
                type="text"
                name="lastname"
                className="h-10 ps-2 dark:bg-slate-950 w-5/12 text-sm rounded-lg shadow-sm focus:ring-blue-700 transition-all"
                placeholder="Votre nom"
                required
            />
        </div>
        <div className="w-full flex flex-col items-center gap-y-1">
            <label htmlFor="name" className="text-md">
                Votre prénom :
            </label>
            <input
                type="text"
                name="firstname"
                className="h-10 ps-2 dark:bg-slate-950 w-5/12 text-sm rounded-lg shadow-sm focus:ring-blue-700 transition-all"
                placeholder="Votre prénom"
                required
            />
        </div>
        <div className="w-full flex flex-col items-center gap-y-1">
            <label htmlFor="email" className="text-md">
                Adresse e-mail :
            </label>
            <input
                type="email"
                name="email"
                className="h-10 ps-2 dark:bg-slate-950 w-5/12 text-sm rounded-lg shadow-sm focus:ring-blue-700 transition-all"
                placeholder="Adresse e-mail"
                required
            />
        </div>
        <div className="w-full flex flex-col items-center gap-y-1">
            <label htmlFor="message" className="text-md">
                Votre message :
            </label>
            <textarea
                name="message"
                rows="5"
                cols="33"
                className="w-5/12 ps-2 pt-2 dark:bg-slate-950 text-sm rounded-lg shadow-sm focus:ring-blue-700 transition-all"
                placeholder="Votre message..."
                required
            />
        </div>
        <div className="w-full flex justify-center">
            <button
                type="submit"
                className="bg-blue-700 hover:bg-sky-400 text-white w-full lg:w-auto font-semibold h-12 px-6 rounded-lg highlight-white/20 focus:outline-none transition-all"
            >
                Envoyer
            </button>
        </div>
      </form>
    )
}