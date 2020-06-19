import React from 'react'
import styled from 'styled-components'

import Widget from '../Widget'
import { MEDIA } from 'const'

const CardRowDrawer = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 100vh 0 999vw rgba(47, 62, 78, 0.5);
  z-index: 9998;
  width: 50rem;
  height: 50rem;
  border-radius: 0.6rem;
  background: var(--color-background-pageWrapper);

  @media ${MEDIA.mobile} {
    width: 100%;
    bottom: 0;
    top: initial;
    height: 100vh;
    overflow-y: scroll;
  }

  // Inner td wrapper
  > td {
    position: relative;
    background: transparent;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 6px;
    margin: 0;
    width: 100%;
    height: 100%;
    border: 0;

    @media ${MEDIA.mobile} {
      box-shadow: none;
    }

    > div {
      margin: 0;
    }

    span.symbol {
      color: #b02ace;
    }

    > div > h4 {
      height: 5.6rem;
      padding: 0 1.6rem;
      box-sizing: border-box;
      letter-spacing: 0;
      font-size: 1.6rem;
      text-align: left;
      color: var(--color-text-primary);
      margin: 0;
      display: flex;
      align-items: center;
      font-family: var(--font-default);
      font-weight: var(--font-weight-regular);
      border-bottom: 0.1rem solid var(--color-background-banner);

      @media ${MEDIA.mobile} {
        padding: 0 5rem 0 1.6rem;
      }
    }

    .times {
    }
  }
`
const CardDrawerCloser = styled.a`
  position: absolute;
  right: 1.6rem;
  top: 0.8rem;
  text-decoration: none;
  font-size: 4rem;
  line-height: 1;
  color: #526877;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

interface CardDrawerProps {
  children: React.ReactNode
  closeDrawer: () => void
}

export const CardDrawer = React.forwardRef<HTMLTableRowElement, CardDrawerProps>(function ReffedCardDrawer(
  { children, closeDrawer },
  ref,
) {
  return (
    <CardRowDrawer className="cardRowDrawer" ref={ref}>
      <td>
        <CardDrawerCloser onClick={closeDrawer}>&times;</CardDrawerCloser>
        {children}
      </td>
    </CardRowDrawer>
  )
})

export const CardTable = styled.table<{
  $bgColor?: string

  $columns?: string
  $rows?: string
  $gap?: string
  $rowSeparation?: string
  $padding?: string

  $align?: string
  $justify?: string

  $webCSS?: string
}>`
  display: grid;
  flex: 1;
  width: 100%;

  .checked {
    margin: 0;
    outline: 0;
  }
  
  > thead {
    position: sticky;
    z-index: 2;
    background: var(--color-background-row-hover);
    top: 0;
    font-size: 1.1rem;
    color: var(--color-text-primary);
    letter-spacing: 0;
    font-weight: var(--font-weight-bold);
  }

  > thead, tbody {
    > tr:not(.cardRowDrawer) {
      position: relative;
      display: grid;
      grid-template-columns: ${({ $columns }): string => $columns || `repeat(auto-fit, minmax(3rem, 1fr))`};
      // grid-template-rows
      ${({ $rows }): string => ($rows ? `grid-template-rows: ${$rows};` : '')}
      // grid-gap
      ${({ $gap }): string => ($gap ? `grid-gap: ${$gap};` : '')}
      align-items: ${({ $align = 'center' }): string => $align};
      justify-content: ${({ $justify = 'center' }): string => $justify};
      border-bottom: .1rem solid rgba(159,180,201,0.50);
      border-radius: 0;

      min-height: 4rem;

      // How much separation between ROWS
      margin: ${({ $rowSeparation = '1rem' }): string => `${$rowSeparation} 0`};
      text-align: center;
      transition: all 0.2s ease-in-out;

      padding: ${({ $padding = '0' }): string => `${$padding}`};

      &:hover {
        background: var(--color-background-row-hover);
      }
      
      &.highlight {
        background-color: var(--color-background-highlighted);
        border-bottom-color: #fbdf8f;
      }

      &.selected {
        background-color: rgba(159,180,201,0.50);
      }

      // Separation between CELLS
      > th,
      > td {
        display: flex;
        align-items: center;

        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
      }
    }
  }  
  
  // Table Header
  > thead {
    // No styling for table header
    > tr {
      background-color: transparent;
      box-shadow: none;

      > th {
        color: inherit;
        line-height: 1.2;
        font-size: 1.1rem;
        height: 4rem;

        &.sortable {
          cursor: pointer;
        }

        > svg {
          margin: 0 0 0.04rem 0.2rem;
        }
      }
      
      > th.filled {
      }
    }
  }

  // Table Body
  tbody {
    flex: 1;
    display: flex;
    flex-flow: nowrap column;
    font-size: 1.1rem;
    font-family: var(--font-mono);
    font-weight: var(--font-weight-regular);
    color: var(--color-text-primary);
    letter-spacing: -0.085rem;
    line-height: 1.2;
  }
  
  tbody {
    > tr:not(.cardRowDrawer) {

      > td {
        &.cardOpener {
          display: none;
        }

        // td.status
        &.status {
          flex-flow: column;
          align-items: flex-start;

          > .lowBalance {
            color: #B27800;
            display: flex;
            margin: 0.2rem 0;
            font-size: smaller;
        
            > img {
              margin: 0 0 0.2rem 0.45rem;
            }
          }
        }
      }

    }
  }

  // Top level custom CSS
  ${({ $webCSS }): string | undefined => $webCSS}
`

