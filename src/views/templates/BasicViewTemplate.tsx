import Content from "@tidbits/react-tidbits/Content";
import TabbedHeader from "@tidbits/react-tidbits/TabbedHeader";
import Text from "@tidbits/react-tidbits/Text";
import Box from "@tidbits/react-tidbits/Box";

function BasicViewTemplate() {
  return (
    <Content as="article" flex="1 0 auto">
      <TabbedHeader sa="spacer40">
        <TabbedHeader.Title as="h2">Another View</TabbedHeader.Title>
      </TabbedHeader>
      <Box pt="spacer30" sb="spacer40" as="article">
        <Text sb="spacer20">More Text.</Text>
      </Box>
    </Content>
  );
}

export default BasicViewTemplate;
