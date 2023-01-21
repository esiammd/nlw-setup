import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firstdayOfTheYear = dayjs().startOf('year');
    const today = new Date();

    const dates = [];
    let compareDate = firstdayOfTheYear;

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate());
        compareDate = compareDate.add(1, 'day');
    }

    return dates;
}