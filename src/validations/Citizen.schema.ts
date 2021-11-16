import * as Yup from "yup";

import { VACCINES_VALUE } from "../pages/RegisterCitizen/components/VaccineForm/constants";

export const CitizenSchema = Yup.object().shape({
  name: Yup.string()
    .min(11, "Nome deve ter no mínimo 11 caracteres")
    .required("Nome é obrigatório"),
  cpf: Yup.string().min(11, "CPF inválido").required("CPF é obrigatório"),
  birthDate: Yup.date().required("Data de nascimento é obrigatória"),
  vaccineName: Yup.string()
    .oneOf(VACCINES_VALUE)
    .required("Nome da vacina é obrigatório"),
  dose: Yup.number()
    .equals([1, 2], "Dose inválida")
    .required("A dose é obrigatória")
});
