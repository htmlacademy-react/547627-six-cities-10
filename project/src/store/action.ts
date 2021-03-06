import { createAction } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';
import { IOffer } from '../types/offer';

export const selectCity = createAction<City>('offers/selectCity');
export const selectOfferOption = createAction<OffersOption>('offers/selectOption');
export const highlightCard = createAction<IOffer['id'] | null>('offers/hightlightCard');
