import styled from 'styled-components'

export const OrderBookStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: column wrap;
  font-size: var(--font-size-default);
  color: var(--color-text-secondary1);
  /* overflow-y: scroll; */
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.6rem;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  flex-flow: row nowrap;

  > span:nth-of-type(1) {
    flex: 1 1 38%;
  }

  > span:nth-of-type(2) {
    flex: 1 1 32%;
    text-align: right;
  }

  > span:nth-of-type(3) {
    flex: 1 1 30%;
    text-align: right;
  }
`

export const Book = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0 1rem;
`

export const Orders = styled.div`
  display: flex;
  flex-flow: column wrap;
`

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  font-size: var(--font-size-small);
  cursor: pointer;

  &:hover {
    background-color: var(--color-text-hover);
  }

  > span {
    display: flex;
    justify-content: flex-start;
    color: var(--color-text-weak);
  }

  > span:nth-of-type(1) {
    flex: 1 1 38%;
  }

  > span:nth-of-type(2) {
    flex: 1 1 32%;
    justify-content: flex-end;
  }

  > span:nth-of-type(3) {
    flex: 1 1 30%;
    justify-content: flex-end;
  }

  .sell & {
    > span:first-of-type {
      color: var(--color-short);
    }
  }

  .buy & {
    > span:first-of-type {
      color: var(--color-long);
    }
  }
`

export const Spread = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 0.1rem solid var(--color-border);
  border-bottom: 0.1rem solid var(--color-border); */
  padding: 1rem 0;
  font-size: var(--font-size-large);
  color: var(--color-text-strong);
`