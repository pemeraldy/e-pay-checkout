const iframeStyle = `
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      width:100%;
      height:100%; 
      border:none;
      margin:0;
      padding:0;
      overflow:hidden;
      z-index:999999;`;
const loaderCss = `
      .loader-container{
        position:absolute;
        top:0; left:0;
        height:100vh; width: 100%;
        display:flex;
        justify-content:center; 
        align-items: center;
        background:#f0ddfc;
      }
      .loader,
      .loader:before,
      .loader:after {
        border-radius: 50%;
      }
      .loader {
        color: #3f0547;
        font-size: 11px;
        text-indent: -99999em;
        margin: 55px auto;
        position: relative;
        width: 10em;
        height: 10em;
        box-shadow: inset 0 0 0 1em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
      }
      .loader:before,
      .loader:after {
        position: absolute;
        content: '';
      }
      .loader:before {
        width: 5.2em;
        height: 10.2em;
        background: #f0ddfc;
        border-radius: 10.2em 0 0 10.2em;
        top: -0.1em;
        left: -0.1em;
        -webkit-transform-origin: 5.1em 5.1em;
        transform-origin: 5.1em 5.1em;
        -webkit-animation: load2 2s infinite ease 1.5s;
        animation: load2 2s infinite ease 1.5s;
      }
      .loader:after {
        width: 5.2em;
        height: 10.2em;
        background: #f0ddfc;
        border-radius: 0 10.2em 10.2em 0;
        top: -0.1em;
        left: 4.9em;
        -webkit-transform-origin: 0.1em 5.1em;
        transform-origin: 0.1em 5.1em;
        -webkit-animation: load2 2s infinite ease;
        animation: load2 2s infinite ease;
      }
      @-webkit-keyframes load2 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes load2 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `;
function onLoad() {
  console.log("iframe loaded!!!");
  // document.querySelector('.loader-container').style.display = 'none'
}
function createLoader() {
  const loaderElement = document.createElement("DIV");
  const loaderContainer = document.createElement("DIV");
  loaderContainer.classList.add("loader-container");
  loaderElement.classList.add("loader");
  loaderContainer.appendChild(loaderElement);
  document.body.appendChild(loaderContainer);

  // Create styleSheet
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = loaderCss;
  document.head.appendChild(styleSheet);
}
function loadIframe(config) {
  // const { apiKey, userEmail, origin, currency } = config;
  createLoader();
  const iframe = document.createElement("IFRAME");
  iframe.setAttribute("ID", "tiqwaEpay");
  iframe.style = "display:none;";
  iframe.src = "index.html"; //https://adoring-saha-1e3c5b.netlify.app
  // Iframe TODO: Give id to iframe
  document.querySelector("body").appendChild(iframe);
  iframe.onload = function () {
    iframe.style += "display: block";
    iframe.style = iframeStyle;
  };
}
function closeIframe() {
  const windowParent = window.parent.document;
  const iframe = windowParent.getElementById("tiqwaEpay");
  // console.log(iframe)
  windowParent.querySelector("body").removeChild(iframe);
  windowParent.querySelector("body");
}
