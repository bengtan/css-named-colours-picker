/**
 * Copyright (c) 2021-present Beng Tan
 */

import * as React from 'react'
import { Row, useTable, useFilters, useSortBy } from 'react-table'

type Colour = {
    label: string
    hex: string
    r?: number
    g?: number
    b?: number
    h?: number
    s?: number
    l?: number
}

const Colours0: Colour[] = [
    { label: 'aliceblue', hex: 'f0f8ff' },
    { label: 'antiquewhite', hex: 'faebd7' },
    { label: 'aqua', hex: '00ffff' },
    { label: 'aquamarine', hex: '7fffd4' },
    { label: 'azure', hex: 'f0ffff' },
    { label: 'beige', hex: 'f5f5dc' },
    { label: 'bisque', hex: 'ffe4c4' },
    { label: 'black', hex: '000000' },
    { label: 'blanchedalmond', hex: 'ffebcd' },
    { label: 'blue', hex: '0000ff' },
    { label: 'blueviolet', hex: '8a2be2' },
    { label: 'brown', hex: 'a52a2a' },
    { label: 'burlywood', hex: 'deb887' },
    { label: 'cadetblue', hex: '5f9ea0' },
    { label: 'chartreuse', hex: '7fff00' },
    { label: 'chocolate', hex: 'd2691e' },
    { label: 'coral', hex: 'ff7f50' },
    { label: 'cornflowerblue', hex: '6495ed' },
    { label: 'cornsilk', hex: 'fff8dc' },
    { label: 'crimson', hex: 'dc143c' },
    { label: 'cyan', hex: '00ffff' },
    { label: 'darkblue', hex: '00008b' },
    { label: 'darkcyan', hex: '008b8b' },
    { label: 'darkgoldenrod', hex: 'b8860b' },
    { label: 'darkgray', hex: 'a9a9a9' },
    { label: 'darkgreen', hex: '006400' },
    { label: 'darkgrey', hex: 'a9a9a9' },
    { label: 'darkkhaki', hex: 'bdb76b' },
    { label: 'darkmagenta', hex: '8b008b' },
    { label: 'darkolivegreen', hex: '556b2f' },
    { label: 'darkorange', hex: 'ff8c00' },
    { label: 'darkorchid', hex: '9932cc' },
    { label: 'darkred', hex: '8b0000' },
    { label: 'darksalmon', hex: 'e9967a' },
    { label: 'darkseagreen', hex: '8fbc8f' },
    { label: 'darkslateblue', hex: '483d8b' },
    { label: 'darkslategray', hex: '2f4f4f' },
    { label: 'darkslategrey', hex: '2f4f4f' },
    { label: 'darkturquoise', hex: '00ced1' },
    { label: 'darkviolet', hex: '9400d3' },
    { label: 'deeppink', hex: 'ff1493' },
    { label: 'deepskyblue', hex: '00bfff' },
    { label: 'dimgray', hex: '696969' },
    { label: 'dimgrey', hex: '696969' },
    { label: 'dodgerblue', hex: '1e90ff' },
    { label: 'firebrick', hex: 'b22222' },
    { label: 'floralwhite', hex: 'fffaf0' },
    { label: 'forestgreen', hex: '228b22' },
    { label: 'fuchsia', hex: 'ff00ff' },
    { label: 'gainsboro', hex: 'dcdcdc' },
    { label: 'ghostwhite', hex: 'f8f8ff' },
    { label: 'gold', hex: 'ffd700' },
    { label: 'goldenrod', hex: 'daa520' },
    { label: 'gray', hex: '808080' },
    { label: 'green', hex: '008000' },
    { label: 'greenyellow', hex: 'adff2f' },
    { label: 'grey', hex: '808080' },
    { label: 'honeydew', hex: 'f0fff0' },
    { label: 'hotpink', hex: 'ff69b4' },
    { label: 'indianred', hex: 'cd5c5c' },
    { label: 'indigo', hex: '4b0082' },
    { label: 'ivory', hex: 'fffff0' },
    { label: 'khaki', hex: 'f0e68c' },
    { label: 'lavender', hex: 'e6e6fa' },
    { label: 'lavenderblush', hex: 'fff0f5' },
    { label: 'lawngreen', hex: '7cfc00' },
    { label: 'lemonchiffon', hex: 'fffacd' },
    { label: 'lightblue', hex: 'add8e6' },
    { label: 'lightcoral', hex: 'f08080' },
    { label: 'lightcyan', hex: 'e0ffff' },
    { label: 'lightgoldenrodyellow', hex: 'fafad2' },
    { label: 'lightgray', hex: 'd3d3d3' },
    { label: 'lightgreen', hex: '90ee90' },
    { label: 'lightgrey', hex: 'd3d3d3' },
    { label: 'lightpink', hex: 'ffb6c1' },
    { label: 'lightsalmon', hex: 'ffa07a' },
    { label: 'lightseagreen', hex: '20b2aa' },
    { label: 'lightskyblue', hex: '87cefa' },
    { label: 'lightslategray', hex: '778899' },
    { label: 'lightslategrey', hex: '778899' },
    { label: 'lightsteelblue', hex: 'b0c4de' },
    { label: 'lightyellow', hex: 'ffffe0' },
    { label: 'lime', hex: '00ff00' },
    { label: 'limegreen', hex: '32cd32' },
    { label: 'linen', hex: 'faf0e6' },
    { label: 'magenta', hex: 'ff00ff' },
    { label: 'maroon', hex: '800000' },
    { label: 'mediumaquamarine', hex: '66cdaa' },
    { label: 'mediumblue', hex: '0000cd' },
    { label: 'mediumorchid', hex: 'ba55d3' },
    { label: 'mediumpurple', hex: '9370db' },
    { label: 'mediumseagreen', hex: '3cb371' },
    { label: 'mediumslateblue', hex: '7b68ee' },
    { label: 'mediumspringgreen', hex: '00fa9a' },
    { label: 'mediumturquoise', hex: '48d1cc' },
    { label: 'mediumvioletred', hex: 'c71585' },
    { label: 'midnightblue', hex: '191970' },
    { label: 'mintcream', hex: 'f5fffa' },
    { label: 'mistyrose', hex: 'ffe4e1' },
    { label: 'moccasin', hex: 'ffe4b5' },
    { label: 'navajowhite', hex: 'ffdead' },
    { label: 'navy', hex: '000080' },
    { label: 'oldlace', hex: 'fdf5e6' },
    { label: 'olive', hex: '808000' },
    { label: 'olivedrab', hex: '6b8e23' },
    { label: 'orange', hex: 'ffa500' },
    { label: 'orangered', hex: 'ff4500' },
    { label: 'orchid', hex: 'da70d6' },
    { label: 'palegoldenrod', hex: 'eee8aa' },
    { label: 'palegreen', hex: '98fb98' },
    { label: 'paleturquoise', hex: 'afeeee' },
    { label: 'palevioletred', hex: 'db7093' },
    { label: 'papayawhip', hex: 'ffefd5' },
    { label: 'peachpuff', hex: 'ffdab9' },
    { label: 'peru', hex: 'cd853f' },
    { label: 'pink', hex: 'ffc0cb' },
    { label: 'plum', hex: 'dda0dd' },
    { label: 'powderblue', hex: 'b0e0e6' },
    { label: 'purple', hex: '800080' },
    { label: 'rebeccapurple', hex: '663399' },
    { label: 'red', hex: 'ff0000' },
    { label: 'rosybrown', hex: 'bc8f8f' },
    { label: 'royalblue', hex: '4169e1' },
    { label: 'saddlebrown', hex: '8b4513' },
    { label: 'salmon', hex: 'fa8072' },
    { label: 'sandybrown', hex: 'f4a460' },
    { label: 'seagreen', hex: '2e8b57' },
    { label: 'seashell', hex: 'fff5ee' },
    { label: 'sienna', hex: 'a0522d' },
    { label: 'silver', hex: 'c0c0c0' },
    { label: 'skyblue', hex: '87ceeb' },
    { label: 'slateblue', hex: '6a5acd' },
    { label: 'slategray', hex: '708090' },
    { label: 'slategrey', hex: '708090' },
    { label: 'snow', hex: 'fffafa' },
    { label: 'springgreen', hex: '00ff7f' },
    { label: 'steelblue', hex: '4682b4' },
    { label: 'tan', hex: 'd2b48c' },
    { label: 'teal', hex: '008080' },
    { label: 'thistle', hex: 'd8bfd8' },
    { label: 'tomato', hex: 'ff6347' },
    { label: 'turquoise', hex: '40e0d0' },
    { label: 'violet', hex: 'ee82ee' },
    { label: 'wheat', hex: 'f5deb3' },
    { label: 'white', hex: 'ffffff' },
    { label: 'whitesmoke', hex: 'f5f5f5' },
    { label: 'yellow', hex: 'ffff00' },
    { label: 'yellowgreen', hex: '9acd32' },
]

