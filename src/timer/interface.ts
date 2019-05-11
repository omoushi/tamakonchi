
export type Tool = {
  id: number,
  top: number,
  left: number,
}

export type TimerState = {
  tools: Tool[]
};

export type TimerStateEvent = {
  tools: Tool[]
};

export type TimerEvents = {
  moreTool(): void
}