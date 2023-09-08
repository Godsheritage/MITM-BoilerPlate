declare module '@tidbits/react-tidbits-calendar' {
  import { MomentInput, Moment, unitOfTime } from 'moment';
  import { StyledComponent, DefaultTheme } from 'styled-components';
  import { SystemBoxProps } from '@tidbits/react-tidbits/Box';
  import { BaseDropdown, RefHandler } from '@tidbits/react-tidbits/Popover';

  type DayOfWeek = number;

  export interface FormatterParams {
    startDate: Moment;
    endDate: Moment;
    locale: string;
    format: string | null;
  }

  export interface RangeValueParams {
    startDate: Moment;
    endDate: Moment;
    minDate: Moment | null;
    maxDate: Moment | null;
    locale: string;
    firstDayOfWeek: DayOfWeek;
  }

  export interface Range {
    relative: boolean;
    incrementable: boolean;
    decrementable: boolean;
    rangeValue: (rangeParams: RangeValueParams) => [MomentInput, MomentInput];
    formatter: (rangeParams: FormatterParams) => string;
  }

  export type NavItem = string | { name: string; component: React.ComponentType<NavItemProps> };

  export interface CalendarButtonProps {
    children?: React.ReactNode;
    enablePeriodNav?: boolean;
    incrementDate?: () => void;
    decrementDate?: () => void;
    canIncrement?: boolean;
    canDecrement?: boolean;
    closeCalendar?: () => void;
  }

  export const CalendarButton: StyledComponent<
    'div',
    DefaultTheme,
    CalendarButtonProps & SystemBoxProps,
    never
  >;

  export type RANGE_RELATIVE = 'relative';
  export type RANGE_RANGE = 'r';
  export type RANGE_DAY = 'd';
  export type RANGE_WEEK = 'w';
  export type RANGE_MONTH = 'm';
  export type RANGE_YEAR = 'y';
  export type RANGE_LAST_7_DAYS = 'd7';
  export type RANGE_LAST_30_DAYS = 'd30';
  export type RANGE_LAST_60_DAYS = 'd60';
  export type RANGE_LAST_90_DAYS = 'd90';
  export type RANGE_LAST_WEEK = 'lw';
  export type RANGE_LAST_4_WEEKS = 'w4';
  export type RANGE_LAST_8_WEEKS = 'w8';
  export type RANGE_LAST_12_WEEKS = 'w12';
  export type RANGE_LAST_MONTH = 'lm';
  export type RANGE_YEAR_TO_DATE = 'ytd';
  export type RANGE_LIFETIME_TO_DATE = 'ltd';

  export const RANGES: {
    relative: RANGE_RELATIVE;
    range: RANGE_RANGE;
    day: RANGE_DAY;
    week: RANGE_WEEK;
    month: RANGE_MONTH;
    year: RANGE_YEAR;
    d7: RANGE_LAST_7_DAYS;
    d30: RANGE_LAST_30_DAYS;
    d60: RANGE_LAST_60_DAYS;
    d90: RANGE_LAST_90_DAYS;
    lw: RANGE_LAST_WEEK;
    w4: RANGE_LAST_4_WEEKS;
    w8: RANGE_LAST_8_WEEKS;
    w12: RANGE_LAST_12_WEEKS;
    lm: RANGE_LAST_MONTH;
    ytd: RANGE_YEAR_TO_DATE;
    ltd: RANGE_LIFETIME_TO_DATE;
  };

  export type DefaultRangeKey = keyof typeof RANGES;
  export type DefaultRangeVal = typeof RANGES[DefaultRangeKey];

  export const ranges: Partial<Record<DefaultRangeVal, Range>>;

  type DefaultRangeSet = keyof typeof RANGES;

  export interface CalendarConfig<R extends string> {
    date?: MomentInput;
    locale?: string;
    today?: MomentInput;
    ranges?: Record<R, Range>;
    range?: R;
    firstDayOfWeek?: DayOfWeek;
    oneSymbolWeekDays?: boolean;
    disableFuture?: boolean;
    disablePast?: boolean;
    maxDate?: MomentInput;
    minDate?: MomentInput;
    enablePeriodNav?: boolean;
    displayInline?: boolean;
    applyText?: string;
    cancelText?: string;
    startDateText?: string;
    endDateText?: string;
    smHeading?: string;
    navItems?: Partial<Record<R, string>>;
    smClose?: string;
    smDone?: string;
    relativeRanges?: Partial<Record<R, string>>;
    showPresetsRangeValue?: boolean;
    headerDateFormat?: string;
  }

  export interface SelectedDate {
    prettifiedRange: string;
    range: string;
    isoRange: string;
    isoPrettyRange: string;
  }

  export interface CalendarTargetProps {
    selectedDate: SelectedDate;
    enablePeriodNav: boolean;
    incrementDate: () => void;
    decrementDate: () => void;
    canIncrement: boolean;
    canDecrement: boolean;
    setHidden: (hidden: boolean) => void;
    isHidden: boolean;
    ref: RefHandler;
  }

  export interface CalendarProps<R extends string> {
    target: (props: CalendarTargetProps) => React.ReactNode;
    config?: CalendarConfig<R>;
    dateSelected?: (SelectedDate) => void;
    tabSelected?: (R) => void;
    popoverProps?: React.ComponentProps<typeof BaseDropdown>;
  }

  // TODO: Rewrite with extensible generic
  export const Calendar: <RangeSet = DefaultRangeSet>(
    props: CalendarProps<RangeSet>
  ) => React.ReactElement | null;

  type ClampDateParams = {
    date: MomentInput;
    minDate?: MomentInput;
    maxDate?: MomentInput;
    accuracy: unitOfTime.StartOf;
  };
  export const clampDate: (params: ClampDateParams) => Moment;

  interface GetMomentizedRangeParams<Ranges = typeof ranges> {
    range: keyof Ranges;
    ranges?: Ranges;
    date?: Moment;
    minDate?: MomentInput;
    maxDate?: MomentInput;
    locale?: string;
    firstDayOfWeek?: DayOfWeek;
  }

  export const getMomentizedRange: (
    params: GetMomentizedRangeParams
  ) => undefined | [Moment, Moment];

  export const swapMinMaxDates: ({
    maxDate,
    minDate,
  }: {
    maxDate: MomentInput;
    minDate: MomentInput;
  }) => { maxDate: Moment; minDate: Moment };

  type IsDisabledDate = (date: Moment, accuracy: unitOfTime.StartOf) => boolean;

  export const Header: React.FC<{
    monthSelection?: boolean;
    yearSelection?: boolean;
    isDisabledDate: IsDisabledDate;
  }>;

  interface MonthProps<RangeType = RANGE_RANGE> extends SystemBoxProps {
    rangeType?: RangeType;
    disableHoveringOverSelection?: boolean;
    onDayHover?: (date: Moment) => void;
    onDaySelect?: (date: Moment) => void;
    hoveredDateRange?: Moment[]; // check me
    selectedDateRange?: Moment[];
    monthDateISO?: string;

    draftMode?: boolean;
    isSelected?: boolean;
    isSmallMode?: boolean;
    usePlaceholderDate?: boolean;
    shortHeading?: JSX.Element | string;
    isDisabledDate: IsDisabledDate;
  }

  export const Month: React.FC<MonthProps>;
}