function rgb2hsl(rgb: {r: number, g: number, b: number}): {h: number, s: number, l: number} {
    // Fractions from 0 to 1
    const r = rgb.r / 255
    const g = rgb.g / 255
    const b = rgb.b / 255

    // https://css-tricks.com/converting-color-spaces-in-javascript/
    const cmin = Math.min(r, g, b)
    const cmax = Math.max(r, g, b)
    const delta = cmax - cmin
    let h

    // Calculate h
    if (delta == 0) {
        h = 0
    }
    else if (cmax == r) {
        // Red is max
        h = ((g - b) / delta) % 6
    }
    else if (cmax == g) {
        // Green is max
        h = (b - r) / delta + 2
    }
    else {
        // Blue is max
        h = (r - g) / delta + 4
    }

    h = Math.round(h * 60)

    // Ensure h is positive
    if (h < 0) {
        h += 360
    }

    // Calculate lightness
    let l = (cmax + cmin) / 2

    // Calculate saturation
    let s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)

    return {h, s, l}
}

function augmentColours() {
    for (let c of Colours0) {
        // Integers from 0 to 255
        c.r = parseInt(c.hex.substring(0, 2), 16)
        c.g = parseInt(c.hex.substring(2, 4), 16)
        c.b = parseInt(c.hex.substring(4, 6), 16)
        Object.assign(c, rgb2hsl(c as any))
    }
    return Colours0
}

