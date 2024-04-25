import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-center text-4xl font-bold">
        404 - Página não encontrada
      </h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link className="text-sky-500 dark:text-slate-400" to={"/"}>
          Dashboard
        </Link>
      </p>
    </div>
  );
}
