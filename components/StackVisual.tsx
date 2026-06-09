export default function StackVisual() {
  return (
    <div className="stack-wrap">
      <div className="stack-box">
        <div className="stack-row">
          <div className="s-icon ic-p">🎬</div>
          <span className="s-label">Creator OS</span>
          <span className="s-code">// video · content · brand</span>
        </div>
        <div className="s-divider"></div>
        <div className="stack-row">
          <div className="s-icon ic-t">⚡</div>
          <span className="s-label">Prompt Architect</span>
          <span className="s-code">// AI · frameworks · scoring</span>
        </div>
        <div className="s-divider"></div>
        <div className="stack-row">
          <div className="s-icon ic-g">📖</div>
          <span className="s-label">Manuscript Studio</span>
          <span className="s-code">// writing · validation · KDP</span>
        </div>
      </div>
    </div>
  )
}
