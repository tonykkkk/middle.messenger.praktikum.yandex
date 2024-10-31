// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EmitProps = any | undefined
type Callback = (args: EmitProps) => void
type Listeners = Record<string, Array<Callback>>
class EventBus {
  listeners: Listeners

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: () => void) {
    if (event && typeof event === 'string') {
      if (!this.listeners?.[event]) {
        this.listeners[event] = []
      }

      this.listeners[event].push(callback)
    }
  }

  off(event: string, callback: Callback) {
    if (event && typeof event === 'string') {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`)
      }
      this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback)
    }
  }

  emit(event: string, props?: EmitProps): void {
    if (event && typeof event === 'string') {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`)
      }

      this.listeners[event].forEach((listener) => {
        listener(props)
      })
    }
  }
}

export default EventBus
