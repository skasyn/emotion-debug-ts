import ReachPopover, { positionDefault } from "@reach/popover";
import styled from "@emotion/styled/macro";

const Popover = styled(ReachPopover)(({ theme }) => ({
  background: theme.mainColor,
  boxShadow: "0px 8px 24px rgba(15, 21, 84, 0.05)",
  borderRadius: 12,
  padding: 16,
}));

Popover.defaultProps = {
  position: positionDefault,
};

export { Popover };
