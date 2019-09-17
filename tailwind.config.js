/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Nunito\\ Sans", "sans-serif"],
      serif: ["Crimson\\ Text", "serif"]
    },
    extend: {
      spacing: {
        "7": "1.75rem",
        "14": "3.5rem",
        "18": "4.5rem",
        "24-25": "6.0625rem",
        "29": "7.3125rem",
        "44": "11rem",
        "52": "13rem",
        "60": "15rem",
        "72": "18rem",
        "74": "18.5rem",
        "78": "19.5rem",
        "80": "20rem",
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem"
      },
      inset: {
        "14p": "14%",
        "20p": "20%",
        "1/12": "8.3333%",
        "2/12": "16.6667%",
        "3/12": "25%",
        "4/12": "33.3333%",
        "5/12": "41.6667%",
        "6/12": "50%",
        "7/12": "58.3333%",
        "8/12": "66.6667%",
        "9/12": "75%",
        "10/12": "83.3333%",
        "11/12": "91.6667%",
        "12/12": "100%",
        "56": "14rem",
        "-84": "-21rem"
      },
      fontSize: {
        xxs: "0.625rem"
      },
      zIndex: {
        "-10": "-10"
      },
      height: {
        "43": "10.75rem",
        "80vh": "80vh",
        "90vh": "90vh",
        "93vh": "93vh"
      },
      width: {
        "70p": "70%",
        "30p": "30%",
        "132-5": "33.125rem",
        "148": "37rem"
      },
      minWidth: {
        "40": "10rem",
        "48": "12rem",
        "52": "13rem",
        "60": "15rem"
      },
      minHeight: {
        "72": "18rem",
        "104": "26rem"
      },
      maxWidth: {
        "64": "16rem",
        "72": "18rem",
        "78": "19.5rem",
        "96": "24rem",
        "160": "40rem"
      },
      maxHeight: {
        "0": "0",
        "9": "36rem",
        "90vh": "90vh"
      },
      lineHeight: {
        looser: 3.25
      },
      colors: {
        "black-t": "rgba(0, 0, 0, 0.7)",
        "black-t-light": "rgba(0, 0, 0, 0.4)",
        "black-t-20": "rgba(0, 0, 0, 0.2)",
        "black-t-30": "rgba(0, 0, 0, 0.3)",
        "white-t": "rgba(255, 255, 255, 0.9)",
        "base-blue": {
          100: "#E6EBF5",
          200: "#BFCCE6",
          300: "#99ADD6",
          400: "#4D70B8",
          500: "#003399",
          600: "#002E8A",
          700: "#001F5C",
          800: "#001745",
          900: "#000F2E"
        },
        "base-blue-darker": {
          100: "#E6E8EC",
          200: "#BFC5D1",
          300: "#99A2B5",
          400: "#4D5D7D",
          500: "#001745",
          600: "#00153E",
          700: "#000E29",
          800: "#000A1F",
          900: "#000715"
        },
        mexico: {
          100: "#E6F0ED",
          200: "#BFD9D1",
          300: "#99C3B5",
          400: "#4D957E",
          500: "#006847",
          600: "#005E40",
          700: "#003E2B",
          800: "#002F20",
          900: "#001F15"
        },
        peru: {
          100: "#FBE7E9",
          200: "#F6C3C8",
          300: "#F09FA7",
          400: "#E45865",
          500: "#D91023",
          600: "#C30E20",
          700: "#820A15",
          800: "#620710",
          900: "#41050B"
        },
        colombia: {
          100: "#FFFAE8",
          200: "#FEF4C5",
          300: "#FEEDA2",
          400: "#FDDF5C",
          500: "#FCD116",
          600: "#E3BC14",
          700: "#977D0D",
          800: "#715E0A",
          900: "#4C3F07"
        },
        brazil: {
          100: "#E6F5EB",
          200: "#BFE6CE",
          300: "#99D7B1",
          400: "#4DBA76",
          500: "#009C3B",
          600: "#008C35",
          700: "#005E23",
          800: "#00461B",
          900: "#002F12"
        },
        argentina: {
          100: "#F1F7FC",
          200: "#DCEAF7",
          300: "#C7DEF2",
          400: "#9EC5E9",
          500: "#74ACDF",
          600: "#689BC9",
          700: "#466786",
          800: "#344D64",
          900: "#233443"
        },
        switzerland: {
          100: "#FFE6E6",
          200: "#FFBFBF",
          300: "#FF9999",
          400: "#FF4D4D",
          500: "#FF0000",
          600: "#E60000",
          700: "#990000",
          800: "#730000",
          900: "#4D0000"
        },
        "green-gray": {
          100: "#EDF0F2",
          200: "#D3DADE",
          300: "#B8C3C9",
          400: "#8297A1",
          500: "#4D6A79",
          600: "#455F6D",
          700: "#2E4049",
          800: "#233036",
          900: "#172024"
        }
      }
    }
  },
  variants: {
    margin: ["responsive", "hover", "focus"],
    display: ["responsive", "group-hover"],
    width: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderWidth: ["responsive", "focus"],
    borderColor: ["responsive", "hover", "focus", "active"],
    visibility: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: [
    require("tailwindcss-hyphens"),
    require("tailwindcss-transitions")(),
    function({ addUtilities }) {
      const newUtilities = {
        ".scale-0": {
          transform: "scale(0)"
        },
        ".scale-100": {
          transform: "scale(1)"
        },
        ".scale-102": {
          transform: "scale(1.02)"
        }
      };

      addUtilities(newUtilities, ["responsive", "hover", "group-hover"]);
    }
  ]
};
