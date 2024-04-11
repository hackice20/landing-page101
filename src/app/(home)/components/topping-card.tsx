'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

export type Topping = {
    id: string;
    name: string;
    price: number;
    image: string;
    isAvailable: boolean;
};
type PropType = {
    topping: Topping;
    selectedToppings: Topping[];
    handleCheckBoxCheck: (topping: Topping) => void;
};
const ToppingCard = ({ topping, selectedToppings, handleCheckBoxCheck }: PropType) => {
    const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id);

    return (
        <Button
            onClick={() => handleCheckBoxCheck(topping)}
            variant={'outline'}
            className={cn(
                'flex flex-col h-42 relative',
                isCurrentSelected ? 'border-primary' : ''
            )}>
            <Image src={topping.image} width={80} height={80} alt={topping.name} />
            <h4>{topping.name}</h4>
            <p>&#8377;{topping.price}</p>
            {isCurrentSelected && <CircleCheck className="absolute top-1 right-1 text-primary" />}
        </Button>
    );
};

export default ToppingCard;
