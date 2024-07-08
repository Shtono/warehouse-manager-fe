export type ContainerState = 'ACTIVE' | 'ARCHIVED'

export interface TableColumnDefinition<T> {
  accessor: keyof T
  label: string
}

export type ErrorType = { message: string }
