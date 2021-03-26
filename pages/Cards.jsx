import { Wrapper } from "../src/styles/Cards.styled";

import Layout from "../src/layouts";
import {
  SignIn,
  Card,
  TextField,
  LikeButton,
  CheckboxButton,
} from "../src/components";

const Cards = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>cards</h1>

        <SignIn />
      </Wrapper>
    </Layout>
  );
};

export default Cards;
