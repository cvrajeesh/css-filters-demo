/** @jsx jsx */
import { css } from "@emotion/core";

const filters = [
  { name: "Normal", style: css`` },
  {
    name: "1977",
    style: css`
      filter: sepia(0.5) hue-rotate(-30deg) saturate(1.2) contrast(0.8);
    `
  },
  {
    name: "Willow",
    style: css`
      filter: brightness(1.2) contrast(0.85) saturate(0.05) sepia(0.2);
    `
  },
  {
    name: "Walden",
    style: css`
      filter: sepia(0.35) contrast(0.8) brightness(1.25) saturate(1.4);

      &::before {
        background: rgba(229, 240, 128, 0.5);
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Valencia",
    style: css`
      filter: sepia(0.25) contrast(1.1) brightness(1.1);

      &::before {
        background: rgba(230, 193, 61, 0.1);
        content: "";
        mix-blend-mode: lighten;
      }
    `
  },
  {
    name: "Toaster",
    style: css`
      filter: sepia(0.25) contrast(1.5) brightness(0.95) hue-rotate(-15deg);

      &::before {
        background: radial-gradient(
          circle,
          rgb(128, 78, 15),
          rgba(0, 0, 0, 0.25)
        );
        content: "";
        mix-blend-mode: screen;
      }
    `
  },
  {
    name: "Sutro",
    style: css`
      filter: sepia(0.4) contrast(1.2) brightness(0.9) saturate(1.4)
        hue-rotate(-10deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 50%,
          rgba(0, 0, 0, 0.5) 90%
        );
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Nashville",
    style: css`
      filter: sepia(0.25) contrast(1.5) brightness(0.9) hue-rotate(-15deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          rgba(128, 78, 15, 0.5) 0,
          rgba(128, 78, 15, 0.65) 100%
        );
        content: "";
        mix-blend-mode: screen;
      }
    `
  },
  {
    name: "Amaro",
    style: css`
      filter: hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5);
    `
  },
  {
    name: "Aden",
    style: css`
      filter: sepia(0.2) brightness(1.15) saturate(1.4);
      &::before {
        background: rgba(125, 105, 24, 0.1);
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Ashby",
    style: css`
      filter: sepia(0.5) contrast(1.2) saturate(1.8);
      &::before {
        background: rgba(125, 105, 24, 0.35);
        content: "";
        mix-blend-mode: lighten;
      }
    `
  },
  {
    name: "Brannan",
    style: css`
      filter: sepia(0.4) contrast(1.25) brightness(1.1) saturate(0.9)
        hue-rotate(-2deg);
    `
  },
  {
    name: "Brooklyn",
    style: css`
      filter: sepia(0.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
      &::before {
        background: rgba(127, 187, 227, 0.2);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Charmes",
    style: css`
      filter: sepia(0.25) contrast(1.25) brightness(1.25) saturate(1.35)
        hue-rotate(-5deg);
      &::before {
        background: rgba(125, 105, 24, 0.25);
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Clarendon",
    style: css`
      filter: sepia(0.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);

      &::before {
        background: rgba(127, 187, 227, 0.4);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Crema",
    style: css`
      filter: sepia(0.5) contrast(1.25) brightness(1.15) saturate(0.9)
        hue-rotate(-2deg);

      &::before {
        background: rgba(125, 105, 24, 0.2);
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Dogpatch",
    style: css`
      filter: sepia(0.35) saturate(1.1) contrast(1.5);
    `
  },
  {
    name: "Earlybird",
    style: css`
      filter: sepia(0.25) contrast(1.25) brightness(1.15) saturate(0.9)
        hue-rotate(-5deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 0,
          rgba(125, 105, 24, 0.2) 100%
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Gingham",
    style: css`
      filter: contrast(1.1) brightness(1.1);

      &::before {
        background: rgb(230, 230, 230);
        content: "";
        mix-blend-mode: soft-light;
      }
    `
  },
  {
    name: "Ginza",
    style: css`
      filter: sepia(0.25) contrast(1.15) brightness(1.2) saturate(1.35)
        hue-rotate(-5deg);

      &::before {
        background: rgba(125, 105, 24, 0.15);
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Hefe",
    style: css`
      filter: sepia(0.4) contrast(1.5) brightness(1.2) saturate(1.4)
        hue-rotate(-10deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 0,
          rgba(0, 0, 0, 0.25) 100%
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Helena",
    style: css`
      filter: sepia(0.5) contrast(1.05) brightness(1.05) saturate(1.35);

      &::before {
        background: rgba(158, 175, 30, 0.25);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Hudson",
    style: css`
      filter: sepia(0.25) contrast(1.2) brightness(1.2) saturate(1.05)
        hue-rotate(-15deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 25%,
          rgba(25, 62, 167, 0.25) 100%
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Inkwell",
    style: css`
      filter: brightness(1.25) contrast(0.85) grayscale(1);
    `
  },
  {
    name: "Juno",
    style: css`
      filter: sepia(0.35) contrast(1.15) brightness(1.15) saturate(1.8);

      &::before {
        background: rgba(127, 187, 227, 0.2);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Kelvin",
    style: css`
      filter: sepia(0.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          rgba(128, 78, 15, 0.25) 0,
          rgba(128, 78, 15, 0.5) 100%
        );
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Lark",
    style: css`
      filter: sepia(0.25) contrast(1.2) brightness(1.3) saturate(1.25);
    `
  },
  {
    name: "Lo-Fi",
    style: css`
      filter: saturate(1.1) contrast(1.5);
    `
  },
  {
    name: "Ludwig",
    style: css`
      filter: sepia(0.25) contrast(1.05) brightness(1.05) saturate(2);

      &::before {
        background: rgba(125, 105, 24, 0.1);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "Maven",
    style: css`
      filter: sepia(0.35) contrast(1.05) brightness(1.05) saturate(1.75);

      &::before {
        background: rgba(158, 175, 30, 0.25);
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Mayfair",
    style: css`
      filter: contrast(1.1) brightness(1.15) saturate(1.1);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 0,
          rgba(175, 105, 24, 0.4) 100%
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Moon",
    style: css`
      filter: brightness(1.4) contrast(0.95) saturate(0) sepia(0.35);
    `
  },
  {
    name: "Perpetua",
    style: css`
      filter: contrast(1.1) brightness(1.25) saturate(1.1);

      &::before {
        background: linear-gradient(
          to bottom,
          rgba(0, 91, 154, 0.25),
          rgba(230, 193, 61, 0.25)
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  },
  {
    name: "Poprocket",
    style: css`
      filter: sepia(0.15) brightness(1.2);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          rgba(206, 39, 70, 0.75) 40%,
          rgba(0, 0, 0, 1) 80%
        );
        content: "";
        mix-blend-mode: screen;
      }
    `
  },
  {
    name: "Reyes",
    style: css`
      filter: sepia(0.75) contrast(0.75) brightness(1.25) saturate(1.4);
    `
  },
  {
    name: "Rise",
    style: css`
      filter: sepia(0.25) contrast(1.25) brightness(1.2) saturate(0.9);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          transparent 0,
          rgba(230, 193, 61, 0.25) 100%
        );
        content: "";
        mix-blend-mode: lighten;
      }
    `
  },
  {
    name: "Sierra",
    style: css`
      filter: sepia(0.25) contrast(1.5) brightness(0.9) hue-rotate(-15deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          rgba(128, 78, 15, 0.5) 0,
          rgba(0, 0, 0, 0.65) 100%
        );
        content: "";
        mix-blend-mode: screen;
      }
    `
  },
  {
    name: "Skyline",
    style: css`
      filter: sepia(0.15) contrast(1.25) brightness(1.25) saturate(1.2);
    `
  },
  {
    name: "Slumber",
    style: css`
      filter: sepia(0.35) contrast(1.25) saturate(1.25);

      &::before {
        background: rgba(125, 105, 24, 0.2);
        content: "";
        mix-blend-mode: darken;
      }
    `
  },
  {
    name: "Stinson",
    style: css`
      filter: sepia(0.35) contrast(1.25) brightness(1.1) saturate(1.25);

      &::before {
        background: rgba(125, 105, 24, 0.45);
        content: "";
        mix-blend-mode: lighten;
      }
    `
  },
  {
    name: "Vesper",
    style: css`
      filter: sepia(0.35) contrast(1.15) brightness(1.2) saturate(1.3);

      &::before {
        background: rgba(125, 105, 24, 0.25);
        content: "";
        mix-blend-mode: overlay;
      }
    `
  },
  {
    name: "X Pro II",
    style: css`
      filter: sepia(0.45) contrast(1.25) brightness(1.75) saturate(1.3)
        hue-rotate(-5deg);

      &::before {
        background: radial-gradient(
          circle closest-corner,
          rgba(0, 91, 154, 0.35) 0,
          rgba(0, 0, 0, 0.65) 100%
        );
        content: "";
        mix-blend-mode: multiply;
      }
    `
  }
];

export default filters;
