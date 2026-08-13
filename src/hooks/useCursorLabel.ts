export type CursorLabel = 'VIEW' | 'CODE' | 'OPEN' | 'PDF' | ''

const eventName = 'portfolio-cursor'

export function setCursorLabel(label: CursorLabel) {
  window.dispatchEvent(new CustomEvent<CursorLabel>(eventName, { detail: label }))
}

export function bindCursor(label: CursorLabel) {
  return {
    onPointerEnter: () => setCursorLabel(label),
    onPointerLeave: () => setCursorLabel(''),
  }
}

export { eventName as cursorEventName }
