import photo from "../assets/my-photo.png";

export function Start() {
  return (
    <article className="padding-page bg-light-100 dark:bg-dark-200">
      <section className="mt-2">
        <div className="rounded-full">
          <img src={photo} alt="Foto de Caio Pfaltzgraff" className="rounded-full"/>
        </div>
        <div className="dark:text-light-200">
          <p>Olá, eu sou</p>
          <p className="font-title text-3xl font-bold">Caio <span className="text-orange-700">Pfaltzgraff</span></p>
          <>
            E sou um <span className="font-developer">desenvolvedor Full <span className="text-orange-700">Stack</span></span>
          </>
        </div>
      </section>
    </article>
  );
}
