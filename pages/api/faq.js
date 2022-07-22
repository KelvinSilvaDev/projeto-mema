import faqJson from "./faq.json";

export default function faq(request, response) {
  response.json(faqJson);
}
