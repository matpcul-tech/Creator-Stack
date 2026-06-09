'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Can I use just one tool instead of the full stack?',
    a: 'Yes. Every tool has its own Free, Pro, and Studio tiers and works completely independently. The stack bundle just gives you all three at a discount. Start with whichever tool solves your most immediate problem and add more when you\'re ready.',
  },
  {
    q: 'What makes Sovereign Prose Validator different?',
    a: 'It scores writing for somatic interiority — the depth of physical and felt experience in the prose — not just grammar or clarity. It\'s a proprietary scoring layer built specifically for fiction and narrative nonfiction authors, with a methodology grounded in the author\'s own training and publishing experience.',
  },
  {
    q: 'Is the stack built on top of ChatGPT?',
    a: 'No. Creator Stack runs on Anthropic\'s Claude API and a proprietary Sovereign Health LLM fine-tuned on 41,000+ training pairs. This is a deliberate choice aligned with the platform\'s values around safety, sovereignty, and responsible AI deployment.',
  },
  {
    q: 'Can the stack be acquired separately from Sovereign Shield?',
    a: 'Yes. Creator Stack is a distinct business unit — three SaaS products with shared infrastructure. Sovereign Shield Technologies\' GPU cloud thesis, tribal technology partnerships, and Chickasaw Nation sovereign infrastructure work are separate and not part of any creator stack transaction.',
  },
  {
    q: 'When will Stripe checkout be live across all three tools?',
    a: 'Stripe billing is operational within Manuscript Studio OS today. Unified billing across all three tools under one Creator Stack subscription is in active development. Waitlist users get first access at launch pricing.',
  },
  {
    q: 'What is voice profile training?',
    a: 'You upload a sample of your writing. Manuscript Studio analyzes your voice — sentence rhythm, interiority patterns, vocabulary tendencies. Every draft it generates afterward is calibrated to sound like you, not like a generic AI output.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq">
      <div className="container">
        <p className="sec-label">FAQ</p>
        <h2 className="sec-title" style={{ marginBottom: '48px' }}>Common questions.</h2>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q} <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
