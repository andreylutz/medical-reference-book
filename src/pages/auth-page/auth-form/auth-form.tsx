import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";

import { TextField, Typography, Button } from "@mui/material";

import { loginValidation, passwordValidation } from "./validation";
import "./auth-form.css";

interface ISignInForm {
  login: string;
  password: string;
}

export const AuthForm = () => {
  const { handleSubmit, control } = useForm<ISignInForm>({
    mode: "onChange",
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="auth-form">
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom
        className="auth-form__subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form className="auth-form__field" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disableElevation
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