type Preset = {
    label: string
    filters?: {id: string, value: (Number | undefined)[]}[],
    sort?: {id: string, desc?: boolean}[]
}

const Presets: Preset[] = [
    { label: 'Red', filters: [{id: 'h', value: [320, 29]}, {id: 's', value: [5]}] },
    { label: 'Orange', filters: [{id: 'h', value: [9, 51]}] },
    { label: 'Yellow', filters: [{id: 'h', value: [40, 79]}] },
    { label: 'Green', filters: [{id: 'h', value: [60, 160]}] },
    { label: 'Cyan', filters: [{id: 'h', value: [160, 208]}] },
    { label: 'Blue', filters: [{id: 'h', value: [180, 250]}] },
    { label: 'Purple', filters: [{id: 'h', value: [241, 340]}] },
    { label: 'Pink', filters: [{id: 'h', value: [300, 359]}] },
    { label: 'br' },

    { label: 'White-ish', filters: [{id: 'l', value: [90]}], sort: [{id: 'l', desc: true}] },
    { label: 'Grey / Black', filters: [{id: 'h', value: [undefined, 10]}, {id: 's', value: [undefined, 10]}], sort: [{id: 'l'}] },
    { label: 'Brown-ish', filters: [{id: 'h', value: [undefined, 55]}, {id: 's', value: [5]}] },

    { label: 'spacer' },
    { label: 'Light', filters: [{id: 'l', value: [71]}], sort: [{id: 'l', desc: true}] },
    { label: 'Medium', filters: [{id: 'l', value: [30, 71]}], sort: [{id: 'l', desc: true}] },
    { label: 'Dark', filters: [{id: 'l', value: [undefined, 42]}], sort: [{id: 'l'}] },

    { label: 'spacer' },
    { label: 'Clear all filters', filters: [], sort: [] },
]

