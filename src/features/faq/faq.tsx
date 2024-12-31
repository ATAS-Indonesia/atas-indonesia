import { FAQ_DATA } from "./constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div>
      <div className="max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Daftar pertanyaan yang sering ditanyakan kepada mimin ATAS Indonesia
        </p>
      </div>
      <div className="mt-10 pt-10 border-t border-gray-200">
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2"]}
          className="w-full"
        >
          {FAQ_DATA.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
