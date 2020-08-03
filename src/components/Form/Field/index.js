import React from "react";
import { Label, InputText, Container } from "./stytles";

function Field({ label, type, name, value, onChange }) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText type={type} name={name} value={value} onChange={onChange} />
    </Container>
  );
}

export default Field;