export default function App() {
    const data = React.useMemo(() => {
        return augmentColours()
    }, [])
    const columns = React.useMemo(() => [
        { Header: 'Name', accessor: 'label', Filter: TextFilterWidget, Cell: renderWithCopyButton },
        { Header: 'Colour', id: 'colour', disableFilters: true, disableSortBy: true, Cell: renderColour },
        { Header: 'RGB', accessor: 'hex', disableFilters: true, disableSortBy: true, Cell: renderWithCopyButton },
        { Header: 'R', accessor: 'r', disableFilters: true },
        { Header: 'G', accessor: 'g', disableFilters: true },
        { Header: 'B', accessor: 'b', disableFilters: true },
        { Header: 'H', accessor: 'h', Filter: NumberRangeFilterWidget, filter: 'circular-range' },
        { Header: 'S', accessor: 's', Filter: NumberRangeFilterWidget, filter: 'range' },
        { Header: 'L', accessor: 'l', Filter: NumberRangeFilterWidget, filter: 'range' },
    ], [])

    const table = useTable({
        columns,
        data,
        filterTypes: {
            'range': numberRangeFilter,
            'circular-range': numberCircularRangeFilter,
        },
        disableSortRemove: true,
        initialState: {
            sortBy: [{id: 'label'}]
        }
    } as any, useFilters, useSortBy)
    const tableAny: any = table     // typecast

    const presetsPane = <div className="presets">
        {Presets.map((preset, index) => {
            if (preset.label == 'br') {
                return <span key={index} className="newline"></span>
            }
            else if (preset.label == 'spacer') {
                return <span key={index} className="spacer"></span>
            }

            return <button key={index} onClick={() => {
                // Remove all filters first
                tableAny.setAllFilters([])

                preset.filters!.forEach(item => {
                    tableAny.setFilter(item.id, item.value)
                })
                if (preset.sort) {
                    tableAny.setSortBy(preset.sort)
                }
            }}>{preset.label}</button>
        })}
    </div>

    const tablePane = <table {...table.getTableProps()}>
        <thead>
        {table.headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
                <th className={`column-${column.id}`} {...column.getHeaderProps()}>
                    <div {...(column as any).getSortByToggleProps()} title="To sort by multiple columns, hold SHIFT and click">
                        <span className="heading">
                            {column.render('Header')}
                        </span>
                        <span className="sortBy">
                            {(column as any).isSorted ?
                                (column as any).isSortedDesc ? ' 🔽' : ' 🔼'
                            : ''}
                        </span>
                    </div>
                    {(column as any).canFilter && <div className="filter">{column.render('Filter')}</div>}
                </th>
            ))}
            </tr>
        ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
        {table.rows.map(row => {
            table.prepareRow(row)
            return (
            <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                return (
                    <td className={`column-${cell.column.id}`} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                    </td>
                )
                })}
            </tr>
            )
        })}
        </tbody>
    </table>

    return <>
        {presetsPane}
        {tablePane}
    </>
}

function TextFilterWidget({column: { filterValue, setFilter }}: any) {
    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder='Filter ...'
        />
    )
}

function NumberRangeFilterWidget({column: { filterValue = [], setFilter }}: any) {  
    return <div className="number-range-filter-widget">
        <input
            value={filterValue[0] || ''}
            onChange={e => {
                const val = e.target.value
                setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
            }}
        />
        to
        <input
            value={filterValue[1] || ''}
            onChange={e => {
                const val = e.target.value
                setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
            }}
        />
    </div>
}

function numberRangeFilter(rows: Array<Row>, ids: Array<String>, filterValue: Array<Number | undefined>) {
    if (filterValue[0] === undefined && filterValue[1] === undefined) {
        return rows
    }

    const min = filterValue[0] === undefined ? Number.MIN_SAFE_INTEGER : filterValue[0]
    const max = filterValue[1] === undefined ? Number.MAX_SAFE_INTEGER : filterValue[1]

    ids.forEach((key: any) => {
        rows = rows.filter(row => {
            const value = row.values[key]
            return value >= min && value <= max
        })
    })

    return rows
}

function numberCircularRangeFilter(rows: Array<Row>, ids: Array<String>, filterValue: Array<Number | undefined>) {
    if (filterValue[0] === undefined && filterValue[1] === undefined) {
        return rows
    }

    const min = filterValue[0] === undefined ? Number.MIN_SAFE_INTEGER : filterValue[0]
    const max = filterValue[1] === undefined ? Number.MAX_SAFE_INTEGER : filterValue[1]

    if (min <= max) {
        ids.forEach((key: any) => {
            rows = rows.filter(row => {
                const value = row.values[key]
                return value >= min && value <= max
            })
        })
    }
    else {
        // circular
        ids.forEach((key: any) => {
            rows = rows.filter(row => {
                const value = row.values[key]
                return value >= min || value <= max
            })
        })
    }

    return rows
}

function renderColour(data: any) {
    return <div className="rendered-colour" style={{backgroundColor: `#${data.row.original.hex}`}}>&nbsp;</div>
}

function copyToClipboard(text: string) {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = text
    input.style.position = 'absolute'
    input.style.left = '-9999px'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
}

function ClipboardIcon() {
    // https://commons.wikimedia.org/wiki/File:Ic_content_paste_48px.svg
    // Creative Commons Attribution 4.0 International license. 
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path d="M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4h-8.37c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-14 0c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36h-28v-32h4v6h20v-6h4v32z"/>
        <path d="M0 0h48v48h-48z" fill="none"/>
    </svg>
}

function renderWithCopyButton(data: any) {
    return <>
        <span>{data.cell.value}</span>
        <button key={data.row.id} title="copy to clipboard" onClick={() => {
            copyToClipboard(data.cell.value)
        }}>
            <ClipboardIcon />
        </button>
    </>
}
