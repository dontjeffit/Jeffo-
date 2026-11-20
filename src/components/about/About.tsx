import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import Headers from "../Headers";
import { AiOutlineDownload } from "react-icons/ai";


const About = () => {
  return (
    <Box id="about" mb={"100px"} className="cc-container page-alignment">
      <Headers title="About me" subTitle="Get to know me" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        align={"center"}
        gap={{ base: "20px", md: 0 }}
      >
        <Box
          width={{ base: "100%", md: "46%" }}
          display={"grid"}
          placeItems={"center"}
        >
          <Box
            width={{ base: "260px", sm: "320px" }}
            h={{ base: "260px", sm: "320px" }}
            borderRadius={"50%"}
            border={"5px solid #576ee0"}
          >
            <Image
              width={"100%"}
              h={"100%"}
              alt="Picture"
              objectFit={"cover"}
              borderRadius={"50%"}
              src="/images/mypic.jpg"
            />
          </Box>
        </Box>

        <Box width={{ base: "100%", md: "46%" }}>
          <p className="text-white" style={{ marginBottom: "15px" }}>
            I'm Jefferson Anu-John, a stereotypical Igbo man. I love doing
            business, and I love selling things to people, especially
            unconventional products and ideas.
          </p>

          <p className="text-fade-white" style={{ marginBottom: "25px" }}>
            I work across business development, sales, growth, analytics and
            partnerships. I enjoy finding opportunities, understanding what
            people need, positioning solutions, building relationships, and
            turning insights into business decisions.{" "}
          </p>

          <p className="text-fade-white" style={{ marginBottom: "10px" }}>
            Whether I’m building a business or selling a product, I embrace the
            discomfort of pursuing excellence.
          </p>
          <p className="text-white">
            Looking to grow your business? let's work together.
          </p>
          <a
            href="/images/Jefferson Anu-John CV.pdf"
            download="Jefferson Anu-John CV.pdf"
          >
            <Flex
              mt={"25px"}
              padding={"20px 15px"}
              className="bg-blue bg-hover-dark-3-blue"
              width={"max-content"}
              align={"center"}
              gap={"15px"}
              borderRadius={"10px"}
            >
              <p className="text-white fw-bold">Download CV</p>
              <Icon boxSize={6} className="text-white" as={AiOutlineDownload} />
            </Flex>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
