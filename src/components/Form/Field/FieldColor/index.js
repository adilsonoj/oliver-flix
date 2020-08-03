import React from "react";
import { Label, InputColor, Container } from "../stytles";

function FieldColor({ label, type, name, value, onChange }) {
  return (
    <Container>
      <Label>{label} </Label>
      <InputColor type={type} name={name} value={value} onChange={onChange} />
    </Container>
  );
}

export default FieldColor;
