"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFAQs: FAQItem[] = [
    {
      question: "What is the difference between FUE and FUT hair transplant?",
      answer: "FUE (Follicular Unit Extraction) involves extracting individual hair follicles one by one, leaving tiny dot scars that are virtually invisible. FUT (Follicular Unit Transplantation) involves removing a strip of scalp from the donor area, which is then dissected into individual grafts. FUE offers no linear scarring and faster recovery, while FUT can provide more grafts in a single session."
    },
    {
      question: "How long does the hair transplant procedure take?",
      answer: "The duration depends on the number of grafts needed. Typically, a session can take anywhere from 4 to 8 hours. Smaller procedures (1000-2000 grafts) may take 4-5 hours, while larger sessions (3000-5000 grafts) can take 6-8 hours. The procedure is performed under local anesthesia, and you'll be comfortable throughout."
    },
    {
      question: "Is hair transplant painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel pain during the surgery. You may feel slight pressure or tugging sensations. After the procedure, mild discomfort is normal and easily managed with prescribed pain medication. Most patients report minimal pain during recovery."
    },
    {
      question: "When will I see results after hair transplant?",
      answer: "Transplanted hair typically falls out within 2-3 weeks (shock loss), which is normal. New growth begins around 3-4 months post-surgery. You'll see noticeable improvement at 6 months, with full results visible at 12-18 months as hair continues to mature and thicken."
    },
    {
      question: "What is the cost of hair transplant in India?",
      answer: "The cost varies based on technique, number of grafts needed, and clinic location. Generally, FUE costs ₹40-80 per graft, while FUT costs ₹30-60 per graft. A typical procedure requiring 2000-3000 grafts may cost ₹80,000-₹2,40,000. We provide detailed cost estimates during your consultation based on your specific needs."
    },
    {
      question: "Am I a good candidate for hair transplant?",
      answer: "Good candidates typically have sufficient donor hair (back and sides of the head), realistic expectations, and stable hair loss patterns. Generally, patients over 25 years old with established hair loss patterns are ideal candidates. We assess your candidacy during consultation by examining your scalp, hair quality, and medical history."
    },
    {
      question: "How long is the recovery period?",
      answer: "Initial recovery takes 7-10 days. You can return to desk work within 2-3 days. Scabs fall off within 7-10 days. Avoid strenuous exercise for 2 weeks and swimming for 4 weeks. Full healing of donor and recipient areas takes about 2-3 weeks. You'll receive detailed post-operative care instructions."
    },
    {
      question: "Will transplanted hair look natural?",
      answer: "Yes! Dr. Chacko Cyriac uses advanced techniques to create natural-looking hairlines with appropriate density, angle, and direction. Transplanted hair grows naturally and can be cut, styled, and colored just like your original hair. The key is artistic placement that matches your facial features and age."
    },
    {
      question: "Can women get hair transplants?",
      answer: "Absolutely! Female hair loss patterns differ from men's, often showing diffuse thinning rather than receding hairlines. Women with adequate donor hair and localized thinning are good candidates. FUE is often preferred for women as it doesn't require shaving the entire head. We offer specialized treatment plans for female patients."
    },
    {
      question: "Are the results permanent?",
      answer: "Yes, transplanted hair is permanent. Hair follicles taken from the donor area (back and sides of the head) are genetically resistant to DHT (the hormone causing male pattern baldness). These transplanted follicles retain this characteristic and will continue to grow for a lifetime."
    },
    {
      question: "What is PRP treatment and do I need it?",
      answer: "PRP (Platelet-Rich Plasma) therapy involves injecting your own concentrated platelets into the scalp to stimulate hair growth and strengthen existing follicles. It's beneficial for early-stage hair loss, post-transplant healing, and improving overall hair quality. While not mandatory, many patients choose PRP to enhance their results."
    },
    {
      question: "Can I get a beard or eyebrow transplant?",
      answer: "Yes! We perform specialized beard transplants for patchy beards or complete beard creation, and eyebrow transplants for over-plucked, thinning, or scarred eyebrows. These procedures use similar FUE techniques but require artistic precision to match natural growth patterns and achieve aesthetic results."
    },
    {
      question: "How do I prepare for the procedure?",
      answer: "Stop smoking at least 1 week before surgery. Avoid alcohol for 3 days prior. Don't take aspirin or anti-inflammatory medications for 2 weeks before. Wash your hair thoroughly on the morning of surgery. Eat a light breakfast. Avoid caffeine on surgery day. Wear comfortable, button-up clothing. We'll provide a complete pre-operative checklist."
    },
    {
      question: "What are the risks and side effects?",
      answer: "Hair transplant is very safe when performed by qualified surgeons. Minor side effects include swelling (typically subsides in 3-5 days), temporary numbness, mild pain, and temporary shock loss. Serious complications are rare. Dr. Cyriac's experience and advanced techniques minimize risks."
    },
    {
      question: "Why choose Dr. Chacko Cyriac for hair transplant?",
      answer: "Dr. Cyriac holds MCh Plastic Surgery from PGI Chandigarh and has international training from UK, USA, Canada, and Singapore. With 22+ years of experience and 7000+ successful procedures, he combines surgical expertise with artistic skill. Our state-of-the-art facility and personalized approach ensure optimal results."
    }
  ];

  const faqItems = items || defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-8">
              {item.question}
            </span>
            <ChevronDown
              className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              size={24}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
