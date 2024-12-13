import type { Route } from "../+types/root";
import LoginPage from "~/pages/login/loginPage";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "meuCondominio" },
        { name: "description", content: "Bem-vindo ao meuCondominio!" },
    ];
}

export default function Login() {
    return <LoginPage />;
}
