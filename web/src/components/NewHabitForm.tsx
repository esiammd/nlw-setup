import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";
import { Check } from "phosphor-react";
import { api } from '../lib/axios';

const availableWeekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

export function NewHabitForm() {
    const [title, setTitle] = useState("");
    const [weekDays, setWeekDays] = useState<number[]>([]);

    async function createNewHabit(event: FormEvent) {
        event.preventDefault();

        if (!title || weekDays.length === 0) {
            alert("Para crear un nuevo hábito es necesario informar un compromiso y una recurrencia.");
        }

        await api.post('habits', {
            title,
            weekDays,
        });

        setTitle('');
        setWeekDays([]);

        alert('¡Hábito creado con éxito!');
    }

    function handleToggleWeekDay(weekDayIndex: number) {
        if (weekDays.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                ¿Cuál es tu compromiso?
            </label>

            <input
                type="text"
                id="title"
                placeholder="Ej.: Hacer ejercicio, dormir bien, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                ¿Cuál es la recurrencia?
            </label>

            <div className="mt-3 flex flex-col gap-2">
                {availableWeekDays.map((weekDay, index) => (
                    <Checkbox.Root
                        key={weekDay}
                        className="flex items-center gap-3 group"
                        checked={weekDays.includes(index)}
                        onCheckedChange={() => handleToggleWeekDay(index)}
                    >
                        <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                            <Checkbox.Indicator>
                                <Check size={20} className="text-white" />
                            </Checkbox.Indicator>
                        </div>

                        <span className="text-white leading-tight">
                            {weekDay}
                        </span>
                    </Checkbox.Root>
                ))}
            </div>

            <button
                type="submit"
                className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}