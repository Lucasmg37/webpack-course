import CodeBlock from "./components/CodeBlock";
import Div from "./components/HTML/Div";
import H1 from "./components/HTML/H1";
import Header from "./components/HTML/Header";
import Paragraph from "./components/HTML/Paragraph";
import Image from "./components/Image";
import Log from "./components/Log";

import CodeWP from '../Data/Codes/webppack.config.html';

import { library, dom } from "@fortawesome/fontawesome-svg-core";

import { faBacon } from '@fortawesome/free-solid-svg-icons'

const icon = document.createElement('i');
icon.classList.add('fas');
icon.classList.add('fa-bacon');
document.body.appendChild(icon);

import './styles/global.scss';
import './styles/styles.scss';
import './styles/fonts.scss';
// import './styles/bootstrap.scss'
// import './styles/bulma.scss'

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

function generateDescription(text) {
  const div = new Div('description-section');
  const p = new Paragraph(text);
  p.render(div.getElement());
  div.render();
}

generateTitle("🚀 Get Started");

generateDescription("Inicialize o projeto.");
code.create(log.create("npm init -y"));

generateDescription("Adicione o webpack ao projeto.");
code.create(log.create("npm install webpack webpack-cli --save-dev"));

generateDescription("Adicione o script em package.json");
code.create(log.create("npm run build"));

generateTitle("⚙️ Configuração");
generateDescription("Crie o arquivo webpack.config.js");
code.create(log.create(CodeWP));

generateTitle("🔩 Loaders");

code.create(log.create("npm install --save-dev style-loader css-loader"));
code.create(log.create("npm install --save-dev file-loader"));
code.create(log.create("npm install --save-dev sass-loader node-sass"));
code.create(log.create("npm install --save-dev html-loader"));
code.create(log.create("npm install --save-dev  url-loader"));

generateTitle("🔮 Babel");

code.create(log.create("npm install --save-dev babel-loader @babel/preset-env @babel/plugin-proposal-object-rest-spread @babel/core"));

const data = { a: 1, b: 3, c: 3 };
const { a, ...rest } = data;
console.log(rest);

generateTitle("🧩 Plugins");
generateDescription("Substitui stile-loader");

code.create(log.create("npm install --save-dev mini-css-extract-plugin"));

code.create(log.create("npm install --save-dev terser-webpack-plugin "));

console.log(VERSION);

code.create(log.create("npm install --save-dev dotenv-webpack"));


console.log(process.env.API_URL);

code.create(log.create("npm install --save-dev html-webpack-plugin"));
code.create(log.create("npm install --save-dev clean-webpack-plugin"));

code.create(log.create("npm install --save-dev webpack-dev-server "));

generateTitle("🔗 Integrações");

code.create(log.create("npm install --save-dev  @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons  @fortawesome/free-solid-svg-icons"));
code.create(log.create("npm install --save-dev bootstrap jquery @popperjs/core"));
code.create(log.create("npm install --save-dev bulma"));

library.add(faBacon);
dom.watch();
