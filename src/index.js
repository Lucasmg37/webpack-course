import CodeBlock from "./components/CodeBlock";
import Image from "./components/Image";
import Log from "./components/Log";
import Title from "./components/Title";

const title = new Title();
const log = new Log();
const image = new Image();
const code = new CodeBlock();

title.create("Webpack Course");
log.create("npm init -y");
log.create("npm install webpack webpack-cli --save-dev");

log.create("Add script to Run Build by Webpack");
log.create("Create webpack file");

log.create("npm install --save-dev style-loader css-loader");
log.create("npm install --save-dev file-loader");

log.create("npm install --save-dev sass-loader node-sass");

image.addImage();
code.create();