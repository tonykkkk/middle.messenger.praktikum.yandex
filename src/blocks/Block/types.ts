export interface EventType {
  [key: string]: (event: Event) => void
}

export interface PropsType {
  [key: string]: string
}
