import CodeBlock from "./components/CodeBlock";
import Div from "./components/HTML/Div";
import H1 from "./components/HTML/H1";
import Header from "./components/HTML/Header";
import Image from "./components/Image";
import Log from "./components/Log";

import './styles/global.scss';
import './styles/styles.scss';

const log = new Log();
const image = new Image();
const code = new CodeBlock();

const header = new Header();
const h1Header = new H1("Webpack Course");
header.element.appendChild(image.getImgBrand());
header.element.appendChild(h1Header.getElement());
header.render();

function generateTitle(text) {
  const div = new Div('title-section');
  const h1 = new H1(text);
  h1.render(div.getElement());
  div.render();
}

generateTitle("🚀 Get Started");

code.create(log.create("npm init -y"));
code.create(log.create("npm install webpack webpack-cli --save-dev"));

// log.create("Add script to Run Build by Webpack");
// log.create("Create webpack file");


code.create(log.create("npm install --save-dev style-loader css-loader"));
code.create(log.create("npm install --save-dev file-loader"));
code.create(log.create("npm install --save-dev sass-loader node-sass"));