import React from "react";
import { Container } from "react-bootstrap";
import SingleFeature from "../SingleFeature";
import contents from "./contents";

const Features = () => {
  return (
    <Container>
      {contents.map((content, index) => {
        if (index % 2 === 0) {
          return (
            <SingleFeature
              src={content.src}
              title={content.title}
              text={content.text}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order="first"
            />
          );
        } else {
          return (
            <SingleFeature
              src={content.src}
              title={content.title}
              text={content.text}
              styling={content.styling}
              alt={content.alt}
              key={content.alt}
              order="last"
            />
          );
        }
      })}
    </Container>
  );
};

export default Features;
