import * as computer from "../utils/Json/computer.json";
import * as marketing from "../utils/Json/marketing.json";
import * as code from "../utils/Json/code.json";
export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: computer.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
export const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: marketing.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: code.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
