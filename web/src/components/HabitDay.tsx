import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';

export function HabitDay() {
    return (
        <Popover.Root>
            <Popover.Trigger className="w-10 h-10 bd-zinc-900 border-2 border-zinc-800 rounded-lg">
                <Popover.Portal>
                    <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                        <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                        
                        <span className="front-semibold text-zinc-400">martes</span>
                        <span className="mt-1 font-extrabold leading-tight text-3xl">25/01</span>
                    
                        <ProgressBar progress={75} />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Trigger>
        </Popover.Root>
    );
}