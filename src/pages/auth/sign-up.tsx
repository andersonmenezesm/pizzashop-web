import { registerRestaurant } from "@/api/register-restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  async function handleSigIn(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch (error) {
      toast.error("Erro ao cadastrar o estabelecimento");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSigIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                type="text"
                id="restaurantName"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                type="text"
                id="managerName"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Celular</Label>
              <Input type="tel" id="phone" {...register("phone")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a className="underline underline-offset-4" href="">
                Termos de serviços
              </a>{" "}
              e{" "}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
