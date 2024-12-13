import LogoComponent from "~/components/LogoComponent";
import AshGrayContainer from "~/components/AshGrayContainer";
import Background from '~/assets/background.jpg'

export function Welcome() {
  return (
    <main className="h-full flex justify-center" style={{backgroundImage: `url(${Background})`}}>
      <div className="flex-1 flex flex-col items-center justify-between gap-16 min-h-0 backdrop-blur-[1.5px] p-2.5">
        <header className="w-full flex items-start justify-between gap-9">
          <AshGrayContainer className="justify-center items-center px-6 py-2">
            <LogoComponent/>
          </AshGrayContainer>
          <div className="flex items-center gap-5">
            <button>
              <AshGrayContainer className="justify-center items-center px-4 py-2">
                <p className="text-ebony font-bold">Cadastro</p> {/*TODO: ADD FUNCTIONALITY*/}
              </AshGrayContainer>
            </button>

            <button>
              <AshGrayContainer className="justify-center items-center px-4 py-2">
                <p className="text-cafe-noir font-bold">Login</p> {/*TODO: ADD FUNCTIONALITY*/}
              </AshGrayContainer>
            </button>
          </div>
        </header>
        <div className="flex justify-around w-2/3 px-4">
          <AshGrayContainer className="max-w-[650px] max-h-[250px] justify-center items-center p-4">
            <h1 className="text-4xl text-ebony text-center">Bem-vindo ao <span className="text-cafe-noir">meu <b>Condomínio</b></span></h1>
            <h2 className="text-3xl text-ebony text-wrap text-center mt-9"><span className="text-cafe-noir">Organize e gerencie</span> os espaços compartilhados do seu condomínio de forma <span className="text-cafe-noir">prática e eficiente.</span></h2>
          </AshGrayContainer>

          <AshGrayContainer className="max-w-[350px] h-[400px] justify-start items-start text-2xl p-4">
            <p className="text-ebony text-wrap mb-5">Com o <span className="text-cafe-noir">meu <b>Condomínio</b></span>, você pode:</p>
            <ul className="list-disc ml-5">
              <li className="text-ebony text-wrap">Reservar salas e áreas comuns com apenas alguns cliques.</li>
              <li className="text-ebony text-wrap mt-5">Acompanhar suas reservas e atualizações em tempo real.</li>
              <li className="text-ebony text-wrap mt-5">Facilite a comunicação no seu condomínio.</li>
            </ul>
          </AshGrayContainer>
        </div>

        <div>
          <AshGrayContainer className="mb-5 p-4">
            <h1 className="text-ebony text-4xl mx-4 my-5">Comece <b className="text-cafe-noir">agora</b> a transformar a gestão do seu condomínio!</h1>
          </AshGrayContainer>
        </div>
      </div>
    </main>
  );
}
