import { PiArrowUUpLeftFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import notfoundImg from '/notfound.png';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="padding-page flex justify-center items-center h-screen -mt-28">
        <div className="lg:flex ">
          <div>
            <img src={notfoundImg} alt="Pessoa procurando algo" />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="flex flex-col text-center gap-4 font-medium mt-9 dark:text-light-200 lg:text-lg">
              <p><span className="font-bold text-2xl lg:text-3xl">404</span> | Página não encontrada...</p>
              <p>Tem certeza que digitou o link corretamente?</p>
            </div>
            <div className="mt-4 lg:mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-600 px-7 py-2 lg:px-10 lg:py-3 font-bold lg:text-lg rounded-lg outline-none text-light-100"
              >
                <PiArrowUUpLeftFill className='text-xl'/> {" "} Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}