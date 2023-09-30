"use client";

import { useTheme } from "next-themes";
import { VisuallyHidden, useSwitch} from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle (props) {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

return (
    
  <div>
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <Moon onClick={() => setTheme('dark')}/> : <Sun onClick={() => setTheme('light')}/>}
          </div>
      </Component>
    </div>


      
    </div>
  )
};