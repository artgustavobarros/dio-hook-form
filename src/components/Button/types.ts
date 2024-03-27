import { ComponentPropsWithoutRef } from "react";

export interface IButtonProps extends ComponentPropsWithoutRef<'button'>{
    title: string;
    isValid: boolean
}