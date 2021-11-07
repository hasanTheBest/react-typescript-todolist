// import original module declaration
import "styled-components";

// and extend them!
declare module "styled-components" {
  interface defaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
