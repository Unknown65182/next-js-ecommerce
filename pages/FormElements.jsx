import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  Row,
  Column,
  Component,
  Title,
} from "../src/styles/FormElements.styled";
import {
  Button,
  TextField,
  CheckboxButton,
  RadioButtons,
  ToggleButton,
  LikeButton,
  RateButton,
  BulletList,
  GroupButtons,
} from "../src/components";

const FormElements = () => {
  const list = [
    "Нельзя с питомцами",
    "Без вечеринок и мероприятий",
    "Время прибытия — после 13:00, а выезд до 12:00",
  ];
  return (
    <>
      <Head>
        <title>Toxin | FormElements</title>
      </Head>
      <Layout>
        <Wrapper>
          <Row>
            <Column>
              <Component>
                <Title>Text Field</Title>
                <TextField placeholder="Email" />
              </Component>
              <Component>
                <Title>Text Field</Title>
                <TextField placeholder="Email" />
              </Component>
            </Column>
            <Column>
              <Component>
                <Title>Checkbox Buttons</Title>
                <GroupButtons>
                  <CheckboxButton label="Можно курить" />
                  <CheckboxButton actived label="Можно с питомцами" />
                  <CheckboxButton
                    actived
                    label="Можно пригласить гостей (до 10 человек)"
                  />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Radio Buttons</Title>
                <RadioButtons name="gender" values={["Мужчина", "Женщина"]} />
              </Component>
              <Component>
                <Title>Toggle</Title>
                <GroupButtons>
                  <ToggleButton actived label="Получать спецпредложения" />
                  <ToggleButton label="Получать спецпредложения" />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Like Button</Title>
                <GroupButtons direction="row">
                  <LikeButton />
                  <LikeButton actived />
                </GroupButtons>
              </Component>
              <Component>
                <Title>Rate Button</Title>
                <GroupButtons direction="row">
                  <RateButton rate={4} />
                  <RateButton rate={5} />
                </GroupButtons>
              </Component>
            </Column>
            <Column>
              <Component>
                <Title>Buttons</Title>
                <GroupButtons>
                  <Button>Click Me</Button>
                  <Button outlined>Click Me</Button>
                  <Button actioned>Click Me</Button>
                </GroupButtons>
              </Component>
            </Column>
          </Row>
          <Row>
            <Column>4</Column>
            <Column>5</Column>
            <Column>6</Column>
          </Row>
          <Row>
            <Column>7</Column>
            <Column>
              <Component>
                <Title>Rich Checkbox Buttons</Title>
                <GroupButtons>
                  <CheckboxButton
                    label="Широкий коридор"
                    rich="Ширина коридоров в номере не менее 91 см."
                  />
                  <CheckboxButton
                    label="Помощник для инвалидов"
                    rich="На 1 этаже вас встретит специалист  и проводит до номера."
                  />
                </GroupButtons>
              </Component>
            </Column>
            <Column></Column>
          </Row>
          <Row>
            <Column>10</Column>
            <Column>11</Column>
            <Column>12</Column>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
};

export default FormElements;
