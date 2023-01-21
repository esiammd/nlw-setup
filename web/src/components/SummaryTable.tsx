import { HabitDay } from "./HabitDay";

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export function SummaryTable() {
    return (
        <div className="w-flull flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, index) => {
                    return (
                        <div
                            key={index}
                            className="text-zinc-400 text-xl w-10 h-10 font-bold flex items-center justify-center"
                        >
                            {weekDay}
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                <HabitDay />
                <HabitDay />
                <HabitDay />
                <HabitDay />
            </div>
        </div>
    );
}