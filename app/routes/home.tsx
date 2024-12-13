import type { Route } from "./+types/home";
import { Welcome } from "~/pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "meuCondominio" },
    { name: "description", content: "Bem-vindo ao meuCondominio!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
