import * as yup from "yup";

export interface IFormProps {
  hour?: string;
  minute?: string;
  projectName?: string;
  amount?: string;
}
export const FormSchema: yup.Schema<IFormProps> = yup.object().shape({
  hour: yup.string().max(2, "Maximo de 2 letras").required("Campo obrigatorio"),
  minute: yup
    .string()
    .max(2, "Maximo de 2 letras")
    .required("Campo obrigatorio"),
  projectName: yup
    .string()
    .min(5, "no minimo 5 letras")
    .max(50, "Maximo de 50 letras")
    .required("Campo obrigatorio"),
  amount: yup.string().max(3).required("Campo obrigatorio"),
});

export interface ILoginProps {
  name?: string;
  password?: string;
}
export const LoginSchema: yup.Schema<ILoginProps> = yup.object().shape({
  name: yup
    .string()
    .min(5, "no minimo 5 letras")
    .max(50, "Maximo de 50 letras")
    .required("Campo obrigatorio"),
  password: yup.string().max(3).required("Campo obrigatorio"),
});
