import * as yup from "yup";

export interface IFormProps {
  // hour?: string;
  // minute?: string;
  projectName?: string;
  amount?: string;
}

export const FormSchema: yup.ObjectSchema<IFormProps> = yup.object().shape({
  projectName: yup
    .string()
    .min(5, "no minimo 5 letras")
    .max(50, "Maximo de 50 letras")
    .required("Campo obrigatorio"),
  amount: yup.string().max(3).required("Campo obrigatorio"),
});

export interface ILoginProps {
  username?: string;
  password?: string;
}
export const LoginSchema: yup.ObjectSchema<ILoginProps> = yup.object().shape({
  username: yup
    .string()
    .min(5, "no minimo 5 letras")
    .max(50, "Maximo de 50 letras")
    .required("Campo obrigatorio"),
  password: yup
    .string()
    .min(5, "no minimo 5 letras")
    .max(50, "Maximo de 50 letras")
    .required("Campo obrigatorio"),
});
