import { useState, useEffect } from "react";

import Head from "next/head";
import Layout from "../src/layouts";
import {
  Wrapper,
  List,
  Item,
  ColorPreview,
  ColorData,
  ColorName,
  ColorValue,
  Tag,
  TextPreview,
} from "../src/styles/ColorTypes.styled";

const ColorsType = () => {
  const [colors, setColors] = useState([]);
  const [textVariants, setTextVariants] = useState([]);

  // Get Colors and text variants
  useEffect(async () => {
    const getColors = async () => {
      await fetch("/data/colors.json")
        .then((res) => res.json())
        .then((data) => setColors(data.colors));
    };
    const getText = async () => {
      await fetch("/data/text_variants.json")
        .then((res) => res.json())
        .then((data) => setTextVariants(data.text_variants));
    };
    getColors();
    getText();
  }, []);

  return (
    <>
      <Head>
        <title>Toxin | ColorsType</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Wrapper>
          <List>
            {colors &&
              colors.map((color, index) => (
                <Item key={`${color.name}_${index}`} marginBottom="20px">
                  <ColorPreview color={color.value} opacity={color.opacity} />
                  <ColorData>
                    <ColorName>{color.name}</ColorName>
                    <ColorValue>{color.value}</ColorValue>
                  </ColorData>
                </Item>
              ))}
          </List>
          <List>
            {textVariants &&
              textVariants.map((variant, index) => (
                <Item key={`${variant.tag}_${index}`} marginBottom="51px">
                  <Tag size={variant.size} lineHeight={variant.lineHeight}>
                    {variant.tag}
                  </Tag>
                  <TextPreview
                    size={variant.size}
                    weight={variant.weight}
                    lineHeight={variant.lineHeight}
                    opacity={index === textVariants.length - 1 ? 0.75 : 1}
                  >
                    {variant.tag === "H3"
                      ? variant.example.toUpperCase()
                      : variant.example}
                  </TextPreview>
                </Item>
              ))}
          </List>
        </Wrapper>
      </Layout>
    </>
  );
};

export default ColorsType;
