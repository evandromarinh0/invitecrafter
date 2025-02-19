'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  link?: string;
}

export function IconButton(props: IconButtonProps){
  function copyLink(){
    navigator.clipboard.writeText(props.link ?? '')
  }

  return(
    <button onClick={copyLink} className={twMerge("p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300", props.className)}>
      {props.children}
    </button>
  )
}