import Background from "~/assets/background.jpg";
import AshGrayContainer from "~/components/AshGrayContainer";
import {Link} from "react-router";

const LoginPage = () => {
    return (
        <main className="h-full flex justify-center" style={{backgroundImage: `url(${Background})`}}>
            <div className="flex-1 flex flex-col items-center justify-center gap-16 min-h-0 backdrop-blur-[1.5px] p-2.5">
                <AshGrayContainer className="flex flex-col p-5">
                    <div className="flex flex-col gap-y-8 w-fit">
                        <h1 className="text-4xl font-medium text-black">Entre com a sua conta.</h1>

                        <form id="login-form" className="flex flex-col gap-y-4"> {/*TODO: ADD ONSUBMIT*/}
                            <input type="email" placeholder="Email" className="bg-platinum p-1.5 rounded-xl text-cafe-noir shadow-md"/>
                            <input type="password" placeholder="Senha" className="bg-platinum p-1.5 rounded-xl text-cafe-noir shadow-md"/>
                            <Link to={""} className="text-xl text-cafe-noir">Esqueci minha senha</Link> {/*TODO: ADD PASSWORD RECOVERY LINK*/}
                        </form>
                    </div>
                    <div className="flex justify-end w-[500px]">
                        <button type="submit" form="login-form" className="text-xl text-black font-medium bg-saffron px-8 py-1 rounded-xl shadow-md">Entrar</button>
                    </div>
                </AshGrayContainer>
            </div>
        </main>
    );
};

export default LoginPage;