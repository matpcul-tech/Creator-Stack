export default function Tools() {
  return (
    <section id="tools">
      <div className="container">
        <p className="sec-label">The Stack</p>
        <h2 className="sec-title">Every tool a sovereign creator needs — in one place.</h2>
        <p className="sec-sub">Use each tool on its own or bundle all three. The more you stack, the more you save.</p>
        <div className="tools-grid">

          <div className="tool-card p">
            <span className="tc-tag tg-p">Creator OS</span>
            <h3 className="tc-title">Turn ideas into video content. Fast.</h3>
            <p className="tc-desc">AI video generation with narration-driven length, Ken Burns motion, karaoke captions, and HeyGen avatar integration. Your face, AI speed, no crew needed.</p>
            <div className="app-price-row">
              <div className="app-tier"><div className="at-name">Free</div><div className="at-price">$0</div></div>
              <div className="app-tier"><div className="at-name">Pro</div><div className="at-price">$29<span>/mo</span></div></div>
              <div className="app-tier"><div className="at-name">Studio</div><div className="at-price">$49<span>/mo</span></div></div>
            </div>
            <ul className="tc-features">
              <li>AI video from a single prompt or script</li>
              <li>HeyGen avatar layer — your likeness, automated</li>
              <li>Ken Burns motion + karaoke caption export</li>
              <li>Pexels stock + JSON2Video pipeline built in</li>
              <li>Brand voice consistency across every video</li>
            </ul>
            <a
              href="https://creator-os.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-link"
            >
              Launch Creator OS →
            </a>
          </div>

          <div className="tool-card t">
            <span className="tc-tag tg-t">Prompt Architect</span>
            <h3 className="tc-title">Engineer prompts that actually perform.</h3>
            <p className="tc-desc">Five tested frameworks, live clarity scoring, AI enhancement, and a reusable library. Stop rewriting from zero. Build a prompt asset that compounds.</p>
            <div className="app-price-row">
              <div className="app-tier"><div className="at-name">Free</div><div className="at-price">$0</div></div>
              <div className="app-tier"><div className="at-name">Pro</div><div className="at-price">$19<span>/mo</span></div></div>
              <div className="app-tier"><div className="at-name">Studio</div><div className="at-price">$39<span>/mo</span></div></div>
            </div>
            <ul className="tc-features">
              <li>Five frameworks — pick your mode for any task</li>
              <li>AI enhancement with precision and clarity score</li>
              <li>Template library organized by use case</li>
              <li>Compare variations before you commit</li>
              <li>Export directly into Creator OS or Manuscript</li>
            </ul>
            <a
              href="https://prompt-architect-gules.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-link"
            >
              Open Prompt Architect →
            </a>
          </div>

          <div className="tool-card g">
            <span className="tc-tag tg-g">Manuscript Studio</span>
            <h3 className="tc-title">Write, validate, and publish your book.</h3>
            <p className="tc-desc">Voice-trained AI drafting, somatic interiority scoring, structure checks, and a KDP launch walkthrough. From rough idea to published author — no agency required.</p>
            <div className="app-price-row">
              <div className="app-tier"><div className="at-name">Free</div><div className="at-price">$0</div></div>
              <div className="app-tier"><div className="at-name">Pro</div><div className="at-price">$19<span>/mo</span></div></div>
              <div className="app-tier"><div className="at-name">Studio</div><div className="at-price">$39<span>/mo</span></div></div>
            </div>
            <ul className="tc-features">
              <li>Voice file upload for author-matched AI drafting</li>
              <li>Sovereign Prose Validator — interiority scoring</li>
              <li>Quick Draft with background jobs + live streaming</li>
              <li>Structure check, issue fix, title generator</li>
              <li>Full KDP Launch Walkthrough baked in</li>
            </ul>
            <a
              href="https://manuscript-studio-os.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-link"
            >
              Open Manuscript Studio →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
