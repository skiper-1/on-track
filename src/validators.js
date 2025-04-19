import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  NAV_ITEMS,
  BUTTONS_TYPES,
} from '@/constants';
import { ICONS } from './icons';

const isPageValid = (page) =>
  NAV_ITEMS.some((navItem) => navItem.page === page);

const isIconValid = (icon) => Object.keys(ICONS).includes(icon);

const isNavItemValid = (navItem) => NAV_ITEMS.includes(navItem);

const isButtonTypeValid = (button) => BUTTONS_TYPES.includes(button);

const isTimelineItemValid = ({ hour }) => isHourValid(hour);

const isActivityValid = ({ id, name, secondsToComplete }) => {
  if (isNull(id)) {
    return true;
  }

  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComplete),
  ].every(Boolean);
};

const isHourValid = (hour) =>
  isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);

const validateSelectOptions = (options) => options.every(isSelectOptionValid);

const isUndefinedOrNull = (value) => isUndefined(value) || isNull(value);

const isSelectValueValid = (value) =>
  isNotEmptyString(value) || isNumberOrNull(value);

const isNull = (value) => value === null;

const isNumberOrNull = (value) => isNumber(value) || isNull(value);

const isUndefined = (value) => value === undefined;

const isNumber = (value) => typeof value === 'number';

const isSelectOptionValid = ({ value, label }) =>
  isNumber(value) || (isNotEmptyString(value) && isNotEmptyString(label));

const isBetween = (hour, start, end) => hour >= start && hour <= end;

const isNotEmptyString = (value) => isString(value) && value.length > 0;

const isString = (value) => typeof value === 'string';

export {
  isNull,
  isUndefined,
  isNumber,
  isNumberOrNull,
  isUndefinedOrNull,
  isPageValid,
  isHourValid,
  isTimelineItemValid,
  validateSelectOptions,
  isActivityValid,
  isButtonTypeValid,
  isSelectValueValid,
  isNavItemValid,
  isIconValid,
};
