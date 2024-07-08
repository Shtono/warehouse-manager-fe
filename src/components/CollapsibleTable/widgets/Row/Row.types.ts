import { ValueType } from '../../CollapsibleTable.types.ts'

export interface BaseRowType {
  id: string
}

export interface NestedRowType<S>
  extends BaseRowType,
    Record<string | 'secondary', ValueType | S[]> {
  secondary: S[]
}

export type RowPropsType<S extends BaseRowType, T extends NestedRowType<S>> = {
  row: T
  secondaryRows: S[]
  primaryColumns: { label: string; accessor: keyof T }[]
  secondaryColumns: { label: string; accessor: keyof S }[]
  secondaryTableTitle: string
  onDelete?: (id: string) => void
}
