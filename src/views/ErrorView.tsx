// import { Text, Content, Box, Heading } from "@tidbits/react-tidbits";
import { Tooltip } from "antd";
import { Button } from "antd";
import "@styles/ErrorView.css";

function ErrorView() {
  return (
    <>Hekl</>
    // <Content id="error-page" flex={"1 0 auto"}>
    //   <Box pt={"header"}>
    //     <Heading.H1>Oops! 🥺</Heading.H1>
    //   </Box>
    //   <Box pt="spacer30" sb="spacer40" as="article">
    //     <Text sb="spacer20">This is not the page you are looking for...</Text>
    //   </Box>
      // {/* NOTE: Couldn't get href to work with Tidbit's button in TS */}
      // <Tooltip title="Country roads..." placement="bottom">
      //   <Button href="/" type="primary">
      //     Take me home...
      //   </Button>
      // </Tooltip>
    // </Content>
  );
}

export default ErrorView;
