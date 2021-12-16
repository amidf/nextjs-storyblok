import { createGlobalStyle } from "styled-components";

import { FONT } from "../../constants";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
  }

  html {
    font-family: Montserrat, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    min-width: 320px;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #__next {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  ul {
    padding-inline-start: 0;
  }

  @media (max-width: 480px) {
    iframe {
      width: 290px;
      height: 180px;
    }
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  body {
    	background: ${(p) => p.theme.bg};
      overflow-x: hidden;
	}

	::-webkit-scrollbar {
		width: 16px;
		height: 16px;
		position: absolute;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 20px;
		border: 4px solid transparent;
		background-clip: content-box;
		background-color: rgba(255, 255, 255, 0.15);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(255, 255, 255, 0.25);
	}

  .leadin-input-wrapper.form-fields {
    margin-bottom: 48px !important;

    label {
      font-family: ${FONT.PRIMARY} !important;
      font-style: normal !important;
      font-weight: normal !important;
      font-size: 15px !important;
      line-height: 28px !important;
      color: rgba(0, 21, 83, 0.5) !important;
    }

    .error-text {
      font-family: ${FONT.PRIMARY} !important;
      font-size: 11px !important;
      line-height: 16px !important;
      color: #E63544 !important;
      margin-left: 8px !important;
    }

    input {
      height: 56px !important;
      background-color: #F2F3FA !important;
      border-radius: 8px !important;
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
      font-family: ${FONT.PRIMARY} !important;
      font-style: normal !important;
      font-weight: normal !important;
      font-size: 17px !important;
      line-height: 32px !important;
      letter-spacing: 0.2px !important;
      color: #001553 !important;
      padding: 12px !important;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
      border: none !important;
      -webkit-text-fill-color: #001553 !important;
      -webkit-box-shadow: none !important;
      transition: none !important;
      font-family: ${FONT.PRIMARY} !important;
      font-style: normal !important;
      font-weight: normal !important;
      font-size: 17px !important;
      line-height: 32px !important;
      letter-spacing: 0.2px !important;
      color: #001553 !important;
    }
  }

  

  .leadinModal .leadinModal-content {
    overflow: visible !important;
    max-height: 100% !important;
  }
   
  @media (min-width: 769px) {
    .leadin-input-wrapper.form-fields {
      padding: 0 24px !important;
    }

    .leadin-message-wrapper {
      p {
        padding: 0 24px !important;
      }
    }

    .leadinModal-description-body {
      padding: 0 24px !important;
    }

    .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadin-content-body .leadin-preview-wrapper, .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadin-content-body #leadin-content-form-wrapper {
      padding: 0 !important;
    }

    .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadinModal-content button:not(.leadinModal-close) {
      height: 56px !important;
      border-radius: 0 0 18px 18px !important;
    }

    .leadinModal-content {
      h4 {
        padding: 40px 24px 0 24px !important;
      }
    }
  }

  .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadinModal-close {
    border-radius: 50% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px !important;
    right: 15px !important;

    ::before {
      color: #142470 !important;
      font-size: 42px !important;
      padding-top: 8px !important;
      padding-right: 8px !important;
    }

    :hover {
      background-color: #f2f3fa !important;
    }
    
    :active {
      background-color: #e4e7fb !important;
    }
  }

  .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadinModal-content {
    background-color: #fff !important;
    border-radius: 18px !important;

    h4 {
      font-family: ${FONT.SECONDARY};
      color: #001553 !important;
      font-weight: bold !important;
      font-size: 32px !important;
      line-height: 40px !important;
    }

    p,
    li {
      color: #001553 !important;
      font-family: ${FONT.PRIMARY} !important;
      font-weight: 400 !important;
      font-size: 15px !important;
      line-height: 28px !important;
    }

    button:not(.leadinModal-close) {
      font-weight: bold !important;
      font-size: 13px !important;
      line-height: 15px !important;
      text-transform: uppercase;
      font-family: ${FONT.SECONDARY} !important;
      height: 56px !important;
    }
  }

  .leadinModal.leadinModal-theme-default {
    padding-top: 24px !important;
  }

  @media only screen and (max-width: 768px) {
    .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadin-content-body {
      padding: 0 !important;
    }
  }
`;
