import { cellDataAccessor } from './table.model';
export function transformStatToTableColumn(stat, statKey, statsMap, dataType, sortable = true) {
    return {
        columnDef: `${[statKey]}.${stat}`,
        headerCell: `${[statKey]}.${stat}`,
        headerLabel: statsMap[stat].abbrev,
        dataType,
        sortable,
    };
}
export function transformTableColumnsToTableRows(cols) {
    return cols.map(col => {
        const { columnDef, headerLabel, dataType, sortable } = col;
        return { columnDef, cellData: data => cellDataAccessor(data, col.columnDef), headerLabel, dataType, sortable: sortable ?? true };
    });
}
export function getTableHeaders(rows) {
    return rows.map(row => row.columnDef);
}
//# sourceMappingURL=table.transformer.js.map