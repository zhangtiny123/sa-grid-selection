
'use strict'

import { Grid, Flex, Text } from 'smbls';

export const GridCell = {
  extend: Flex,
  props: ({ state }) => {
    return {
      background: state.x <= state.root.gsSelectedX && state.y <= state.root.gsSelectedY ? 'cellActive' : 'cellInactive',
      width: '26px',
      height: '26px',
      align: 'center',
      justify: 'center',
      borderRadius: '2px',
      ':hover': {
        background: 'cellActive',
        cursor: 'pointer',
      },
    }
  },
  state: {},
  on: {
    stateCreated: (element, state, context, updateOptions) => {
      state.update({
        x: element.parent.key % state.root.gridColumns,
        y: Math.floor(element.parent.key / state.root.gridColumns)
      })
    }
  }
}

export const GridSelectionTable = {
  extend: Grid,
  props: ({ props }) => ({
    columns: `repeat(${props.cls || 16}, 1fr)`,
    rows: `repeat(${props.rs || 8}, 1fr)`,
    gap: 'X',
    padding: 'Z',
    background: '#fff',
    round: 'Z',
    border: 'none',
    width: '100%',
    boxShadow: '0px 0px 50px 0px #0000000D',
    ...props,
  }),
  state: {},
  childExtend: {
    extend: Flex,
    props: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    GridCell: {
      extend: GridCell,
      on: {
        click: (e, el, state) => {
          if (el.parent.key % state.root.gridColumns === state.root.gsSelectedX && Math.floor(el.parent.key / state.root.gridColumns) === state.root.gsSelectedY) {
            state.root.update({ gsSelectedX: -1, gsSelectedY: -1, gsSelectedCells: 0 })
          } else {
            const x = el.parent.key % state.root.gridColumns
            const y = Math.floor(el.parent.key / state.root.gridColumns)
            state.root.update({
              gsSelectedX: x,
              gsSelectedY: y,
              gsSelectedCells: (x + 1) * (y + 1)
            })
          }
        }
      }
    },
  },
  $propsCollection: ({ props, state }) => new Array(props.cls * props.rs).fill({}),
  on: {
    stateCreated: (element, state, context, updateOptions) => {
      state.root.update({
        gsSelectedX: -1,
        gsSelectedY: -1,
        gsSelectedCells: 0,
        gridColumns: element.props.cls,
        gridRows: element.props.rs,
      })
    }
  }
};

export const GridSelection = {
  extend: Flex,
  props: {
    flow: 'column',
    align: 'flex-start space-between',
    gap: 'A2',
    width: '90%',
    background: '#fff',
    round: 'A',
    border: 'none',
    color: '#222',
    padding: 'A2 B',
    boxShadow: '0px 5px 35px -10px #00000059',
  },
  GridSelectionHeader: {
    extend: Text,
    props: {
      fontFamily: 'EuropaFonts',
      fontWeight: 700,
    },
    text: 'Grid Selection',
  },
  GridSelectionContent: {
    extend: GridSelectionTable,
    props: {
      cls: 20,
      rs: 10,
    }
  },
  GridSelectionFooter: {
    extend: Flex,
    props: {
      flow: 'row',
      align: 'center space-between',
      gap: 'X',
      width: '100%',
    },
    Coordinates: {
      extend: Flex,
      props: {
        fontFamily: 'EuropaFonts',
        fontWeight: 400,
        color: 'gray',
        gap: 'X',
      },
      CoordinatesKey: {
        extend: Text,
        text: 'Selection coordinates: '
      },
      CoordinatesValue: {
        extend: Text,
        props: {
          color: 'black',
        },
        text: (element, state) => `${state.root.gsSelectedX + 1}, ${state.root.gsSelectedY + 1}`
      }
    },
    TotalCells: {
      extend: Flex,
      props: {
        fontFamily: 'EuropaFonts',
        fontWeight: 400,
        color: 'gray',
        gap: 'X',
      },
      TotalCellsKey: {
        extend: Text,
        text: 'Total cell selected: '
      },
      TotalCellsValue: {
        extend: Text,
        props: {
          color: 'black',
        },
        text: (element, state) => `${state.root.gsSelectedCells}`
      }
    }
  }
}
