'use client'

import { Plus, Trash2, GripVertical } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  onChange: (faqs: FAQItem[]) => void
}

export default function FAQSection({ faqs, onChange }: FAQSectionProps) {
  const addFAQ = () => {
    onChange([...faqs, { question: '', answer: '' }])
  }

  const removeFAQ = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index)
    onChange(newFaqs.length > 0 ? newFaqs : [{ question: '', answer: '' }])
  }

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...faqs]
    newFaqs[index][field] = value
    onChange(newFaqs)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <GripVertical size={20} className="text-gray-400 cursor-move" />
              <h4 className="text-sm font-semibold text-gray-700">FAQ #{index + 1}</h4>
            </div>
            {faqs.length > 1 && (
              <button
                type="button"
                onClick={() => removeFAQ(index)}
                className="text-red-600 hover:text-red-700 p-1"
                title="Remove FAQ"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question *
              </label>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                placeholder="Enter your question..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer *
              </label>
              <textarea
                value={faq.answer}
                onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                placeholder="Enter your answer..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                required
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addFAQ}
        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={20} />
        Add Another FAQ
      </button>

      <p className="text-sm text-gray-500 italic">
        💡 FAQs will be displayed at the end of your blog post with proper schema markup for SEO
      </p>
    </div>
  )
}
