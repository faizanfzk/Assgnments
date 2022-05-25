import { Button, ButtonGroup } from "@chakra-ui/react";
import "./Button2.css";

export const Button2 = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div className="btn">
        <Button
          colorScheme="rgb(127,90,212)"
          variant="solid"
          bg="rgb(105,102,211)"
        >🌍 Remote</Button>

        <Button
          colorScheme="rgb(127,90,212)"
          variant="solid"
          bg="rgb(105,102,211)"
        > 🖱️ Tech</Button>
        <Button
          colorScheme="rgb(127,90,212)"
          variant="solid"
          bg="rgb(105,102,211)"
        > 🉐 Marketing</Button>
      </div>
    </div>
  );
};
