import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .required("Nome é obrigatório")
    .min(10, "Nome deve ter pelo menos 20 caracteres"),
  phoneNumber: yup
    .string()
    .min(11, "Número de telefone inválido")
    .required("Número de telefone é obrigatório"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(10, "Sua senha deve ter pelo menos 10 caracteres")
    .required("Senha é obrigatória")
});

export { SignUpSchema };
