export const LOAD_RUNNING_PROCESSES = 'LOAD_RUNNING_PROCESSES'
export type BackgroundProcess = {
  imageName?: string
  sessionName?: string
  type: 'game' | 'other' | 'music'
}

export type TaskList = {
  imageName?: string
  pid?: number
  sessionName?: string
  sessionNumber?: number
  memUsage?: number
}
