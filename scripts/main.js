import imageBG from "./image-bg.js";
import burger from "./burger.js";
import da from "./dynamic-adapt.js";
import { buttonUp } from "./arrow-up.js";

imageBG();
burger();
da.init();
buttonUp(767.98, ".arrow-up");
