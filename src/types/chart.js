import { shape, string, number } from 'prop-types';

export const PriceDataItem = shape({
  date: string.isRequired,
  open: number.isRequired,
  high: number.isRequired,
  low: number.isRequired,
  close: number.isRequired,
  adjClose: number.isRequired,
  volume: number.isRequired,
  symbol: string.isRequired
});