export const CardWidgetWrapper = styled(Widget)<{ $columns?: string }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  width: auto;
  margin: 0 auto;
  padding: 0 0 2.4rem;
  min-height: 54rem;
  min-width: 85rem;
  max-width: 140rem;

  background: var(--color-background-pageWrapper);
  box-shadow: 0 -1rem 4rem 0 rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.02) 0 0.276726rem 0.221381rem 0,
    rgba(0, 0, 0, 0.027) 0 0.666501rem 0.532008rem 0, rgba(0, 0, 0, 0.035) 0 1.25216rem 1.0172rem 0,
    rgba(0, 0, 0, 0.043) 0 2.23363rem 1.7869rem 0, rgba(0, 0, 0, 0.05) 0 4.17776rem 3.34221rem 0,
    rgba(0, 0, 0, 0.07) 0 10rem 8rem 0;

  border-radius: 0.6rem;
  font-size: 1.6rem;
  line-height: 1;

  @media ${MEDIA.tablet} {
    min-width: 100vw;
    min-width: calc(100vw - 4.8rem);
    width: 100%;
    max-width: 100%;
  }

  @media ${MEDIA.mobile} {
    max-width: 100%;
    min-width: initial;
    width: 100%;

    > div {
      flex-flow: row wrap;
    }
  }

  ${CardTable} {
    display: flex;
    flex-flow: column nowrap;
    width: auto;

    /////////////////////
    // TABLE HEADERS
    /////////////////////
    > thead {
      background: var(--color-background);
      border-radius: 0.6rem;

      @media ${MEDIA.mobile} {
        display: none;
      }

      > tr:not(.cardRowDrawer) > th {
        font-size: 1.1rem;
        color: var(--color-text-primary);
        letter-spacing: 0;
        text-transform: uppercase;
      }
    }

    /////////////////////
    // TABLE BODY
    /////////////////////
    > tbody {
      font-size: 1.3rem;
      line-height: 1;

      @media ${MEDIA.mobile} {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
      }

      > tr:not(.cardRowDrawer) > td {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        word-break: break-all;
        white-space: normal;

        @media ${MEDIA.mobile} {
          width: 100%;
          border-bottom: 0.1rem solid rgba(0, 0, 0, 0.14);
          padding: 1rem 0.5rem;
          flex-flow: row nowrap;

          &:last-of-type {
            border: 0;
          }
        }

        &::before {
          @media ${MEDIA.mobile} {
            content: attr(data-label);
            margin-right: auto;
            font-weight: var(--font-weight-bold);
            text-transform: uppercase;
            font-size: 1rem;
            font-family: var(--font-default);
            letter-spacing: 0;
            white-space: nowrap;
            padding: 0 0.5rem 0 0;
            color: var(--color-text-primary);
          }
        }
      }
    }

    /////////////////////
    // ALL TABLE ROWS
    /////////////////////
    > thead > tr:not(.cardRowDrawer),
    > tbody > tr:not(.cardRowDrawer) {
      ${({ $columns }): string => ($columns ? `grid-template-columns: ${$columns}` : '')};
      text-align: left;
      padding: 0.8rem 1.6rem;
      margin: 0;
      justify-content: flex-end;

      @media ${MEDIA.mobile} {
        padding: 1.6rem 0.8rem;
        display: table;
        flex-flow: column wrap;
        width: 100%;
        border-bottom: 0.2rem solid rgba(159, 180, 201, 0.5);
      }

      > td,
      > th {
        &:first-of-type {
          text-align: left;
          justify-content: flex-start;
          padding: 0 0.8rem;
        }
      }
    }
  }
`
