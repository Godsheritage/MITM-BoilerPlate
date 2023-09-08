// import Text from "@tidbits/react-tidbits/Text";
// import Box from "@tidbits/react-tidbits/Box";
// import Footer from "@tidbits/react-tidbits/Footer";
// import Breadcrumbs from "@tidbits/react-tidbits/Breadcrumbs";
// import { Piped, LI } from "@tidbits/react-tidbits/List";
// import HR from "@tidbits/react-tidbits/HR";
import { useMatches } from "@tanstack/router";

const date = new Date();

function buildBreadcrumbs(route: string[]) {
  // const crumbs = route
  //   .slice(1)
  //   .map((e) => <Breadcrumbs.Crumb>{e}</Breadcrumbs.Crumb>);

  return (
    <>Foot</>
    // <Breadcrumbs sb="spacer20">
    //   <Breadcrumbs.Crumb textStyle="bodySmallEmph">
    //     {import.meta.env.VITE_APP_NAME}
    //   </Breadcrumbs.Crumb>
    //   {crumbs}
    // </Breadcrumbs>
  );
}

export function FooterComponent() {
  const routeMatch = useMatches();
  const currentRoute: string[] = routeMatch.map(
    (route) => route.context.title as string
  );

  return (
    // <Footer flexShrink="0">
    //   {buildBreadcrumbs(currentRoute)}
    //   <HR sb="spacer15" />
    //   <Text as="div" color="labelCaption" textStyle="bodySmallRegular">
    //     <Box display={["block", "inline"]}>
    //       {import.meta.env.VITE_APP_NAME} v{APP_VERSION}
    //     </Box>
    //     <Box display={["block", "inline"]} ml={["0", "30px"]}>
    //       Copyright © {date.getFullYear()} Apple Inc. All rights reserved. For
    //       internal use only.
    //     </Box>
    //     <Piped textStyle="bodySmallRegular" display="inline" ml={["0", "30px"]}>
    //       <LI color="labelCaption">
    //         <Footer.Link href="#">Terms of Service</Footer.Link>
    //       </LI>
    //       <LI color="labelCaption">
    //         <Footer.Link href="#">Privacy Policy</Footer.Link>
    //       </LI>
    //       <LI color="labelCaption">
    //         <Footer.Link href="#">Contact Us</Footer.Link>
    //       </LI>
    //     </Piped>
    //   </Text>
    // </Footer>
    <>footer</>
  );
}
