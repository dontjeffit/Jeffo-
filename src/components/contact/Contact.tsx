import { useState, useRef, type FormEvent } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import Headers from "../Headers";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState<
    "idle" | "pending" | "success" | "failed"
  >("idle");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading("pending");

    try {
      await emailjs.sendForm(
        "service_e2op207",
        "template_wexwylh",
        form.current,
        "BrckqBmi_TDwsIBJK",
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      form.current.reset();
      setLoading("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      setLoading("failed");
    }
  };

  return (
    <Box id="contact" mb={"100px"} className="cc-container page-alignment">
      <Headers
        title="Send me a message"
        subTitle="Got a question or proposal, or just want to say hello? Go ahead."
      />

      <form ref={form} onSubmit={sendEmail}>
        <Flex
          direction={"column"}
          gap={"20px"}
          width={"100%"}
          maxW={"660px"}
          margin={"0 auto"}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify={"space-between"}
            gap={{ base: "20px", sm: 0 }}
          >
            {/* Name */}
            <Box
              className="bg-purple"
              padding={"10px 10px 5px 10px"}
              width={{ base: "100%", sm: "48%" }}
              borderRadius={"10px"}
            >
              <FormControl isRequired>
                <FormLabel width={"max-content"}>
                  <p style={{ marginBottom: "10px" }} className="text-white">
                    Name
                  </p>
                </FormLabel>

                <Input
                  name="name"
                  required
                  className="text-white"
                  border={"none"}
                  _focus={{ border: "none", boxShadow: "none" }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setLoading("idle");
                  }}
                />
              </FormControl>
            </Box>

            {/* Email */}
            <Box
              className="bg-purple"
              padding={"10px 10px 5px 10px"}
              width={{ base: "100%", sm: "48%" }}
              borderRadius={"10px"}
            >
              <FormControl isRequired>
                <FormLabel width={"max-content"}>
                  <p style={{ marginBottom: "10px" }} className="text-white">
                    E-mail
                  </p>
                </FormLabel>

                <Input
                  name="email"
                  required
                  type="email"
                  className="text-white"
                  border={"none"}
                  _focus={{ border: "none", boxShadow: "none" }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setLoading("idle");
                  }}
                />
              </FormControl>
            </Box>
          </Flex>

          {/* Subject */}
          <Box
            className="bg-purple"
            padding={"10px 10px 5px 10px"}
            borderRadius={"10px"}
          >
            <FormControl isRequired>
              <FormLabel width={"max-content"}>
                <p style={{ marginBottom: "10px" }} className="text-white">
                  Subject
                </p>
              </FormLabel>

              <Input
                name="subject"
                required
                className="text-white"
                border={"none"}
                _focus={{ border: "none", boxShadow: "none" }}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setLoading("idle");
                }}
              />
            </FormControl>
          </Box>

          {/* Message */}
          <Box
            className="bg-purple"
            padding={"10px 10px 5px 10px"}
            borderRadius={"10px"}
          >
            <FormControl isRequired>
              <FormLabel width={"max-content"}>
                <p style={{ marginBottom: "10px" }} className="text-white">
                  Message
                </p>
              </FormLabel>

              <Textarea
                name="message"
                h={"200px"}
                required
                className="text-white"
                border={"none"}
                _focus={{ border: "none", boxShadow: "none" }}
                placeholder="Tell me a little about what you have in mind..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setLoading("idle");
                }}
              />
            </FormControl>
          </Box>

          {/* Submit Button */}
          <button
            disabled={loading === "pending"}
            type="submit"
            style={{
              width: "100%",
              opacity: loading === "pending" ? 0.7 : 1,
              cursor: loading === "pending" ? "not-allowed" : "pointer",
            }}
          >
            <Flex
              padding={"20px 15px"}
              className="bg-blue bg-hover-dark-3-blue active"
              align={"center"}
              gap={"15px"}
              borderRadius={"10px"}
              justify={"center"}
            >
              <h5 className="text-white fw-bold medium-text">
                {loading === "pending"
                  ? "Sending..."
                  : loading === "success"
                    ? "Message Sent!"
                    : loading === "failed"
                      ? "Try Again"
                      : "Shoot"}
              </h5>

              <Icon boxSize={5} className="text-white" as={BsSend} />
            </Flex>
          </button>

          {/* Feedback Messages */}
          {loading === "success" && (
            <p className="text-white" style={{ textAlign: "center" }}>
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}

          {loading === "failed" && (
            <p style={{ color: "#ff6b6b", textAlign: "center" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </Flex>
      </form>
    </Box>
  );
};

export default Contact;
