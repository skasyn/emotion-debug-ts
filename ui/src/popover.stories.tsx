import { useRef } from "react";
import { Meta } from "@storybook/react";

import { Popover } from "./popover";

export default {
  title: "Popover",
  component: Popover,
  parameters: {
    controls: {
      exclude: ["as", "theme", "ref"],
    },
  },
} as Meta;

const DivWithRef = () => {
  const ref = useRef(null);

  return (
    <Popover targetRef={ref}>
      <div>look at me</div>
    </Popover>
  );
};
export const Basic = () => <DivWithRef />;
