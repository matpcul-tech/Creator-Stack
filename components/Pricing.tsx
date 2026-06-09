'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  const proPrice = annual ? '$47' : '$59'
  const proPeriod = annual ? 'per month, billed $564/yr' : 'per month'
  const studioPrice = annual ? '$79' : '$99'
  const studioPeriod = annual ? 'per month, billed $948/yr' : 'per month'
  const stackProPrice = annual ? '$47' : '$59'
  const stackProLabel = annual ? 'Stack Pro / month billed annually' : 'Stack Pro / month'
  const stackStudioPrice = annual ? '$79' : '$99'
  const stackStudioLabel = annual ? 'Stack Studio / month billed annually' : 'Stack Studio / month'

  return (
    <section id="pricing">
      <div className="container">
        <p className="sec-label">Pricing</p>
        <h2 className="sec-title">Start free. Stack up when you&apos;re ready.</h2>
        <p className="sec-sub">Use each tool individually or bundle all three under one Creator Stack subscription. The stack always costs less than buying separate.</p>

        <div className="stack-callout">
          <div className="sc-left">
            <span className="sc-tag">Creator Stack Bundle</span>
            <div className="sc-headline">All three tools. One subscription. One price cap.</div>
            <div className="sc-sub">Buy all three tools separately and you pay up to $127/mo. Stack them and you never pay more than $99.</div>
          </div>
          <div className="sc-right">
            <div className="sc-price-block">
              <div className="sc-amount teal">{stackProPrice}</div>
              <div className="sc-period">{stackProLabel}</div>
            </div>
            <div className="sc-divider"></div>
            <div className="sc-price-block">
              <div className="sc-amount gold">{stackStudioPrice}</div>
              <div className="sc-period">{stackStudioLabel}</div>
            </div>
            <a
              href="https://creator-os-5zc8.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-cta"
            >
              Get the Stack
            </a>
          </div>
        </div>

        <div className="price-toggle">
          <span className={`toggle-label${!annual ? ' active' : ''}`}>Monthly</span>
          <div
            className={`toggle-track${annual ? ' on' : ''}`}
            onClick={() => setAnnual((v) => !v)}
          >
            <div className="toggle-thumb"></div>
          </div>
          <span className={`toggle-label${annual ? ' active' : ''}`}>
            Annual <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="price-grid">
          <div className="pc">
            <p className="pc-tier">Free</p>
            <div className="pc-price">$0</div>
            <p className="pc-period">forever — no card required</p>
            <ul className="pc-list">
              <li>Manuscript Studio — 5 drafts/mo</li>
              <li>Prompt Architect — 20 prompts/mo</li>
              <li>Creator OS — 3 video exports/mo</li>
              <li className="off">Voice profile training</li>
              <li className="off">Sovereign Prose Validator</li>
              <li className="off">KDP Launch Walkthrough</li>
              <li className="off">HeyGen avatar integration</li>
            </ul>
            <a
              href="https://creator-os-5zc8.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tier bt-outline"
            >
              Start Free
            </a>
          </div>

          <div className="pc featured">
            <div className="pc-badge">MOST POPULAR</div>
            <p className="pc-tier">Stack Pro</p>
            <div className="pc-price">{proPrice}</div>
            <p className="pc-period">{proPeriod}</p>
            <div className="pc-savings">Saves $8/mo vs buying separate</div>
            <ul className="pc-list">
              <li>Manuscript Studio Pro — unlimited drafts</li>
              <li>Prompt Architect Pro — unlimited prompts</li>
              <li>Creator OS Pro — 30 video exports/mo</li>
              <li>Voice profile training</li>
              <li>Sovereign Prose Validator</li>
              <li>KDP Launch Walkthrough</li>
              <li className="off">HeyGen avatar integration</li>
            </ul>
            <a
              href="https://creator-os-5zc8.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tier bt-solid"
            >
              Get Stack Pro
            </a>
          </div>

          <div className="pc">
            <p className="pc-tier">Stack Studio</p>
            <div className="pc-price">{studioPrice}</div>
            <p className="pc-period">{studioPeriod}</p>
            <div className="pc-savings">Saves $28/mo vs buying separate</div>
            <ul className="pc-list">
              <li>Manuscript Studio Studio — everything unlocked</li>
              <li>Prompt Architect Studio — everything unlocked</li>
              <li>Creator OS Studio — unlimited exports</li>
              <li>HeyGen avatar integration</li>
              <li>Priority AI processing</li>
              <li>Multi-project workspace</li>
              <li>Founder-level support channel</li>
            </ul>
            <a
              href="https://creator-os-5zc8.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tier bt-outline"
            >
              Get Stack Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
