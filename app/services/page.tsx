'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GradientBackground } from '@/components/ui/GradientBackground'
import { Search, Target, Users, ClipboardCheck, Handshake, Heart } from 'lucide-react'

const processSteps = [
  {
    title: 'Discovery',
    icon: Search,
    description: "In understanding your organisation, we'll:",
    items: [
      "Examine your organisation's history, mission, vision, strategy, structure, and culture, identifying the specific challenges and opportunities relevant to both the organisation and the role.",
      'Define your needs, provide new perspectives, and challenge assumptions where appropriate.',
      'Create tailored candidate specifications, including detailed job descriptions.',
      'Confirm the search strategy, scope, and parameters, and agree on target candidates and timelines.',
    ],
  },
  {
    title: 'Identification',
    icon: Target,
    description: "To pinpoint suitable permanent talent, we'll:",
    items: [
      'Carry out focused research and sourcing using our existing talent network, complemented by market mapping to uncover passive candidates.',
      'Promote the role across digital job boards, industry-specific websites, and social media to attract and engage active job seekers.',
      'Present a long-list candidate report for your review.',
    ],
  },
  {
    title: 'Screening',
    icon: Users,
    description: "In evaluating identified prospects, we'll:",
    items: [
      'Screen candidates to evaluate their experience and suitability for the role.',
      'Invite qualified candidates for in-person interviews to assess technical skills, behavioural competencies, motivations, and cultural fit.',
      'Perform preliminary background checks on shortlisted permanent candidates.',
    ],
  },
  {
    title: 'Review and Assessment',
    icon: ClipboardCheck,
    description: "Once we've narrowed down our selection, we'll:",
    items: [
      'Present short-listed candidates with a full breakdown of the screening process.',
      'Help you with the selection of the candidates for interview',
      'Provide each candidate with an interview briefing package',
      'Coordinate all interviews',
      'Attend panel interviews, if requested',
    ],
  },
  {
    title: 'Hiring',
    icon: Handshake,
    description: "When you've chosen your preferred new team member, we'll:",
    items: [
      'Finalise all pre-employment checks',
      'Facilitate offer negotiations',
      'Confirm the commencement date and help the candidate through their resignation process and notice period',
      'Advise unsuccessful candidates with honest and detailed feedback',
    ],
  },
  {
    title: 'Commencing and review',
    icon: Heart,
    description: "To ensure a successful integration, we'll:",
    items: [
      'Prepare the candidate to start their new role',
      'Check in with them regularly whilst they work their notice period.',
      'Remain in contact with both you and your successful candidate for six months after commencement to ensure effective integration into the role',
    ],
  },
]

function ProcessStep({ step, index, isInView }: { step: typeof processSteps[0]; index: number; isInView: boolean }) {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent border border-accent/20">
            <Icon className="w-5 h-5" />
          </div>
          {index < processSteps.length - 1 && (
            <div className="w-px h-full bg-gradient-to-b from-accent/20 to-transparent mt-4" />
          )}
        </div>
        <div className="flex-1 pb-12">
          <h3 className="text-xl font-semibold text-surface-50 mb-3">
            {step.title}
          </h3>
          <p className="text-surface-400 mb-4 font-body">
            {step.description}
          </p>
          <ul className="space-y-3">
            {step.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-surface-300 font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-100px' })
  const retainedRef = useRef(null)
  const retainedInView = useInView(retainedRef, { once: true, margin: '-100px' })
  const bespokeRef = useRef(null)
  const bespokeInView = useInView(bespokeRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 overflow-hidden">
        <GradientBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Our services</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-surface-50">
              How we work
            </h1>
          </motion.div>
        </div>
      </section>

      <section ref={processRef} className="py-24 px-6 bg-surface-900 border-t border-surface-800">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface-50 mb-4">
              Permanent Search
            </h2>
            <p className="text-surface-400 max-w-2xl font-body">
              This is our most common recruitment process and enables us to fully understand what you require in your next hire and allows you to know how we will find the top talent you require.
            </p>
          </motion.div>

          <div className="max-w-3xl">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} isInView={processInView} />
            ))}
          </div>
        </div>
      </section>

      <section ref={retainedRef} className="py-24 px-6 bg-surface-950 border-t border-surface-800">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={retainedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface-50 mb-6">
              Retained Search
            </h2>
            <p className="text-surface-300 leading-relaxed font-body">
              Our Retained Search service provides a dedicated and prioritised approach to securing the right talent for critical roles. By working exclusively with you, we commit the time and resources needed to conduct a thorough, tailored search, ensuring access to the highest-quality candidates in the market. Regular sourcing updates and reviews throughout the process ensure that you see the entire market and what suits your needs best.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={bespokeRef} className="py-24 px-6 bg-surface-900 border-t border-surface-800">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bespokeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface-50 mb-6">
              Bespoke Recruitment Solutions
            </h2>
            <p className="text-surface-300 leading-relaxed font-body">
              Our Bespoke Recruitment Solutions are designed to give you flexibility and choice beyond traditional search methods. Whether you require project-based hiring, talent mapping, market insights, or a tailored recruitment campaign, we build solutions around your specific needs. By combining industry expertise, innovative sourcing strategies, and a consultative approach, we deliver the outcomes that you require. Our consultants have experience in mass recruitment campaigns, executive search and through tailored recruitment campaigns, with their finger on the pulse in the market they can provide accurate and up to date market analysis and insights.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
