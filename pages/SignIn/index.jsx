import { useSession, signIn } from "next-auth";

import { Card, TextField, Button } from "../../src/components/index";
import Layout from "../../src/layouts";
import { Form, Title, NotAccount } from "./index.styled";

const SignIn = () => {
  return (
    <Layout>
      <Card width="380px" height="358px">
        <Form>
          <Title>Войти</Title>
          <TextField placeholder="Email" />
          <TextField placeholder="Пароль" />
          <Button type="submit" actioned>
            ВОЙТИ
          </Button>
        </Form>
        <NotAccount>
          <p>Нет аккаунта на Toxin?</p>
          <Button outlined>Создать</Button>
        </NotAccount>
      </Card>
    </Layout>
  );
};

export default SignIn;
