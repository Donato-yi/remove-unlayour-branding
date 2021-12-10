setTimeout(function () {
  const toolsPanelEl = document.getElementsByClassName('builder-tools-panel')[0];
  const brandingEl = document.getElementsByClassName('blockbuilder-branding')[0];

  if (toolsPanelEl && branding) {
    toolsPanelEl.removeChild(branding)
  }

}, 5 * 1000)