import { CREATOR_OS_URL, PROMPT_ARCHITECT_URL, MANUSCRIPT_STUDIO_URL } from '@/lib/links'

export default function StackVisual() {
  return (
    <div className="stack-wrap">
      <div className="stack-box">
        <a
          className="stack-row"
          href={CREATOR_OS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="s-icon ic-p">🎬</div>
          <span className="s-label">Creator OS</span>
          <span className="s-code">// video · content · brand</span>
        </a>
        <div className="s-divider" />
        <a
          className="stack-row"
          href={PROMPT_ARCHITECT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="s-icon ic-t">⚡</div>
          <span className="s-label">Prompt Architect</span>
          <span className="s-code">// AI · frameworks · scoring</span>
        </a>
        <div className="s-divider" />
        <a
          className="stack-row"
          href={MANUSCRIPT_STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="s-icon ic-g">📖</div>
          <span className="s-label">Manuscript Studio</span>
          <span className="s-code">// writing · validation · KDP</span>
        </a>
      </div>
    </div>
  )
}
