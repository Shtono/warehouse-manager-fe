import { NestedRowType, BaseRowType } from './widgets/Row/Row.types.ts'

export type ValueType = string | number | boolean

export type TableDefinition<
  S extends BaseRowType,
  T extends Omit<NestedRowType<S>, 'secondary'>,
> = {
  primaryColumns: {
    label: string
    accessor: keyof T
  }[]
  secondaryColumns: {
    label: string
    accessor: keyof S
  }[]
}

export type CollapsibleTableProps<S extends BaseRowType, T extends NestedRowType<S>> = {
  tableDefinition: TableDefinition<S, T>
  tableData: T[]
  secondaryTableTitle: string
  onDelete?: (id: string) => void
}
